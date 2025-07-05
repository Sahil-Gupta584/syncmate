import { prisma } from "@repo/db";
import { getGoogleServices } from "@repo/trpc";
import { Request, Response } from "express";

export async function downloadVideo(req: Request, res: Response) {
  try {
    const { videoId } = req.params;
    console.log("videoId", videoId);

    const video = await prisma.video.findUnique({
      where: { id: videoId },
      include: { owner: { include: { channels: true } } },
    });

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    const { result, error } = await getGoogleServices(video.ownerId);
    if (!result) {
      throw new Error(error);
    }
    const { drive } = result;

    const driveRes = await drive.files.get(
      { fileId: video.gDriveId, alt: "media" },
      { responseType: "stream" }
    );

    res.setHeader("Content-Type", "video/mp4");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${video.title}.mp4"`
    );

    driveRes.data.pipe(res);
  } catch (error) {
    console.log("err downloadVideo", error);
    res.status(500).json({ message: (error as Error).message });
  }
}
