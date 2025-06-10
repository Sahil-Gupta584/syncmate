// "use server";
// import { prisma } from "@repo/db";
// import { backendUrl } from "@repo/lib/constants";
// import axios from "axios";
// import { Readable } from "nodemailer/lib/xoauth2/index";
// import { backendRes, type TUpdateThumbnailsProps } from "./utils";

// export async function getVideoLink(videoId: string) {
//   try {
//     const video = await prisma.video.findUnique({
//       where: {
//         id: videoId,
//       },
//       include: { owner: { include: { channels: true } } },
//     });
//     if (!video) {
//       throw new Error("Video not found");
//     }
//     const { result, error } = await getGoogleServices(video.ownerId);
//     if (!result) {
//       throw new Error("Failed to get Google services: " + error?.message);
//     }
//     const { drive } = result;

//     const file = await drive.files.get({
//       fileId: video.gDriveId,
//       fields: "webViewLink",
//     });
//     console.log("file", JSON.stringify(file.data));

//     if (!file.data.webViewLink) {
//       throw new Error("Video not found");
//     }

//     return backendRes({
//       ok: true,
//       result: {
//         videoLink: file.data.webViewLink.replace(
//           "view?usp=drivesdk",
//           "preview"
//         ),
//       },
//     });
//   } catch (error) {
//     console.error("Error in getVideoLink:", error);
//     return backendRes({ ok: false, error: error as Error, result: null });
//   }
// }

// export async function deleteVideo(videoId: string, ownerId: string) {
//   try {
//     const video = await prisma.video.findUnique({
//       where: {
//         id: videoId,
//       },
//       include: { owner: { include: { channels: true } } },
//     });
//     if (!video) {
//       throw new Error("Video not found");
//     }
//     const { result, error } = await getGoogleServices(video.ownerId);
//     if (!result) {
//       throw new Error("Failed to get Google services: " + error?.message);
//     }
//     const { drive } = result;
//     await prisma.$transaction(async () => {
//       await drive.files.delete({
//         fileId: video.gDriveId,
//       });
//       await prisma.video.delete({
//         where: {
//           id: videoId,
//         },
//       });
//     });

//     return backendRes({ ok: true, result: null });
//   } catch (error) {
//     console.error("Error in deleteVideo:", error);
//     return backendRes({ ok: false, error: error as Error, result: null });
//   }
// }
// export async function updateGoogleDrivePermissions({
//   gDriveId,
//   selectedEditorEmails,
//   videoOwnerId,
// }: {
//   gDriveId: string;
//   selectedEditorEmails: string[];
//   videoOwnerId: string;
// }) {
//   const { result } = await getGoogleServices(videoOwnerId); // or ownerId if needed
//   if (!result) throw new Error("Failed to get Google services");

//   const { drive } = result;
//   const res = await prisma.user.findUnique({
//     where: { id: videoOwnerId },
//     select: { email: true },
//   });
//   if (!res?.email) throw new Error("Owner not found.");
//   const videoOwnerEmail = res?.email;
//   const permissions = await drive.permissions.list({
//     fileId: gDriveId,
//     fields: "permissions(id,emailAddress)",
//   });

//   const existingEmails =
//     permissions.data.permissions?.map((p) => p.emailAddress) ?? [];

//   const toGrant = selectedEditorEmails.filter(
//     (email) => !existingEmails.includes(email)
//   );
//   const toRevoke = existingEmails.filter(
//     (email) => !selectedEditorEmails.includes(email as string)
//   );
//   console.log("toGrant", toGrant);
//   await Promise.all(
//     toGrant.map((email) =>
//       drive.permissions.create({
//         fileId: gDriveId,
//         requestBody: {
//           role: "writer",
//           type: "user",
//           emailAddress: email,
//         },
//       })
//     )
//   );

//   await Promise.all(
//     permissions.data
//       .permissions!.filter(
//         (p) =>
//           toRevoke.includes(p.emailAddress!) &&
//           p.emailAddress !== videoOwnerEmail
//       )
//       .map((p) => {
//         if (p.emailAddress === videoOwnerEmail) return;

//         drive.permissions.delete({ fileId: gDriveId, permissionId: p.id! });
//       })
//   );
// }

// export async function getOrCreateFolder(
//   drive: any,
//   folderName: string
// ): Promise<string> {
//   const folderSearch = await drive.files.list({
//     q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
//     fields: "files(id, name)",
//   });

//   if (folderSearch.data.files.length > 0) {
//     return folderSearch.data.files[0].id!;
//   }

//   const folder = await drive.files.create({
//     requestBody: {
//       name: folderName,
//       mimeType: "application/vnd.google-apps.folder",
//     },
//     fields: "id",
//   });

//   return folder.data.id!;
// }

// export async function bufferToStream(buffer: ArrayBuffer): Promise<Readable> {
//   const readable = new Readable();
//   readable.push(Buffer.from(buffer));
//   readable.push(null); // End the stream
//   return readable;
// }

// export async function updateThumbnails({
//   videos,
//   ownerId,
// }: TUpdateThumbnailsProps) {
//   try {
//     const { result, error } = await getGoogleServices(ownerId);
//     if (!result) {
//       throw new Error("Failed to get Google services: " + error?.message);
//     }
//     const { drive } = result;
//     const updatedVideos: TUpdateThumbnailsProps = { videos: [], ownerId };
//     for (const { videoId, gDriveId } of videos) {
//       const file = await drive.files.get({
//         fileId: gDriveId,
//         fields: "thumbnailLink",
//       });
//       console.log("fileDatad", JSON.stringify(file.data));

//       if (!file.data.thumbnailLink) {
//         console.error("Thumbnail not found");
//         return;
//       }
//       const imgFile = await axios.get(file.data.thumbnailLink, {
//         responseType: "arraybuffer",
//       });
//       const buffer = Buffer.from(imgFile.data);

//       console.log("imgFile", imgFile.data);

//       const form = new FormData();
//       const blob = new Blob([buffer], {
//         type: imgFile.headers["content-type"],
//       });
//       form.append("image", blob, videoId);

//       const res = await axios.post(
//         "https://api.imgbb.com/1/upload?key=b10b7ca5ecd048d6a0ed9f9751cebbdc",
//         form
//       );

//       const updatedVideo = await prisma.video.update({
//         where: {
//           id: videoId,
//         },
//         data: {
//           thumbnailUrl: res.data.data.display_url,
//         },
//       });
//       updatedVideos.videos.push({
//         gDriveId: gDriveId,
//         videoId: updatedVideo.id,
//         thumbnailLink: updatedVideo.thumbnailUrl as string,
//       });
//     }

//     return backendRes({
//       ok: true,
//       result: updatedVideos as TUpdateThumbnailsProps,
//     });
//   } catch (error) {
//     console.error("Error in updateThumbnails:", error);
//     return backendRes({ ok: false, error: error as Error, result: null });
//   }
// }

// export async function addVideoScheduleJob(
//   videoId: string,
//   scheduleAt: number | null,
//   isPublishNow: boolean
// ) {
//   try {
//     const res = await axios.post(`${backendUrl}/schedule-video/${videoId}`, {
//       videoId,
//       scheduleAt,
//       isPublishNow,
//     });
//     if (!res.data.ok) {
//       throw new Error(res.data.message);
//     }
//     return backendRes({
//       ok: true,
//       result: res.data,
//     });
//   } catch (error) {
//     console.error("Error in handleScheduleVideo: ", error);
//     return backendRes({ ok: false, error: error as Error, result: null });
//   }
// }
