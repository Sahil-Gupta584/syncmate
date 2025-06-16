/**
 * This file should be your main import to use Prisma. Through it you get access to all the models, enums, and input types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import * as $Enums from "./enums";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  Log = $Class.LogOptions<ClientOptions>,
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = $Class.PrismaClient<ClientOptions, Log, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model CreatorEditor
 *
 */
export type CreatorEditor = Prisma.CreatorEditorModel;
/**
 * Model Video
 *
 */
export type Video = Prisma.VideoModel;
/**
 * Model Channel
 *
 */
export type Channel = Prisma.ChannelModel;
/**
 * Model VideoEditor
 *
 */
export type VideoEditor = Prisma.VideoEditorModel;
/**
 * Model Invite
 *
 */
export type Invite = Prisma.InviteModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model Verification
 *
 */
export type Verification = Prisma.VerificationModel;
/**
 * Model Subscription
 *
 */
export type Subscription = Prisma.SubscriptionModel;
export type Role = $Enums.Role;
export declare const Role: {
  readonly CREATOR: "CREATOR";
  readonly EDITOR: "EDITOR";
};
export type PlanType = $Enums.PlanType;
export declare const PlanType: {
  readonly TRIAL: "TRIAL";
  readonly BASE: "BASE";
  readonly PRO: "PRO";
  readonly GROWTH: "GROWTH";
  readonly ENTERPRISE: "ENTERPRISE";
};
export type VideoStatus = $Enums.VideoStatus;
export declare const VideoStatus: {
  readonly DRAFT: "DRAFT";
  readonly SCHEDULED: "SCHEDULED";
  readonly SCHEDULING: "SCHEDULING";
  readonly PUBLISHING: "PUBLISHING";
  readonly PROCESSING: "PROCESSING";
  readonly PUBLISHED: "PUBLISHED";
};
export type PrivacyStatus = $Enums.PrivacyStatus;
export declare const PrivacyStatus: {
  readonly Private: "Private";
  readonly Public: "Public";
  readonly Unlisted: "Unlisted";
};
export type InviteStatus = $Enums.InviteStatus;
export declare const InviteStatus: {
  readonly PENDING: "PENDING";
  readonly ACCEPTED: "ACCEPTED";
  readonly EXPIRED: "EXPIRED";
};
export type subscriptionStatus = $Enums.subscriptionStatus;
export declare const subscriptionStatus: {
  readonly active: "active";
  readonly cancelled: "cancelled";
  readonly completed: "completed";
  readonly failed: "failed";
};
//# sourceMappingURL=client.d.ts.map
