import { prisma } from "@repo/db";
import { Request, Response } from "express";
import { scheduleQueue } from "../queues";

export async function scheduleVideo(req: Request, res: Response) {
  try {
    console.log("schedule-video data", req.body);
    const { scheduleAt, isPublishNow } = req.body;
    if (!req.params.videoId) {
      res.json({ message: "Invalid payload.", ok: false });
      return;
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
    res.json({ message: (error as Error).message });
  }
}
