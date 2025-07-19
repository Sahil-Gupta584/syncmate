import { prisma } from "@repo/db";
import { getGoogleServices } from "@repo/trpc";
import { Request, Response } from "express";
import { fromNodeHeaders } from "better-auth/node";
import { creatorAuth } from "../lib/auths.js";

export async function downloadVideo(req: Request, res: Response) {
  try {
    // Extract session
    const session = await creatorAuth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    if (!session.user.id) return res.status(401).json({ error: "Unauthenticated" });

    const { videoId } = req.params;
    console.log("videoId", videoId);

    const video = await prisma.video.findUnique({
      where: { id: videoId },
      include: {
        owner: { include: { channels: true } },
        editors: { include: { editor: true } },
      },
    });

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    // Permission check: owner or assigned editor
    const isOwner = video.ownerId === session.user.id;
    const isEditor = video.editors.some(
      (ve) => ve.editorEmail === session.user.email
    );
    if (!isOwner && !isEditor) {
      return res.status(403).json({ error: "Forbidden: You do not have access to this video." });
    }

    const { result, error } = await getGoogleServices(video.ownerId);
    if (!result) {
      throw new Error(error);
    }
    const { drive } = result;

    const driveRes = await drive.files.get(
      { fileId: video.gDriveId, alt: "media" },
      { responseType: "stream" },
    );

    res.setHeader("Content-Type", "video/mp4");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${video.title}.mp4"`,
    );

    driveRes.data.pipe(res);
  } catch (error) {
    console.log("err downloadVideo", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
