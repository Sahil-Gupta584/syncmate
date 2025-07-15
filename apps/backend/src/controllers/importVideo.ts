import { prisma } from "@repo/db";
import { Request, Response } from "express";
import moment from "moment";
import { uploadQueue } from "../queues.js";

export async function importVideo(req: Request, res: Response) {
  try {
    const { channelId, importerId, ownerId, duration } = req.body;
    let { selectedEditorEmails } = req.body;

    if (selectedEditorEmails) {
      selectedEditorEmails = JSON.parse(selectedEditorEmails || "");
    }

    if (!req.file || !req.body.ownerId) {
      res.json({ message: "Invalid payload.", ok: false });
      return;
    }

    const video = await prisma.video.create({
      data: {
        createdAt: `${Date.now() / 1000}`,
        title: moment().format("DD/MM/YYYY"),
        description: "Description not added.",
        importedById: importerId,
        ownerId,
        categoryId: "22",
        tags: "",
        channelId,
        duration: +duration,
        videoStatus: "PROCESSING",
        gDriveId: "",
        editors: {
          createMany: {
            data: Array.isArray(selectedEditorEmails)
              ? selectedEditorEmails.map((e) => ({
                  editorEmail: e as string,
                  assignedAt: Date.now().toString(),
                }))
              : [],
          },
        },
      },
    });

    await uploadQueue.remove(req.params.videoId as string);
    const jobRes = await uploadQueue.add(
      "import-video-queue",
      {
        fileType: req.file.mimetype,
        fileName: req.file.originalname,
        ownerId,
        selectedEditorEmails: selectedEditorEmails || [],
      },
      { jobId: video.id },
    );
    console.log("job", jobRes.id, "added");

    res.json({
      ok: true,
      message: "Video received. Processing in background.",
    });
  } catch (error) {
    console.log("err video-upload", error);
    res.json({ message: (error as Error).message });
  }
}
