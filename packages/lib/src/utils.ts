import { addToast } from "@heroui/react";
import axios from "axios";
export const backendUrl = import.meta.env.VITE_BACKEND_URL + "/api";

export const axiosInstance = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});

export type TUpdateThumbnailsProps = {
  videos: {
    thumbnailLink?: string;
    videoId: string;
    gDriveId: string;
  }[];
  ownerId: string;
};

export const getVideoDuration = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = function () {
      window.URL.revokeObjectURL(video.src);
      resolve(video.duration.toString()); // duration in seconds
    };

    video.onerror = function () {
      reject("Invalid video file");
    };

    video.src = URL.createObjectURL(file);
  });
};

export function formatDuration(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  if (h > 0) {
    return `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  } else {
    return `${m}:${s.toString().padStart(2, "0")}`;
  }
}

export function trpcErrorHandler(error: any) {
  // console.log(query.error)

  if (error) {
    if (error?.data?.code === "BAD_REQUEST") {
      const data = JSON.parse(error);
      addToast({
        color: "danger",
        title: "Input Error",
        description: `${data[0]?.message}`,
      });

      return;
    }

    // local error handlers
    if (error?.name === "ZodError") {
      addToast({
        color: "danger",
        description: `${error?.issues[0]?.message} (${error?.issues[0]?.path[0]})`,
      });
      return;
    }

    console.log({ error });
    addToast({
      color: "danger",
      description: `${error}`,
    });
  }
}
