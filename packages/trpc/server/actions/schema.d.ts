import { z } from "zod";
export declare const actionsZodSchema: {
    getVideoDetails: z.ZodObject<{
        videoId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        videoId: string;
    }, {
        videoId: string;
    }>;
    getPlaylists: z.ZodObject<{
        channelId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        channelId: string;
    }, {
        channelId: string;
    }>;
    sendInviteLink: z.ZodObject<{
        editorEmail: z.ZodString;
        creator: z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            email: string;
        }, {
            id: string;
            name: string;
            email: string;
        }>;
    }, "strip", z.ZodTypeAny, {
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
    addVideoScheduleJob: z.ZodObject<{
        videoId: z.ZodString;
        scheduleAt: z.ZodNullable<z.ZodNumber>;
        isPublishNow: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        videoId: string;
        scheduleAt: number | null;
        isPublishNow: boolean;
    }, {
        videoId: string;
        scheduleAt: number | null;
        isPublishNow: boolean;
    }>;
    getEditorVideos: z.ZodObject<{
        editorId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        editorId: string;
    }, {
        editorId: string;
    }>;
    handleAcceptInvite: z.ZodObject<{
        inviteId: z.ZodString;
        editorId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        editorId: string;
        inviteId: string;
    }, {
        editorId: string;
        inviteId: string;
    }>;
    getInviteDetails: z.ZodObject<{
        inviteId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        inviteId: string;
    }, {
        inviteId: string;
    }>;
};
//# sourceMappingURL=schema.d.ts.map