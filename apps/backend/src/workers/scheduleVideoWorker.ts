import { prisma } from "@repo/db";
import { getFileFromDrive, getGoogleServices } from "@repo/trpc";
import axios from "axios";
import { Worker } from "bullmq";
import dotenv from "dotenv";
import moment from "moment";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { redisUrl } from "../queues.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, "../../../../.env") });

const worker = new Worker(
  "schedule-video-queue",
  async (job) => {
    try {
      const { videoId, scheduleAt, isPublishNow } = job.data;
      if (!videoId)
        throw new Error("Invalid payload for schedule-video-worker");
      const isVideoExist = await prisma.video.findUnique({
        where: { id: videoId },
      });

      if (!isVideoExist) throw new Error("Video does not exist");

      const { result, error } = await getGoogleServices(isVideoExist.ownerId);
      if (!result) {
        throw new Error("Failed to get Google services: " + error?.message);
      }
      const { youtube } = result;

      const gDriveStream = await getFileFromDrive(
        isVideoExist.gDriveId,
        isVideoExist.ownerId
      );

      const videoResponse = await youtube.videos.insert({
        part: ["snippet", "status"],
        requestBody: {
          snippet: {
            title: isVideoExist.title,
            description: isVideoExist.description,
            categoryId: isVideoExist.categoryId,
            tags: isVideoExist.tags?.split(","),
          },
          status: {
            privacyStatus: scheduleAt
              ? "private"
              : isPublishNow
                ? "public"
                : "private",
          },
        },
        media: {
          body: gDriveStream,
          mimeType: "video/mp4",
        },
      });

      if (scheduleAt) {
        await youtube.videos.update({
          part: ["status"],
          requestBody: {
            id: videoResponse.data.id as string,
            status: {
              publishAt: moment.unix(scheduleAt).toISOString(),
              privacyStatus: "private",
            },
          },
        });
      }
      await prisma.video.update({
        where: { id: videoId },
        data: {
          videoStatus: isPublishNow ? "PUBLISHED" : "SCHEDULED",
          scheduledAt: scheduleAt,
        },
      });
      if (isVideoExist.thumbnailUrl) {
        const response = await axios.get(isVideoExist.thumbnailUrl, {
          responseType: "blob",
        });

        const arrayBuffer = await response.data.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const mimeType = response.data.headers.get("content-type");
        if (!mimeType)
          throw new Error("Content-Type is missing from the response");

        const thumbnailResponse = await youtube.thumbnails.set({
          videoId: videoResponse.data.id as string,
          media: {
            mimeType,
            body: buffer,
          },
        });

        console.log("Thumbnail uploaded:", thumbnailResponse.data);
      }
      for (const id of isVideoExist.playlistIds) {
        await youtube.playlistItems.insert({
          part: ["snippet"],
          requestBody: {
            snippet: {
              playlistId: id,
              resourceId: {
                kind: "youtube#video",
                videoId: videoResponse.data.id,
              },
            },
          },
        });
      }
    } catch (error) {
      console.error("error in schedule-worker for job id", job.id, error);
    }
  },
  {
    connection: { url: redisUrl },
  }
);

worker.on("active", (job) => {
  console.log(`Schedule Job ${job.id} active`);
});
worker.on("completed", (job) => {
  console.log(`Schedule Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`Schedule Job ${job?.id} failed:`, err);
});
