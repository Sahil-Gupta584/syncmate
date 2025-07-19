import { prisma } from "@repo/db";
import { fromNodeHeaders } from "better-auth/node";
import { Request, Response } from "express";
import { creatorAuth } from "../lib/auths.js";
import { scheduleQueue } from "../queues.js";

export async function scheduleVideo(req: Request, res: Response) {
  try {
    // Extract session
    const session = await creatorAuth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    if (!session.user.id) res.status(401).json({ error: "Unauthenticated" });

    const { scheduleAt, isPublishNow } = req.body;
    if (!req.params.videoId) {
      res.json({ message: "Invalid payload.", ok: false });
    }

    // Permission check
    const video = await prisma.video.findUnique({
      where: { id: req.params.videoId as string },
      include: { editors: true },
    });
    if (!video) {
      res.status(404).json({ error: "Video not found" });
    }
    const isOwner = video.ownerId === session.user.id;
    const isEditor = video.editors.some(
      (ve) => ve.editorEmail === session.user.email
    );
    if (!isOwner && !isEditor) {
      res
        .status(403)
        .json({ error: "Forbidden: You do not have access to this video." });
    }

    await scheduleQueue.remove(req.params.videoId as string);

    const jobRes = await scheduleQueue.add(
      "schedule-video",
      {
        videoId: req.params.videoId,
        scheduleAt,
        isPublishNow,
      },
      { jobId: req.params.videoId }
    );
    console.log("job", jobRes.id, "added");
    await prisma.video.update({
      where: { id: req.params.videoId as string },
      data: {
        videoStatus: isPublishNow ? "PUBLISHING" : "SCHEDULING",
        scheduledAt: scheduleAt,
      },
    });
    res.json({
      ok: true,
      message: "Video received. Scheduled in background.",
    });
  } catch (error) {
    console.log("err schedule-video", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
