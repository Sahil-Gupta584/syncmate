/**
* This file exports all enum related types from the schema.
*
* 🟢 You can import this file directly.
*/
export declare const Role: {
    readonly CREATOR: "CREATOR";
    readonly EDITOR: "EDITOR";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const PlanType: {
    readonly TRIAL: "TRIAL";
    readonly BASE: "BASE";
    readonly PRO: "PRO";
    readonly GROWTH: "GROWTH";
    readonly ENTERPRISE: "ENTERPRISE";
};
export type PlanType = (typeof PlanType)[keyof typeof PlanType];
export declare const VideoStatus: {
    readonly DRAFT: "DRAFT";
    readonly SCHEDULED: "SCHEDULED";
    readonly SCHEDULING: "SCHEDULING";
    readonly PUBLISHING: "PUBLISHING";
    readonly PROCESSING: "PROCESSING";
    readonly PUBLISHED: "PUBLISHED";
};
export type VideoStatus = (typeof VideoStatus)[keyof typeof VideoStatus];
export declare const PrivacyStatus: {
    readonly Private: "Private";
    readonly Public: "Public";
    readonly Unlisted: "Unlisted";
};
export type PrivacyStatus = (typeof PrivacyStatus)[keyof typeof PrivacyStatus];
export declare const InviteStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly EXPIRED: "EXPIRED";
};
export type InviteStatus = (typeof InviteStatus)[keyof typeof InviteStatus];
export declare const subscriptionStatus: {
    readonly active: "active";
    readonly cancelled: "cancelled";
    readonly completed: "completed";
    readonly failed: "failed";
};
export type subscriptionStatus = (typeof subscriptionStatus)[keyof typeof subscriptionStatus];
//# sourceMappingURL=enums.d.ts.map