import { prisma } from "@repo/db";
import {
  getGoogleServices,
  getOrCreateFolder,
  updateGoogleDrivePermissions,
  updateThumbnails,
} from "@repo/trpc";

import { Worker } from "bullmq";
import dotenv from "dotenv";
import { createReadStream, unlink } from "fs";
import path, { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { redisUrl } from "../queues.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, "../../../../.env") });

const worker = new Worker(
  "import-video-queue",
  async (job) => {
    try {
      const { ownerId, fileName, fileType } = job.data;
      let { selectedEditorEmails } = job.data;
      if (!ownerId || !fileName || !fileType) {
        throw new Error("Invalid payload for worker");
      }

      const { result, error } = await getGoogleServices(ownerId);
      if (!result) throw new Error("Failed to get Google services: " + error);

      const { drive } = result;
      const folderId = await getOrCreateFolder(drive, "Syncly");
      const stream = createReadStream(
        path.join(__dirname, "../../uploads", fileName),
      );
      console.log("Uploading to drive...");

      const uploadedFileData = await drive.files.create({
        requestBody: {
          name: fileName,
          parents: [folderId],
          mimeType: fileType,
        },
        media: {
          mimeType: fileType,
          body: stream,
        },
        fields: "id, thumbnailLink",
      });
      console.log("Uploaded, File ID:", uploadedFileData.data.id);

      if (!uploadedFileData.data.id)
        throw new Error("Failed to upload video to Google Drive");

      const localFilePath = path.join(__dirname, "../../uploads", fileName);
      unlink(localFilePath, (err) => {
        console.log("failed to unlink video:", job.id, err);
      });

      await prisma.video.update({
        where: { id: job.id as string },
        data: { videoStatus: "DRAFT", gDriveId: uploadedFileData.data.id },
      });
      await updateGoogleDrivePermissions({
        gDriveId: uploadedFileData.data.id as string,
        selectedEditorEmails: selectedEditorEmails,
        videoOwnerId: ownerId,
      });

      await updateThumbnails({
        ownerId: ownerId,
        videos: [
          {
            gDriveId: uploadedFileData.data.id as string,
            videoId: job.id as string,
          },
        ],
      });
    } catch (error) {
      console.error("error in importVideoWorker for jobId", job.id, error);
    }
  },
  {
    connection: {
      url: redisUrl,
    },
  },
);
worker.on("active", (job) => {
  console.log(`Upload Job ${job.id} active`);
});
worker.on("completed", (job) => {
  console.log(`Upload Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`Upload Job ${job?.id} failed:`, err);
});
