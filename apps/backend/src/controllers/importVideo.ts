import { prisma } from "@repo/db";
import { fromNodeHeaders } from "better-auth/node";
import { Request, Response } from "express";
import moment from "moment";
import { creatorAuth } from "../lib/auths.js";
import { uploadQueue } from "../queues.js";

export async function importVideo(req: Request, res: Response) {
  try {
    console.log("started", Date.now());

    const session = await creatorAuth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    if (!session.user.id) throw new Error("Unauthenticated");

    const { channelId, ownerId, duration } = req.body;
    let { selectedEditorEmails } = req.body;

    if (selectedEditorEmails) {
      selectedEditorEmails = JSON.parse(selectedEditorEmails || "");
    }

    if (!req.file || !req.body.ownerId) {
      res.json({ message: "Invalid payload.", ok: false });
    }

    if (ownerId !== session.user.id) {
      res.status(403).json({
        error: "Forbidden: You can only import videos for your own account.",
      });
    }

    const video = await prisma.video.create({
      data: {
        createdAt: `${Date.now() / 1000}`,
        title: moment().format("DD/MM/YYYY"),
        description: "Description not added.",
        importedById: session.user.id,
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
      { jobId: video.id }
    );
    console.log("job", jobRes.id, "added");

    console.log("endedpre", Date.now());
    res.json({
      ok: true,
      message: "Video received. Processing in background.",
    });
    console.log("endedpost", Date.now());
  } catch (error) {
    console.log("err video-upload", error);
    res.json({ message: (error as Error).message });
  }
}
