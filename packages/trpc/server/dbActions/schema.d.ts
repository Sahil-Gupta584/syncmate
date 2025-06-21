import { z } from "zod";
export declare const dbActionsZodSchema: {
  addChannel: z.ZodObject<
    {
      userId: z.ZodString;
      code: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      userId: string;
      code: string;
    },
    {
      userId: string;
      code: string;
    }
  >;
  getUserVideos: z.ZodObject<
    {
      userId: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      userId: string;
    },
    {
      userId: string;
    }
  >;
  removeEditor: z.ZodObject<
    {
      creatorId: z.ZodString;
      editorId: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      editorId: string;
      creatorId: string;
    },
    {
      editorId: string;
      creatorId: string;
    }
  >;
  getCreatorEditors: z.ZodObject<
    {
      creatorId: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      creatorId: string;
    },
    {
      creatorId: string;
    }
  >;
  getVideoEditors: z.ZodObject<
    {
      videoId: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      videoId: string;
    },
    {
      videoId: string;
    }
  >;
  updateVideoDetails: z.ZodObject<
    {
      categoryId: z.ZodNullable<z.ZodString>;
      id: z.ZodString;
      playlistIds: z.ZodArray<z.ZodString, "many">;
      scheduledAt: z.ZodNullable<z.ZodNumber>;
      selectedEditorsEmail: z.ZodNullable<z.ZodArray<z.ZodString, "many">>;
      tags: z.ZodNullable<z.ZodString>;
      thumbnailUrl: z.ZodNullable<z.ZodString>;
      title: z.ZodNullable<z.ZodString>;
      description: z.ZodNullable<z.ZodString>;
      gDriveId: z.ZodString;
      editors: z.ZodArray<
        z.ZodObject<
          {
            id: z.ZodString;
            email: z.ZodString;
          },
          "strip",
          z.ZodTypeAny,
          {
            id: string;
            email: string;
          },
          {
            id: string;
            email: string;
          }
        >,
        "many"
      >;
      channelId: z.ZodNullable<z.ZodString>;
    },
    "strip",
    z.ZodTypeAny,
    {
      id: string;
      gDriveId: string;
      editors: {
        id: string;
        email: string;
      }[];
      title: string | null;
      description: string | null;
      thumbnailUrl: string | null;
      scheduledAt: number | null;
      playlistIds: string[];
      tags: string | null;
      categoryId: string | null;
      channelId: string | null;
      selectedEditorsEmail: string[] | null;
    },
    {
      id: string;
      gDriveId: string;
      editors: {
        id: string;
        email: string;
      }[];
      title: string | null;
      description: string | null;
      thumbnailUrl: string | null;
      scheduledAt: number | null;
      playlistIds: string[];
      tags: string | null;
      categoryId: string | null;
      channelId: string | null;
      selectedEditorsEmail: string[] | null;
    }
  >;
  getEditorVideos: z.ZodObject<
    {
      editorId: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      editorId: string;
    },
    {
      editorId: string;
    }
  >;
  handleAcceptInvite: z.ZodObject<
    {
      inviteId: z.ZodString;
      editorId: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      editorId: string;
      inviteId: string;
    },
    {
      editorId: string;
      inviteId: string;
    }
  >;
  getInviteDetails: z.ZodObject<
    {
      inviteId: z.ZodString;
    },
    "strip",
    z.ZodTypeAny,
    {
      inviteId: string;
    },
    {
      inviteId: string;
    }
  >;
};
//# sourceMappingURL=schema.d.ts.map
