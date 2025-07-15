import { prisma } from "@repo/db";
import { appRouter } from "@repo/trpc";
import * as trpcExpress from "@trpc/server/adapters/express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import moment from "moment";
import multer from "multer";
import path, { dirname, resolve } from "path";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils.js";
import { fileURLToPath } from "url";
import z from "zod";
import { downloadVideo } from "./controllers/downloadVideo.js";
import { importVideo } from "./controllers/importVideo.js";
import { scheduleVideo } from "./controllers/scheduleVideo.js";
import { creatorAuth, editorAuth } from "./lib/auths.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
if (process.env.NODE_ENV !== "production") {
  dotenv.config({ path: resolve(__dirname, "../../../.env") });
}

console.log("RENDER ENV CHECK:", {
  REDIS_URL: process.env.REDIS_URL,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  CREATOR_AUTH_SECRET: process.env.CREATOR_AUTH_SECRET,
  PORT: process.env.PORT,
});

const envSchema = z.object({
  VITE_BACKEND_URL: z.string().min(1).url(),
  VITE_CREATOR_BASE_URL: z.string().min(1).url(),
  VITE_EDITOR_BASE_URL: z.string().min(1).url(),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
  EDITOR_AUTH_SECRET: z.string().min(1),
  CREATOR_AUTH_SECRET: z.string().min(1),
  RAZORPAY_WEBHOOK_SECRET: z.string().min(1).optional(),
  REDIS_URL: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  NODEMAILER_USER: z.string().min(1).email(),
  NODEMAILER_PASS: z.string().min(1),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("Environment variables validation failed:", env.error);
  throw new Error("Invalid environment variables");
}
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename(req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({ storage });
const app = express();
app.get("/", (req, res) => {
  res.send("Backend is working");
});

console.log("origin", [
  process.env.VITE_WEB_BASE_URL!,
  process.env.VITE_CREATOR_BASE_URL!,
  process.env.VITE_EDITOR_BASE_URL!,
]);

app.use(
  cors({
    origin: [
      process.env.VITE_WEB_BASE_URL!,
      process.env.VITE_CREATOR_BASE_URL!,
      process.env.VITE_EDITOR_BASE_URL!,
    ],
    credentials: true,
  }),
);

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

app.all("/creator/api/auth/*any", toNodeHandler(creatorAuth));
app.all("/editor/api/auth/*any", toNodeHandler(editorAuth));

app.post("/webhook", express.raw({ type: "*/*" }), async (req, res) => {
  try {
    const rawBody = req.body;

    const signature = req.headers["x-razorpay-signature"];
    console.log({ signature });

    const isValid = validateWebhookSignature(
      rawBody.toString(),
      signature! as string,
      process.env.RAZORPAY_WEBHOOK_SECRET!,
    );

    if (!isValid) {
      console.error("Invalid webhook signature ");
      res.json({ error: "Invalid signature", status: 400 });
    }

    const razPayload = JSON.parse(rawBody.toString());
    if (razPayload.event.includes("subscription.")) {
      console.log("razPayload:", JSON.stringify(razPayload));
      const userId = razPayload.payload.payment.entity.notes.userId as string;

      await prisma.$transaction(async () => {
        const existingSub = await prisma.subscription.findFirst({
          where: {
            userId: userId,
            razorpaySubId: razPayload.payload.subscription.entity.id,
            status: "active",
          },
        });

        if (existingSub) {
          await prisma.subscription.update({
            where: {
              id: existingSub.id,
            },
            data: {
              status: "completed",
            },
          });
        }

        await prisma.user.update({
          where: {
            id: userId as string,
          },
          data: {
            plan: razPayload.payload.payment.entity.notes.plan,
          },
        });
        if (razPayload.event === "subscription.charged") {
          await prisma.subscription.create({
            data: {
              userId: userId as string,
              razorpayCustId: razPayload.payload.subscription.entity
                .customer_id as string,
              razorpaySubId: razPayload.payload.subscription.entity
                .id as string,
              status: "active",
            },
          });
        }

        if (razPayload.event === "subscription.pending") {
          await prisma.subscription.create({
            data: {
              userId: userId as string,
              razorpayCustId: razPayload.payload.subscription.entity
                .customer_id as string,
              razorpaySubId: razPayload.payload.subscription.entity
                .id as string,
              status: "failed",
            },
          });
        }
      });
    }

    res.json({ success: true });
  } catch (error) {
    console.error("Error in webhook handler:", error);
    res.json({ error: "Internal Server Error", status: 500 });
  }
});

app.use(express.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  }),
);

app.get("/download/:videoId", async (req, res) => {
  downloadVideo(req, res);
});

app.post("/import-video", upload.single("videoFile"), importVideo);
app.post("/schedule-video/:videoId", scheduleVideo);
app.post("/isPaymentActive", async (req, res) => {
  try {
    if (!req.body.userId || !req.body) throw new Error("userId is required");
    const user = await prisma.user.findUnique({
      where: { id: req.body.userId },
      include: { subscriptions: true },
    });
    if (!user) throw new Error("user not found");

    let isPaymentActive = user.plan === "TRIAL";
    if (user.subscriptions[0]) {
      isPaymentActive =
        (user.subscriptions[0] && user.subscriptions[0].status === "active") ||
        moment(user.subscriptions[0].createdAt).unix() <
          moment(user.subscriptions[0].createdAt).add(7, "day").unix();
    }
    res.json({ isPaymentActive });
  } catch (error) {
    console.log("err video-upload", error);
    res.json({ message: (error as Error).message });
  }
});

app.get("/getAuthUrl", async (req, res) => {
  try {
    const clientId = process.env.GOOGLE_CLIENT_ID;

    const redirectUri = `${process.env.VITE_CREATOR_BASE_URL}/addChannel`;
    if (!clientId) {
      throw new Error("GOOGLE_CLIENT_ID is not defined");
    }
    if (!redirectUri) {
      throw new Error("CREATOR_BASE_URL is not defined");
    }
    const scopes = [
      "https://www.googleapis.com/auth/youtubepartner-channel-audit",
      "https://www.googleapis.com/auth/youtube.upload",
    ];
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scopes.join(" ")}&access_type=offline&prompt=consent`;
    res.json({ authUrl });
  } catch (error) {
    console.log("err video-upload", error);
    res.json({ message: (error as Error).message });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
