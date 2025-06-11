export declare const actionsRoutes: import("@trpc/server/unstable-core-do-not-import").BuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    getVideoLink: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            videoId: string;
        };
        output: import("../..").TBackendRes<null> | import("../..").TBackendRes<{
            videoLink: string;
        }>;
        meta: object;
    }>;
    getPlaylists: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            channelId: string;
        };
        output: import("../..").TBackendRes<null> | import("../..").TBackendRes<{
            data: import("googleapis").youtube_v3.Schema$Playlist[] | undefined;
        }>;
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
        output: import("../..").TBackendRes<null> | import("../..").TBackendRes<boolean>;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=actions.d.ts.map