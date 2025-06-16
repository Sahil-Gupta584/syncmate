import { z } from "zod";
export const actionsZodSchema = {
  getVideoDetails: z.object({
    videoId: z.string().min(1, "Video ID is required"),
  }),
  getPlaylists: z.object({
    channelId: z.string().min(1, "Video ID is required"),
  }),
  sendInviteLink: z.object({
    editorEmail: z
      .string()
      .email("Invalid email format")
      .min(1, "Email is required"),
    creator: z.object({
      id: z.string().min(1, "Creator ID is required"),
      name: z.string().min(1, "Creator name is required"),
      email: z.string().email(),
    }),
  }),
  addVideoScheduleJob: z.object({
    videoId: z.string().min(1, "Video ID is required"),
    scheduleAt: z.number().nullable(),
    isPublishNow: z.boolean(),
  }),
  getEditorVideos: z.object({
    editorId: z.string(),
  }),
  handleAcceptInvite: z.object({
    inviteId: z.string(),
    editorId: z.string(),
  }),
  getInviteDetails: z.object({
    inviteId: z.string(),
  }),
};
