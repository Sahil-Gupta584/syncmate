import { prisma } from "@repo/db";
import moment from "moment";
import { backendRes, getGoogleServices, updateGoogleDrivePermissions, updateThumbnails, } from "../../helpers.js";
import { trpcProcedure, trpcRouter } from "../trpc.js";
import { dbActionsZodSchema } from "./schema.js";
export const dbActionsRoutes = trpcRouter({
    addChannel: trpcProcedure
        .input(dbActionsZodSchema.addChannel)
        .mutation(async ({ input }) => {
        try {
            const { userId, code } = input;
            const { result, error } = await getGoogleServices(userId, code);
            if (!result) {
                throw new Error("Failed to get Google services: " + error);
            }
            const { youtube, authTokens } = result;
            if (!authTokens)
                throw new Error("Failed to add Channel");
            const channelResponse = await youtube.channels.list({
                part: ["snippet", "contentDetails"],
                mine: true,
            });
            if (!channelResponse.data.items ||
                channelResponse.data.items.length === 0 ||
                !channelResponse.data.items[0]?.snippet ||
                !channelResponse.data.items[0].snippet.thumbnails?.medium) {
                throw new Error("No channel data found.");
            }
            await prisma.channel.create({
                data: {
                    access_token: authTokens.access_token,
                    refresh_token: authTokens.refresh_token,
                    logoUrl: channelResponse.data.items[0].snippet.thumbnails.medium.url ?? "",
                    description: channelResponse.data.items[0].snippet.description ?? "",
                    name: channelResponse.data.items[0].snippet.title ?? "",
                    ytChannelId: channelResponse.data.items[0].id,
                    user: {
                        connect: { id: userId },
                    },
                },
            });
            return backendRes({ ok: true, result: true });
        }
        catch (error) {
            console.error("Error adding channel with Google APIs:", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    getVideoDetails: trpcProcedure
        .input(dbActionsZodSchema.getVideoEditors)
        .query(async ({ input }) => {
        try {
            const { videoId } = input;
            const video = await prisma.video.findUnique({
                where: {
                    id: videoId,
                },
                include: {
                    owner: {
                        include: {
                            channels: true,
                            editors: { include: { editor: true } },
                        },
                    },
                    editors: { include: { editor: true } },
                },
            });
            if (!video)
                throw new Error("Video not found");
            return backendRes({
                ok: true,
                result: video,
            });
        }
        catch (error) {
            console.error("Error in getVideoDetails:", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    getUserVideos: trpcProcedure
        .input(dbActionsZodSchema.getUserVideos)
        .query(async ({ input }) => {
        try {
            const { userId } = input;
            const res = await prisma.video.findMany({
                where: {
                    ownerId: userId,
                },
                include: {
                    owner: true,
                    importedBy: true,
                    channel: true,
                },
            });
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from getUserVideos", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    getUserWithEditors: trpcProcedure
        .input(dbActionsZodSchema.getUserVideos)
        .query(async ({ input }) => {
        try {
            const { userId } = input;
            const res = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
                include: {
                    editors: { include: { editor: true }, omit: { assignedAt: true } },
                    channels: true,
                    ownedVideos: true,
                },
            });
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from getUserWithEditors", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    getCreatorDetails: trpcProcedure
        .input(dbActionsZodSchema.getUserVideos.partial())
        .query(async ({ input }) => {
        try {
            const { userId } = input;
            if (!userId) {
                return backendRes({
                    ok: false,
                    error: "User ID is required",
                    result: null,
                });
            }
            const res = await prisma.user.findUnique({
                where: {
                    id: userId,
                },
                include: {
                    editors: { include: { editor: true } },
                    ownedVideos: { include: { channel: true, importedBy: true } },
                    channels: true,
                },
            });
            const videosWithoutThumbnail = [];
            if (res) {
                for (const video of res.ownedVideos) {
                    if (!video.thumbnailUrl) {
                        videosWithoutThumbnail.push(video);
                    }
                }
                if (videosWithoutThumbnail.length > 0) {
                    const updatedVideoRes = await updateThumbnails({
                        videos: videosWithoutThumbnail.map((v) => ({
                            gDriveId: v.gDriveId,
                            videoId: v.id,
                        })),
                        ownerId: userId,
                    });
                    if (updatedVideoRes && updatedVideoRes.result) {
                        for (const video of updatedVideoRes.result.videos) {
                            const videoIndex = res.ownedVideos.findIndex((v) => v.id === video.videoId);
                            if (videoIndex !== -1 && res.ownedVideos[videoIndex]) {
                                res.ownedVideos[videoIndex].thumbnailUrl =
                                    video.thumbnailLink;
                            }
                        }
                    }
                }
            }
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from getCreatorDetails", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    removeEditor: trpcProcedure
        .input(dbActionsZodSchema.removeEditor)
        .mutation(async ({ input }) => {
        try {
            const { creatorId, editorId } = input;
            const res = await prisma.creatorEditor.delete({
                where: {
                    creatorId_editorId: {
                        editorId,
                        creatorId,
                    },
                },
            });
            await prisma.invite.deleteMany({
                where: {
                    creatorId,
                    editorId,
                },
            });
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from removeEditor", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    deleteVideo: trpcProcedure
        .input(dbActionsZodSchema.getVideoEditors)
        .mutation(async ({ input }) => {
        try {
            const { videoId } = input;
            const video = await prisma.video.findUnique({
                where: {
                    id: videoId,
                },
                include: { owner: { include: { channels: true } } },
            });
            if (!video) {
                throw new Error("Video not found");
            }
            const { result, error } = await getGoogleServices(video.ownerId);
            if (!result) {
                throw new Error("Failed to get Google services: " + error);
            }
            const { drive } = result;
            await prisma.$transaction(async () => {
                if (video.gDriveId) {
                    await drive.files.delete({
                        fileId: video.gDriveId,
                    });
                }
                await prisma.video.delete({
                    where: {
                        id: videoId,
                    },
                });
            });
            return backendRes({ ok: true, result: null });
        }
        catch (error) {
            console.error("Error in deleteVideo:", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    getCreatorEditors: trpcProcedure
        .input(dbActionsZodSchema.removeEditor)
        .query(async ({ input }) => {
        try {
            const { creatorId } = input;
            const res = await prisma.creatorEditor.findMany({
                where: {
                    creatorId,
                },
                include: { editor: true },
            });
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from getCreatorEditors", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    getCreatorChannels: trpcProcedure
        .input(dbActionsZodSchema.removeEditor)
        .query(async ({ input }) => {
        try {
            const { creatorId } = input;
            const res = await prisma.channel.findMany({
                where: { userId: creatorId },
            });
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from getCreatorChannels", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    getVideoEditors: trpcProcedure
        .input(dbActionsZodSchema.getVideoEditors)
        .query(async ({ input }) => {
        try {
            const { videoId } = input;
            const res = await prisma.videoEditor.findMany({
                where: { videoId },
                include: { editor: true },
            });
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from getVideoEditors", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    updateVideoDetails: trpcProcedure
        .input(dbActionsZodSchema.updateVideoDetails)
        .mutation(async ({ input }) => {
        try {
            const { categoryId, id, playlistIds, scheduledAt, selectedEditorsEmail, tags, thumbnailUrl, title, description, gDriveId, editors, channelId, } = input;
            const res = await prisma.$transaction(async () => {
                const updatedVideo = await prisma.video.update({
                    where: { id },
                    data: {
                        categoryId: categoryId || undefined,
                        description: description,
                        playlistIds: playlistIds,
                        thumbnailUrl: thumbnailUrl,
                        tags: tags || undefined,
                        title: title,
                        scheduledAt: scheduledAt,
                        channelId,
                    },
                    include: { owner: true },
                });
                console.log("updatedVideo", updatedVideo);
                if (editors && selectedEditorsEmail) {
                    const existingEditorIds = editors.map((e) => e.id);
                    const editorToAdd = selectedEditorsEmail.filter((id) => !existingEditorIds.includes(id));
                    const editorToRemove = existingEditorIds.filter((id) => !selectedEditorsEmail.includes(id));
                    await prisma.videoEditor.deleteMany({
                        where: {
                            videoId: id,
                            editorEmail: { in: editorToRemove },
                        },
                    });
                    // Add only new editors
                    await prisma.videoEditor.createMany({
                        data: editorToAdd.map((editorEmail) => ({
                            videoId: id,
                            editorEmail,
                            assignedAt: new Date().toISOString(),
                        })),
                    });
                }
                return updatedVideo;
            });
            if (editors && gDriveId) {
                await updateGoogleDrivePermissions({
                    gDriveId,
                    selectedEditorEmails: editors.map((e) => e.email),
                    videoOwnerId: res.owner.id,
                });
            }
            return backendRes({ ok: true, result: res });
        }
        catch (error) {
            console.log("error from updateVideoDetails", error);
            return backendRes({
                ok: false,
                error: error.message,
                result: null,
            });
        }
    }),
    handleAcceptInvite: trpcProcedure
        .input(dbActionsZodSchema.handleAcceptInvite)
        .mutation(async ({ input }) => {
        try {
            const { editorId, inviteId } = input;
            const isExists = prisma.invite.findUnique({
                where: {
                    id: inviteId,
                },
                include: { creator: true },
            });
            if (!isExists)
                throw new Error("Invite not found");
            const updateInvite = await prisma.invite.update({
                where: {
                    id: inviteId,
                },
                data: {
                    status: "ACCEPTED",
                    editorId,
                },
            });
            const createCreatorEditor = await prisma.creatorEditor.create({
                data: {
                    editorId,
                    creatorId: updateInvite.creatorId,
                    assignedAt: moment().unix().toString(),
                },
                include: { creator: true },
            });
            return backendRes({ ok: true, result: createCreatorEditor });
        }
        catch (error) {
            console.log("Error from handleAcceptInvite :", error);
            return backendRes({
                ok: false,
                result: null,
                error: error.message,
            });
        }
    }),
    getInviteDetails: trpcProcedure
        .input(dbActionsZodSchema.getInviteDetails)
        .query(async ({ input }) => {
        try {
            const { inviteId } = input;
            const isExists = await prisma.invite.findUnique({
                where: {
                    id: inviteId,
                },
                include: { creator: true },
            });
            if (!isExists)
                throw new Error("Invalid Invite Link");
            const isExpired = moment().unix() > Number(isExists.expiresAt);
            if (isExpired)
                throw new Error("Invite Link Has Been Expired!");
            return backendRes({ ok: true, result: isExists });
        }
        catch (error) {
            console.log("Error from getInviteDetails :", error);
            return backendRes({
                ok: false,
                result: null,
                error: error.message,
            });
        }
    }),
    getEditorVideos: trpcProcedure
        .input(dbActionsZodSchema.getEditorVideos)
        .query(async ({ input }) => {
        try {
            const { editorId } = input;
            const isExists = await prisma.user.findUnique({
                where: {
                    id: editorId,
                },
                include: {
                    accessibleVideos: {
                        include: {
                            video: { include: { channel: true, importedBy: true } },
                        },
                    },
                    creators: { include: { creator: true } },
                },
            });
            if (!isExists)
                throw new Error("Editor not found");
            return backendRes({ ok: true, result: isExists });
        }
        catch (error) {
            console.log("Error from getEditorVideos :", error);
            return backendRes({
                ok: false,
                result: null,
                error: error.message,
            });
        }
    }),
    getEditorCreators: trpcProcedure
        .input(dbActionsZodSchema.getEditorVideos)
        .query(async ({ input }) => {
        try {
            const { editorId } = input;
            const isExists = await prisma.user.findUnique({
                where: {
                    id: editorId,
                },
                include: {
                    creators: { include: { creator: true } },
                },
            });
            if (!isExists)
                throw new Error("Creator not found");
            return backendRes({ ok: true, result: isExists });
        }
        catch (error) {
            console.log("Error from getEditorVideos :", error);
            return backendRes({
                ok: false,
                result: null,
                error: error.message,
            });
        }
    }),
});
