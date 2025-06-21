export declare const serverZodSchemas: {
    actionsZodSchema: {
        getVideoDetails: import("zod").ZodObject<{
            videoId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            videoId: string;
        }, {
            videoId: string;
        }>;
        getPlaylists: import("zod").ZodObject<{
            channelId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            channelId: string;
        }, {
            channelId: string;
        }>;
        sendInviteLink: import("zod").ZodObject<{
            editorEmail: import("zod").ZodString;
            creator: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                email: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                name: string;
                email: string;
            }, {
                id: string;
                name: string;
                email: string;
            }>;
        }, "strip", import("zod").ZodTypeAny, {
            editorEmail: string;
            creator: {
                id: string;
                name: string;
                email: string;
            };
        }, {
            editorEmail: string;
            creator: {
                id: string;
                name: string;
                email: string;
            };
        }>;
        addVideoScheduleJob: import("zod").ZodObject<{
            videoId: import("zod").ZodString;
            scheduleAt: import("zod").ZodNullable<import("zod").ZodNumber>;
            isPublishNow: import("zod").ZodBoolean;
        }, "strip", import("zod").ZodTypeAny, {
            videoId: string;
            scheduleAt: number | null;
            isPublishNow: boolean;
        }, {
            videoId: string;
            scheduleAt: number | null;
            isPublishNow: boolean;
        }>;
        getEditorVideos: import("zod").ZodObject<{
            editorId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            editorId: string;
        }, {
            editorId: string;
        }>;
        handleAcceptInvite: import("zod").ZodObject<{
            inviteId: import("zod").ZodString;
            editorId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            editorId: string;
            inviteId: string;
        }, {
            editorId: string;
            inviteId: string;
        }>;
        getInviteDetails: import("zod").ZodObject<{
            inviteId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            inviteId: string;
        }, {
            inviteId: string;
        }>;
    };
    dbActionsZodSchema: {
        addChannel: import("zod").ZodObject<{
            userId: import("zod").ZodString;
            code: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            userId: string;
            code: string;
        }, {
            userId: string;
            code: string;
        }>;
        getUserVideos: import("zod").ZodObject<{
            userId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        removeEditor: import("zod").ZodObject<{
            creatorId: import("zod").ZodString;
            editorId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            editorId: string;
            creatorId: string;
        }, {
            editorId: string;
            creatorId: string;
        }>;
        getCreatorEditors: import("zod").ZodObject<{
            creatorId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            creatorId: string;
        }, {
            creatorId: string;
        }>;
        getVideoEditors: import("zod").ZodObject<{
            videoId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            videoId: string;
        }, {
            videoId: string;
        }>;
        updateVideoDetails: import("zod").ZodObject<{
            categoryId: import("zod").ZodNullable<import("zod").ZodString>;
            id: import("zod").ZodString;
            playlistIds: import("zod").ZodArray<import("zod").ZodString, "many">;
            scheduledAt: import("zod").ZodNullable<import("zod").ZodNumber>;
            selectedEditorsEmail: import("zod").ZodNullable<import("zod").ZodArray<import("zod").ZodString, "many">>;
            tags: import("zod").ZodNullable<import("zod").ZodString>;
            thumbnailUrl: import("zod").ZodNullable<import("zod").ZodString>;
            title: import("zod").ZodNullable<import("zod").ZodString>;
            description: import("zod").ZodNullable<import("zod").ZodString>;
            gDriveId: import("zod").ZodString;
            editors: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                email: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                email: string;
            }, {
                id: string;
                email: string;
            }>, "many">;
            channelId: import("zod").ZodNullable<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
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
        }, {
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
        }>;
        getEditorVideos: import("zod").ZodObject<{
            editorId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            editorId: string;
        }, {
            editorId: string;
        }>;
        handleAcceptInvite: import("zod").ZodObject<{
            inviteId: import("zod").ZodString;
            editorId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            editorId: string;
            inviteId: string;
        }, {
            editorId: string;
            inviteId: string;
        }>;
        getInviteDetails: import("zod").ZodObject<{
            inviteId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            inviteId: string;
        }, {
            inviteId: string;
        }>;
    };
};
//# sourceMappingURL=zodSchemas.d.ts.map