export declare const appRouter: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<
  {
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
  },
  import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    db: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<
      {
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: false;
      },
      import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
        addChannel: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            userId: string;
            code: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<boolean>;
          meta: object;
        }>;
        getVideoDetails: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            videoId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  editors: ({
                    editor: {
                      id: string;
                      createdAt: import("@prisma/client/runtime/library").JsonValue;
                      updatedAt: import("@prisma/client/runtime/library").JsonValue;
                      name: string;
                      email: string;
                      image: string | null;
                      emailVerified: boolean;
                      role: import("@prisma/client").$Enums.Role;
                      plan: import("@prisma/client").$Enums.PlanType;
                      trialEndAt:
                        | import("@prisma/client/runtime/library").JsonValue
                        | null;
                    };
                  } & {
                    videoId: string;
                    editorEmail: string;
                    assignedAt: string;
                  })[];
                  owner: {
                    channels: {
                      id: string;
                      userId: string;
                      name: string;
                      description: string;
                      ytChannelId: string;
                      logoUrl: string;
                      refresh_token: string;
                      access_token: string;
                    }[];
                    editors: ({
                      editor: {
                        id: string;
                        createdAt: import("@prisma/client/runtime/library").JsonValue;
                        updatedAt: import("@prisma/client/runtime/library").JsonValue;
                        name: string;
                        email: string;
                        image: string | null;
                        emailVerified: boolean;
                        role: import("@prisma/client").$Enums.Role;
                        plan: import("@prisma/client").$Enums.PlanType;
                        trialEndAt:
                          | import("@prisma/client/runtime/library").JsonValue
                          | null;
                      };
                    } & {
                      editorId: string;
                      creatorId: string;
                      assignedAt: string;
                    })[];
                  } & {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                } & {
                  id: string;
                  createdAt: string;
                  gDriveId: string;
                  ownerId: string;
                  title: string | null;
                  description: string | null;
                  duration: number;
                  thumbnailUrl: string | null;
                  scheduledAt: number | null;
                  videoStatus: import("@prisma/client").$Enums.VideoStatus;
                  privacyStatus: import("@prisma/client").$Enums.PrivacyStatus;
                  playlistIds: string[];
                  tags: string;
                  categoryId: string;
                  importedById: string;
                  channelId: string | null;
                }
              >;
          meta: object;
        }>;
        getUserVideos: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            userId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                ({
                  owner: {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                  importedBy: {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                  channel: {
                    id: string;
                    userId: string;
                    name: string;
                    description: string;
                    ytChannelId: string;
                    logoUrl: string;
                    refresh_token: string;
                    access_token: string;
                  } | null;
                } & {
                  id: string;
                  createdAt: string;
                  gDriveId: string;
                  ownerId: string;
                  title: string | null;
                  description: string | null;
                  duration: number;
                  thumbnailUrl: string | null;
                  scheduledAt: number | null;
                  videoStatus: import("@prisma/client").$Enums.VideoStatus;
                  privacyStatus: import("@prisma/client").$Enums.PrivacyStatus;
                  playlistIds: string[];
                  tags: string;
                  categoryId: string;
                  importedById: string;
                  channelId: string | null;
                })[]
              >;
          meta: object;
        }>;
        getUserWithEditors: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            userId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  ownedVideos: {
                    id: string;
                    createdAt: string;
                    gDriveId: string;
                    ownerId: string;
                    title: string | null;
                    description: string | null;
                    duration: number;
                    thumbnailUrl: string | null;
                    scheduledAt: number | null;
                    videoStatus: import("@prisma/client").$Enums.VideoStatus;
                    privacyStatus: import("@prisma/client").$Enums.PrivacyStatus;
                    playlistIds: string[];
                    tags: string;
                    categoryId: string;
                    importedById: string;
                    channelId: string | null;
                  }[];
                  channels: {
                    id: string;
                    userId: string;
                    name: string;
                    description: string;
                    ytChannelId: string;
                    logoUrl: string;
                    refresh_token: string;
                    access_token: string;
                  }[];
                  editors: ({
                    editor: {
                      id: string;
                      createdAt: import("@prisma/client/runtime/library").JsonValue;
                      updatedAt: import("@prisma/client/runtime/library").JsonValue;
                      name: string;
                      email: string;
                      image: string | null;
                      emailVerified: boolean;
                      role: import("@prisma/client").$Enums.Role;
                      plan: import("@prisma/client").$Enums.PlanType;
                      trialEndAt:
                        | import("@prisma/client/runtime/library").JsonValue
                        | null;
                    };
                  } & {
                    editorId: string;
                    creatorId: string;
                  })[];
                } & {
                  id: string;
                  createdAt: import("@prisma/client/runtime/library").JsonValue;
                  updatedAt: import("@prisma/client/runtime/library").JsonValue;
                  name: string;
                  email: string;
                  image: string | null;
                  emailVerified: boolean;
                  role: import("@prisma/client").$Enums.Role;
                  plan: import("@prisma/client").$Enums.PlanType;
                  trialEndAt:
                    | import("@prisma/client/runtime/library").JsonValue
                    | null;
                }
              >;
          meta: object;
        }>;
        getCreatorDetails: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            userId?: string | undefined;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  ownedVideos: ({
                    importedBy: {
                      id: string;
                      createdAt: import("@prisma/client/runtime/library").JsonValue;
                      updatedAt: import("@prisma/client/runtime/library").JsonValue;
                      name: string;
                      email: string;
                      image: string | null;
                      emailVerified: boolean;
                      role: import("@prisma/client").$Enums.Role;
                      plan: import("@prisma/client").$Enums.PlanType;
                      trialEndAt:
                        | import("@prisma/client/runtime/library").JsonValue
                        | null;
                    };
                    channel: {
                      id: string;
                      userId: string;
                      name: string;
                      description: string;
                      ytChannelId: string;
                      logoUrl: string;
                      refresh_token: string;
                      access_token: string;
                    } | null;
                  } & {
                    id: string;
                    createdAt: string;
                    gDriveId: string;
                    ownerId: string;
                    title: string | null;
                    description: string | null;
                    duration: number;
                    thumbnailUrl: string | null;
                    scheduledAt: number | null;
                    videoStatus: import("@prisma/client").$Enums.VideoStatus;
                    privacyStatus: import("@prisma/client").$Enums.PrivacyStatus;
                    playlistIds: string[];
                    tags: string;
                    categoryId: string;
                    importedById: string;
                    channelId: string | null;
                  })[];
                  channels: {
                    id: string;
                    userId: string;
                    name: string;
                    description: string;
                    ytChannelId: string;
                    logoUrl: string;
                    refresh_token: string;
                    access_token: string;
                  }[];
                  editors: ({
                    editor: {
                      id: string;
                      createdAt: import("@prisma/client/runtime/library").JsonValue;
                      updatedAt: import("@prisma/client/runtime/library").JsonValue;
                      name: string;
                      email: string;
                      image: string | null;
                      emailVerified: boolean;
                      role: import("@prisma/client").$Enums.Role;
                      plan: import("@prisma/client").$Enums.PlanType;
                      trialEndAt:
                        | import("@prisma/client/runtime/library").JsonValue
                        | null;
                    };
                  } & {
                    editorId: string;
                    creatorId: string;
                    assignedAt: string;
                  })[];
                } & {
                  id: string;
                  createdAt: import("@prisma/client/runtime/library").JsonValue;
                  updatedAt: import("@prisma/client/runtime/library").JsonValue;
                  name: string;
                  email: string;
                  image: string | null;
                  emailVerified: boolean;
                  role: import("@prisma/client").$Enums.Role;
                  plan: import("@prisma/client").$Enums.PlanType;
                  trialEndAt:
                    | import("@prisma/client/runtime/library").JsonValue
                    | null;
                }
              >;
          meta: object;
        }>;
        removeEditor: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            editorId: string;
            creatorId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<{
                editorId: string;
                creatorId: string;
                assignedAt: string;
              }>;
          meta: object;
        }>;
        deleteVideo: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            videoId: string;
          };
          output: import("../helpers.js").TBackendRes<null>;
          meta: object;
        }>;
        getCreatorEditors: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            editorId: string;
            creatorId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                ({
                  editor: {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                } & {
                  editorId: string;
                  creatorId: string;
                  assignedAt: string;
                })[]
              >;
          meta: object;
        }>;
        getCreatorChannels: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            editorId: string;
            creatorId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  id: string;
                  userId: string;
                  name: string;
                  description: string;
                  ytChannelId: string;
                  logoUrl: string;
                  refresh_token: string;
                  access_token: string;
                }[]
              >;
          meta: object;
        }>;
        getVideoEditors: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            videoId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                ({
                  editor: {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                } & {
                  videoId: string;
                  editorEmail: string;
                  assignedAt: string;
                })[]
              >;
          meta: object;
        }>;
        updateVideoDetails: import("@trpc/server").TRPCMutationProcedure<{
          input: {
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
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  owner: {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                } & {
                  id: string;
                  createdAt: string;
                  gDriveId: string;
                  ownerId: string;
                  title: string | null;
                  description: string | null;
                  duration: number;
                  thumbnailUrl: string | null;
                  scheduledAt: number | null;
                  videoStatus: import("@prisma/client").$Enums.VideoStatus;
                  privacyStatus: import("@prisma/client").$Enums.PrivacyStatus;
                  playlistIds: string[];
                  tags: string;
                  categoryId: string;
                  importedById: string;
                  channelId: string | null;
                }
              >;
          meta: object;
        }>;
        handleAcceptInvite: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            editorId: string;
            inviteId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  creator: {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                } & {
                  editorId: string;
                  creatorId: string;
                  assignedAt: string;
                }
              >;
          meta: object;
        }>;
        getInviteDetails: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            inviteId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  creator: {
                    id: string;
                    createdAt: import("@prisma/client/runtime/library").JsonValue;
                    updatedAt: import("@prisma/client/runtime/library").JsonValue;
                    name: string;
                    email: string;
                    image: string | null;
                    emailVerified: boolean;
                    role: import("@prisma/client").$Enums.Role;
                    plan: import("@prisma/client").$Enums.PlanType;
                    trialEndAt:
                      | import("@prisma/client/runtime/library").JsonValue
                      | null;
                  };
                } & {
                  id: string;
                  createdAt: string;
                  status: import("@prisma/client").$Enums.InviteStatus;
                  editorEmail: string;
                  editorId: string | null;
                  creatorId: string;
                  expiresAt: string;
                }
              >;
          meta: object;
        }>;
        getEditorVideos: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            editorId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  creators: ({
                    creator: {
                      id: string;
                      createdAt: import("@prisma/client/runtime/library").JsonValue;
                      updatedAt: import("@prisma/client/runtime/library").JsonValue;
                      name: string;
                      email: string;
                      image: string | null;
                      emailVerified: boolean;
                      role: import("@prisma/client").$Enums.Role;
                      plan: import("@prisma/client").$Enums.PlanType;
                      trialEndAt:
                        | import("@prisma/client/runtime/library").JsonValue
                        | null;
                    };
                  } & {
                    editorId: string;
                    creatorId: string;
                    assignedAt: string;
                  })[];
                  accessibleVideos: ({
                    video: {
                      importedBy: {
                        id: string;
                        createdAt: import("@prisma/client/runtime/library").JsonValue;
                        updatedAt: import("@prisma/client/runtime/library").JsonValue;
                        name: string;
                        email: string;
                        image: string | null;
                        emailVerified: boolean;
                        role: import("@prisma/client").$Enums.Role;
                        plan: import("@prisma/client").$Enums.PlanType;
                        trialEndAt:
                          | import("@prisma/client/runtime/library").JsonValue
                          | null;
                      };
                      channel: {
                        id: string;
                        userId: string;
                        name: string;
                        description: string;
                        ytChannelId: string;
                        logoUrl: string;
                        refresh_token: string;
                        access_token: string;
                      } | null;
                    } & {
                      id: string;
                      createdAt: string;
                      gDriveId: string;
                      ownerId: string;
                      title: string | null;
                      description: string | null;
                      duration: number;
                      thumbnailUrl: string | null;
                      scheduledAt: number | null;
                      videoStatus: import("@prisma/client").$Enums.VideoStatus;
                      privacyStatus: import("@prisma/client").$Enums.PrivacyStatus;
                      playlistIds: string[];
                      tags: string;
                      categoryId: string;
                      importedById: string;
                      channelId: string | null;
                    };
                  } & {
                    videoId: string;
                    editorEmail: string;
                    assignedAt: string;
                  })[];
                } & {
                  id: string;
                  createdAt: import("@prisma/client/runtime/library").JsonValue;
                  updatedAt: import("@prisma/client/runtime/library").JsonValue;
                  name: string;
                  email: string;
                  image: string | null;
                  emailVerified: boolean;
                  role: import("@prisma/client").$Enums.Role;
                  plan: import("@prisma/client").$Enums.PlanType;
                  trialEndAt:
                    | import("@prisma/client/runtime/library").JsonValue
                    | null;
                }
              >;
          meta: object;
        }>;
        getEditorCreators: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            editorId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<
                {
                  creators: ({
                    creator: {
                      id: string;
                      createdAt: import("@prisma/client/runtime/library").JsonValue;
                      updatedAt: import("@prisma/client/runtime/library").JsonValue;
                      name: string;
                      email: string;
                      image: string | null;
                      emailVerified: boolean;
                      role: import("@prisma/client").$Enums.Role;
                      plan: import("@prisma/client").$Enums.PlanType;
                      trialEndAt:
                        | import("@prisma/client/runtime/library").JsonValue
                        | null;
                    };
                  } & {
                    editorId: string;
                    creatorId: string;
                    assignedAt: string;
                  })[];
                } & {
                  id: string;
                  createdAt: import("@prisma/client/runtime/library").JsonValue;
                  updatedAt: import("@prisma/client/runtime/library").JsonValue;
                  name: string;
                  email: string;
                  image: string | null;
                  emailVerified: boolean;
                  role: import("@prisma/client").$Enums.Role;
                  plan: import("@prisma/client").$Enums.PlanType;
                  trialEndAt:
                    | import("@prisma/client/runtime/library").JsonValue
                    | null;
                }
              >;
          meta: object;
        }>;
      }>
    >;
    action: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<
      {
        ctx: object;
        meta: object;
        errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
        transformer: false;
      },
      import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
        getVideoLink: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            videoId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<{
                videoLink: string;
              }>;
          meta: object;
        }>;
        getPlaylists: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            channelId: string;
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<{
                data:
                  | import("googleapis").youtube_v3.Schema$Playlist[]
                  | undefined;
              }>;
          meta: object;
        }>;
        sendInviteLink: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            editorEmail: string;
            creator: {
              id: string;
              name: string;
              email: string;
            };
          };
          output:
            | import("../helpers.js").TBackendRes<null>
            | import("../helpers.js").TBackendRes<boolean>;
          meta: object;
        }>;
      }>
    >;
  }>
>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=router.d.ts.map
