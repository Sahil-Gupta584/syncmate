import { Queue } from "bullmq";

export const uploadQueue = new Queue("import-video-queue", {
  connection: {
    host: "localhost",
    port: 6379,
    maxRetriesPerRequest: null,
  },
});
export const scheduleQueue = new Queue("schedule-video-queue", {
  connection: {
    host: "localhost",
    port: 6379,
    maxRetriesPerRequest: null,
  },
});
