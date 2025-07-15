import { prisma } from "@repo/db";
import { getGoogleServices } from "@repo/trpc";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import moment from "moment";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, "../../../../.env") });

export const creatorAuth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: process.env.CREATOR_AUTH_SECRET!,
  advanced: { defaultCookieAttributes: { sameSite: "None", secure: true } },
  trustedOrigins: [process.env.VITE_CREATOR_BASE_URL!],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      scope: [
        "openid",
        "profile",
        "email",
        "https://www.googleapis.com/auth/youtube.upload",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/youtubepartner-channel-audit",
      ],
      accessType: "offline", // This is crucial for refresh tokens
      prompt: "consent",
      redirectURI: `${process.env.VITE_BACKEND_URL}/creator/api/auth/callback/google`,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: ["CREATOR", "EDITOR"],
        required: true,
      },
      trialEndAt: {
        type: ["string"],
        required: true,
      },
      plan: {
        type: ["string"],
        required: true,
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user, context) => {
          return {
            data: {
              ...user,
              role: "CREATOR",
              trialEndAt: moment().add(14, "day").unix().toString(),
            },
          };
        },
      },
    },
    account: {
      create: {
        before: async (account) => {
          if (account.accessToken && account.refreshToken) {
            account.accessToken = jwt.sign(
              account.accessToken,
              process.env.CREATOR_AUTH_SECRET!,
            );
            account.refreshToken = jwt.sign(
              account.refreshToken,
              process.env.CREATOR_AUTH_SECRET!,
            );
          }
          return { data: account };
        },
        after: async ({ userId, refreshToken, accessToken }) => {
          try {
            if (!refreshToken) {
              console.log("No refresh_token found in account for user", userId);
              return;
            }
            const { result, error } = await getGoogleServices(userId);
            if (!result) {
              throw new Error("Failed to get Google services: " + error);
            }
            const { youtube } = result;
            const res = await youtube.channels.list({
              part: ["snippet", "contentDetails"],
              mine: true,
            });

            if (
              !res.data.items ||
              res.data.items.length === 0 ||
              !res.data.items[0]?.snippet ||
              !res.data.items[0].snippet.thumbnails?.medium
            ) {
              console.warn("YouTube channel data not found.");
              return;
            }

            await prisma.channel.create({
              data: {
                access_token: accessToken || "",
                refresh_token: refreshToken,
                logoUrl: res.data.items[0].snippet.thumbnails.medium.url ?? "",
                description: res.data.items[0].snippet.description ?? "",
                name: res.data.items[0].snippet.title ?? "",
                ytChannelId: res.data.items[0].id!,
                user: {
                  connect: { id: userId },
                },
              },
            });
          } catch (error) {
            console.error("Failed to add Channel for creator:", error);
          }
        },
      },
      update: {
        before: async (account) => {
          if (account.accessToken && account.refreshToken) {
            account.accessToken = jwt.sign(
              account.accessToken,
              process.env.CREATOR_AUTH_SECRET!,
            );
            account.refreshToken = jwt.sign(
              account.refreshToken,
              process.env.CREATOR_AUTH_SECRET!,
            );
          }
          return { data: account };
        },
      },
    },
  },
});

export const editorAuth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  secret: process.env.EDITOR_AUTH_SECRET!,
  advanced: { defaultCookieAttributes: { sameSite: "None", secure: true } },

  trustedOrigins: [process.env.VITE_EDITOR_BASE_URL!],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      scope: ["openid", "profile", "email"],
      redirectURI: `${process.env.VITE_BACKEND_URL}/editor/api/auth/callback/google`,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: ["CREATOR", "EDITOR"],
        required: true,
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user, context) => {
          return {
            data: {
              ...user,
              role: "EDITOR",
            },
          };
        },
      },
    },
  },
});
