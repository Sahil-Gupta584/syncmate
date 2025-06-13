import { prisma } from "@repo/db";
import moment from "moment";
import nodemailer from "nodemailer";
import { backendRes, getGoogleServices } from "../../helpers.js";
import { trpcProcedure, trpcRouter } from "../trpc.js";
import { actionsZodSchema } from "./schema.js";
export const actionsRoutes = trpcRouter({
  getVideoLink: trpcProcedure
    .input(actionsZodSchema.getVideoDetails)
    .query(async ({ input }) => {
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
          throw new Error("Failed to get Google services: " + error?.message);
        }
        const { drive } = result;
        if (!video.gDriveId) throw new Error("Invalid gDriveId");
        const file = await drive.files.get({
          fileId: video.gDriveId,
          fields: "webViewLink",
        });
        if (!file.data.webViewLink) {
          throw new Error("Video not found");
        }
        return backendRes({
          ok: true,
          result: {
            videoLink: file.data.webViewLink.replace(
              "view?usp=drivesdk",
              "preview",
            ),
          },
        });
      } catch (error) {
        console.error("Error in getVideoLink:", error);
        return backendRes({ ok: false, error: error, result: null });
      }
    }),
  getPlaylists: trpcProcedure
    .input(actionsZodSchema.getPlaylists)
    .query(async ({ input }) => {
      try {
        const { channelId } = input;
        const { result, error } = await getGoogleServices(channelId);
        if (!result) {
          throw new Error("Failed to get Google services: " + error?.message);
        }
        const { youtube } = result;
        const res = await youtube.playlists.list({
          part: ["snippet"],
          channelId,
        });
        // console.log("res", res.data);
        return backendRes({
          ok: true,
          result: { data: res.data.items },
        });
      } catch (error) {
        console.error("Error in getPlaylists:", error);
        return backendRes({ ok: false, error: error, result: null });
      }
    }),
  sendInviteLink: trpcProcedure
    .input(actionsZodSchema.sendInviteLink)
    .mutation(async ({ input }) => {
      try {
        const { editorEmail, creator } = input;
        if (editorEmail === creator.email) {
          throw new Error("Buddy, You can't invite yourself🤗! ");
        }
        if (!creator.id) throw new Error("Creator Not Found");
        const isEditorAlreadyInSpace = await prisma.creatorEditor.findFirst({
          where: {
            creator: { id: creator.id },
            editor: { email: editorEmail },
          },
        });
        if (isEditorAlreadyInSpace) {
          throw new Error("Editor already in your workspace . ");
        }
        const isEditorExists = await prisma.user.findUnique({
          where: { email: editorEmail },
        });
        const isInviteExists = await prisma.invite.findFirst({
          where: {
            creatorId: creator.id,
            editorEmail,
          },
        });
        if (isInviteExists) {
          throw new Error("Invite already sent to this editor. ");
        }
        const createInvite = await prisma.invite.create({
          data: {
            creatorId: creator.id,
            editorEmail,
            editorId: isEditorExists ? isEditorExists.id : undefined,
            expiresAt: moment().add(7, "day").unix().toString(),
            createdAt: moment().unix().toString(),
          },
        });
        // console.log("isEditorAlreadyInSpace", isEditorAlreadyInSpace);
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS,
          },
        });
        transporter.sendMail({
          from: process.env.NODEMAILER_USER,
          to: editorEmail,
          subject: "Invite Link",
          text: "Click here to join: https://example.com/invite",
          html: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You're Invited to Join Syncly</title>
  </head>
  <body style="margin: 0; font-family: 'Segoe UI', sans-serif; background-color: #f5f5f7; color: #1f1f1f;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 0;">
      <tr>
        <td align="center">
          <!-- Main Container -->
          <table width="100%" max-width="600px" cellpadding="0" cellspacing="0" style="background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); padding: 32px; width: 100%; max-width: 500px;">
            
            <!-- Header Branding -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <h1 style="margin: 0; font-size: 28px; color: #3b3b3b; font-weight: 800;">Syncly</h1>
                <p style="margin: 0; color: #777; font-size: 14px;">
                 The smart workspace for creators and editors.
                </p>
              </td>
            </tr>

            <!-- Invite Message -->
            <tr>
              <td align="center" style="font-size: 18px; font-weight: 600; padding: 24px 0 8px;">
                🎥 ${creator.name} invited you to collaborate
              </td>
            </tr>

            <tr>
              <td align="center" style="font-size: 15px; color: #4b4b4b; padding-bottom: 20px;">
                 <a href="mailto:${creator.email}" style="color: #6366f1; text-decoration: none;"><strong>${creator.name}</strong></a> has invited you to join their workspace on <strong>Syncly</strong> — the all-in-one platform for content creators and editors.
              </td>
            </tr>

            <!-- Workspace Card -->
            <tr>
              <td align="center" style="padding-bottom: 20px;">
                <div style="display: inline-block; background-color: #eef2ff; padding: 14px 24px; border-radius: 10px; font-size: 16px; font-weight: 600; color: #4f46e5;">
                  ${creator.name}’s Workspace
                </div>
              </td>
            </tr>

            <!-- Accept Invite Button -->
            <tr>
              <td align="center" style="padding-bottom: 16px;">
                <a href='${process.env.VITE_EDITOR_BASE_URL}/invite/${createInvite.id}' style="background-color: #4f46e5; color: white; text-decoration: none; padding: 14px 28px; font-size: 16px; border-radius: 8px; font-weight: bold; display: inline-block;">
                  Accept Invite
                </a>
                <p><strong>Note: </strong>This invite will get expired in 7 days.</p>
              </td>
            </tr>

          <!-- Footer -->
          <table width="100%" max-width="600px" cellpadding="0" cellspacing="0" style="padding-top: 32px; text-align: center; color: #9ca3af; font-size: 13px;">
            <tr>
              <td>
                You received this because a creator invited you to work together on Syncly.
              </td>
            </tr>
            <tr>
              <td style="padding-top: 8px;">
                © 2025 <strong>Syncly</strong> — The smart workspace for creators and editors.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
        });
        return backendRes({ ok: true, result: true });
      } catch (error) {
        console.error("Error in sendInviteLink:", error);
        return backendRes({ ok: false, error: error, result: null });
      }
    }),
});
