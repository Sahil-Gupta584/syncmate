import { z } from "zod";
export const dbActionsZodSchema = {
  addChannel: z.object({
    userId: z.string(),
    code: z.string(),
  }),
  getUserVideos: z.object({
    userId: z.string(),
  }),
  removeEditor: z.object({
    creatorId: z.string(),
    editorId: z.string(),
  }),
  getCreatorEditors: z.object({
    creatorId: z.string(),
  }),
  getVideoEditors: z.object({
    videoId: z.string(),
  }),
  updateVideoDetails: z.object({
    categoryId: z.string().nullable(),
    id: z.string(),
    playlistIds: z.array(z.string()),
    scheduledAt: z.number().nullable(),
    selectedEditorsEmail: z.array(z.string().email()).nullable(),
    tags: z.string().nullable(),
    thumbnailUrl: z.string().url().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    gDriveId: z.string(),
    editors: z.array(
      z.object({
        id: z.string(),
        email: z.string().email(),
      }),
    ),
    channelId: z.string().nullable(),
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
