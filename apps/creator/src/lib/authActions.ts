import { backendUrl } from "@repo/lib/utils";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [
    inferAdditionalFields({
      user: {
        role: {
          type: "string",
        },
        plan: {
          type: "string",
        },
        trialEndAt: {
          type: "string",
        },
      },
    }),
  ],
  baseURL: backendUrl + "/creator/api/auth",
});

export const { useSession } = authClient;
export const signIn: (typeof authClient)["signIn"] = authClient.signIn;
export const signOut: (typeof authClient)["signOut"] = authClient.signOut;

export type Session = typeof authClient.$Infer.Session;
export type User = typeof authClient.$Infer.Session.user;
