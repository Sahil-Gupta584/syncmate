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
          output: any;
          meta: object;
        }>;
        getVideoDetails: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            videoId: string;
          };
          output: any;
          meta: object;
        }>;
        getUserVideos: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            userId: string;
          };
          output: any;
          meta: object;
        }>;
        getUserWithEditors: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            userId: string;
          };
          output: any;
          meta: object;
        }>;
        getCreatorDetails: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            userId?: string | undefined;
          };
          output: any;
          meta: object;
        }>;
        removeEditor: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            creatorId: string;
            editorId: string;
          };
          output: any;
          meta: object;
        }>;
        deleteVideo: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            videoId: string;
          };
          output: any;
          meta: object;
        }>;
        getCreatorEditors: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            creatorId: string;
            editorId: string;
          };
          output: any;
          meta: object;
        }>;
        getCreatorChannels: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            creatorId: string;
            editorId: string;
          };
          output: any;
          meta: object;
        }>;
        getVideoEditors: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            videoId: string;
          };
          output: any;
          meta: object;
        }>;
        updateVideoDetails: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            id: string;
            gDriveId: string;
            title: string | null;
            description: string | null;
            thumbnailUrl: string | null;
            scheduledAt: number | null;
            playlistIds: string[];
            tags: string | null;
            categoryId: string | null;
            channelId: string | null;
            editors: {
              id: string;
              email: string;
            }[];
            selectedEditorsEmail: string[] | null;
          };
          output: any;
          meta: object;
        }>;
        handleAcceptInvite: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            editorId: string;
            inviteId: string;
          };
          output: any;
          meta: object;
        }>;
        getInviteDetails: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            inviteId: string;
          };
          output: any;
          meta: object;
        }>;
        getEditorVideos: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            editorId: string;
          };
          output: any;
          meta: object;
        }>;
        getEditorCreators: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            editorId: string;
          };
          output: any;
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
          output: any;
          meta: object;
        }>;
        getPlaylists: import("@trpc/server").TRPCQueryProcedure<{
          input: {
            channelId: string;
          };
          output: any;
          meta: object;
        }>;
        sendInviteLink: import("@trpc/server").TRPCMutationProcedure<{
          input: {
            editorEmail: string;
            creator: {
              name: string;
              id: string;
              email: string;
            };
          };
          output: any;
          meta: object;
        }>;
      }>
    >;
  }>
>;
export type AppRouter = typeof appRouter;
//# sourceMappingURL=router.d.ts.map
