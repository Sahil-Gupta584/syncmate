import { prisma } from "@repo/db";
import axios from "axios";
import { google } from "googleapis";
import jwt from "jsonwebtoken";
export type TBackendRes<T> = {
  ok: boolean;
  error?: string;
  result?: T | null;
};

export const backendRes = <T = undefined>({
  ok,
  error,
  result,
}: TBackendRes<T>): TBackendRes<T> => {
  return {
    ok,
    error,
    result,
  };
};

export async function getGoogleServices(userId: string, code?: string) {
  try {
    const auth = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      code
        ? `${process.env.VITE_CREATOR_BASE_URL}/addChannel`
        : process.env.GOOGLE_REDIRECT_URI,
    );

    let authTokens = null;

    if (code) {
      const { tokens } = await auth.getToken(code);
      authTokens = tokens;

      auth.setCredentials(tokens);
    } else {
      const account = await prisma.account.findFirst({
        where: { userId },
      });
      if (!account) {
        throw new Error("User not found");
      }
      if (!account.refreshToken) throw new Error("Refresh token not found");

      const refresh_token = jwt.verify(
        account.refreshToken,
        process.env.EDITOR_AUTH_SECRET!,
      );
      auth.setCredentials({
        refresh_token: refresh_token as string,
      });
    }

    const youtube = google.youtube({ version: "v3", auth });
    const drive = google.drive({ version: "v3", auth });

    return backendRes({
      ok: true,
      result: { youtube, drive, authTokens },
    });
  } catch (error) {
    console.error("Error in getGoogleServices:", error);
    return backendRes({
      ok: false,
      error: (error as Error).message,
      result: null,
    });
  }
}
export async function updateGoogleDrivePermissions({
  gDriveId,
  selectedEditorEmails,
  videoOwnerId,
}: {
  gDriveId: string;
  selectedEditorEmails: string[];
  videoOwnerId: string;
}) {
  const { result } = await getGoogleServices(videoOwnerId); // or ownerId if needed
  if (!result) throw new Error("Failed to get Google services");

  const { drive } = result;
  const res = await prisma.user.findUnique({
    where: { id: videoOwnerId },
    select: { email: true },
  });
  if (!res?.email) throw new Error("Owner not found.");
  const videoOwnerEmail = res?.email;
  const permissions = await drive.permissions.list({
    fileId: gDriveId,
    fields: "permissions(id,emailAddress)",
  });

  const existingEmails =
    permissions.data.permissions?.map((p) => p.emailAddress) ?? [];

  const toGrant = selectedEditorEmails.filter(
    (email) => !existingEmails.includes(email),
  );
  const toRevoke = existingEmails.filter(
    (email) => !selectedEditorEmails.includes(email as string),
  );
  console.log("toGrant", toGrant);
  await Promise.all(
    toGrant.map((email) =>
      drive.permissions.create({
        fileId: gDriveId,
        requestBody: {
          role: "writer",
          type: "user",
          emailAddress: email,
        },
      }),
    ),
  );

  await Promise.all(
    (permissions.data.permissions as { emailAddress: string; id: string }[])!
      .filter(
        (p) =>
          toRevoke.includes(p.emailAddress!) &&
          p.emailAddress !== videoOwnerEmail,
      )
      .map((p) => {
        if (p.emailAddress === videoOwnerEmail) return;

        drive.permissions.delete({ fileId: gDriveId, permissionId: p.id! });
      }),
  );
}
export async function getOrCreateFolder(drive: any, folderName: string) {
  const folderSearch = await drive.files.list({
    q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: "files(id, name)",
  });

  if (folderSearch.data.files.length > 0) {
    return folderSearch.data.files[0].id!;
  }

  const folder = await drive.files.create({
    requestBody: {
      name: folderName,
      mimeType: "application/vnd.google-apps.folder",
    },
    fields: "id",
  });

  return folder.data.id!;
}
export async function getFileFromDrive(driveFileId: string, userId: string) {
  try {
    console.log("driveFileId", driveFileId);

    if (driveFileId.length <= 1) throw new Error("No file ID provided");
    const { result, error } = await getGoogleServices(userId);
    if (!result) {
      throw new Error("Failed to get Google services: " + error);
    }
    const { drive } = result;

    // Get file metadata to check MIME type
    const fileMetadata = await drive.files.get({
      fileId: driveFileId,
      fields: "mimeType, name",
    });

    // Check if it's a binary file (not a Google Doc)
    if (fileMetadata.data.mimeType?.includes("application/vnd.google-apps")) {
      throw new Error(
        "Cannot download Google Docs files directly. Export required.",
      );
    }

    // Get file as stream
    const fileStream = await drive.files.get(
      {
        fileId: driveFileId,
        alt: "media",
      },
      { responseType: "stream" },
    );

    return fileStream.data;
  } catch (error) {
    console.log("Error in getFileFromDrive:", error);
    throw error;
  }
}

export type TUpdateThumbnailsProps = {
  videos: {
    thumbnailLink?: string;
    videoId: string;
    gDriveId: string;
  }[];
  ownerId: string;
};
export async function updateThumbnails({
  videos,
  ownerId,
}: TUpdateThumbnailsProps) {
  try {
    const { result, error } = await getGoogleServices(ownerId);
    if (!result) {
      throw new Error("Failed to get Google services: " + error);
    }
    const { drive } = result;
    const updatedVideos: TUpdateThumbnailsProps = { videos: [], ownerId };
    for (const { videoId, gDriveId } of videos) {
      if (!gDriveId) {
        console.log("Invalid gDrive Id ");
        return;
      }
      const file = await drive.files.get({
        fileId: gDriveId,
        fields: "thumbnailLink",
      });

      if (!file.data.thumbnailLink) {
        console.error("Thumbnail not found");
        return;
      }
      const imgFile = await axios.get(file.data.thumbnailLink, {
        responseType: "arraybuffer",
      });
      const buffer = Buffer.from(imgFile.data);

      const form = new FormData();
      const blob = new Blob([buffer], {
        type: imgFile.headers["content-type"],
      });
      form.append("image", blob, videoId);

      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=b10b7ca5ecd048d6a0ed9f9751cebbdc",
        form,
      );

      const updatedVideo = await prisma.video.update({
        where: {
          id: videoId,
        },
        data: {
          thumbnailUrl: res.data.data.display_url,
        },
      });
      updatedVideos.videos.push({
        gDriveId: gDriveId,
        videoId: updatedVideo.id,
        thumbnailLink: updatedVideo.thumbnailUrl as string,
      });
    }

    return backendRes({
      ok: true,
      result: updatedVideos as TUpdateThumbnailsProps,
    });
  } catch (error) {
    console.error("Error in updateThumbnails:", error);
    return backendRes({
      ok: false,
      error: (error as Error).message,
      result: null,
    });
  }
}
