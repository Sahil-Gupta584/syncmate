import { Queue } from "bullmq";
import dotenv from "dotenv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, "../../../.env") });

export const redisUrl = process.env.REDIS_URL;

export const uploadQueue = new Queue("import-video-queue", {
  connection: {
    url: redisUrl,
  },
});
export const scheduleQueue = new Queue("schedule-video-queue", {
  connection: {
    url: redisUrl,
  },
});
