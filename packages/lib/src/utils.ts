import { addToast } from "@heroui/react";
import axios from "axios";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

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
  if (!error) return;

  // Handle TRPC BAD_REQUEST (as JSON string)
  if (error?.data?.code === "BAD_REQUEST") {
    try {
      const data = JSON.parse(error);
      addToast({
        color: "danger",
        title: "Input Error",
        description: `${data[0]?.message}`,
      });
    } catch {
      addToast({
        color: "danger",
        title: "Input Error",
        description: `Invalid request`,
      });
    }
    return;
  }

  // Zod validation error
  if (error?.name === "ZodError") {
    addToast({
      color: "danger",
      title: "Validation Error",
      description: `${error?.issues?.[0]?.message} (${error?.issues?.[0]?.path?.[0]})`,
    });
    return;
  }

  // Axios error with response from server
  if (axios.isAxiosError(error)) {
    if (error.response) {
      addToast({
        color: "danger",
        title: `Error ${error.response.status}`,
        description:
          error.response.data?.message ||
          error.response.data?.error ||
          "An error occurred while processing your request.",
      });
    } else if (error.request) {
      // Request made but no response
      addToast({
        color: "danger",
        title: "Network Error",
        description:
          "No response received from server. Please check your internet connection.",
      });
    } else {
      // Something else happened while setting up the request
      addToast({
        color: "danger",
        title: "Request Error",
        description: error.message,
      });
    }
    return;
  }

  // Fallback for unknown errors
  console.error("Unhandled error:", error);
  addToast({
    color: "danger",
    title: "Unexpected Error",
    description: typeof error === "string" ? error : "Something went wrong.",
  });
}
