export type TRole = "CREATOR" | "EDITOR";
export type PlanType = "TRIAL" | "BASE" | "PRO" | "GROWTH" | "ENTERPRISE";
export type TPlan = {
    name: PlanType;
    price: "$9" | "$14" | "$49" | "Custom";
    period: "/month" | "";
    description: string;
    features: {
        included: boolean;
        text: string;
    }[];
    cta: string;
    popular: boolean;
    monthlySubscriptionId: string;
    yearlySubscriptionId: string;
};
export declare const plans: {
    name: string;
    price: string;
    period: string;
    description: string;
    features: {
        included: boolean;
        text: string;
    }[];
    cta: string;
    popular: boolean;
    monthlySubscriptionId: string;
    yearlySubscriptionId: string;
}[];
//# sourceMappingURL=constants.d.ts.map