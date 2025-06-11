/**
 * This file exports the `Invite` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Invite
 *
 */
export type InviteModel = runtime.Types.Result.DefaultSelection<Prisma.$InvitePayload>;
export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null;
    _min: InviteMinAggregateOutputType | null;
    _max: InviteMaxAggregateOutputType | null;
};
export type InviteMinAggregateOutputType = {
    id: string | null;
    creatorId: string | null;
    editorId: string | null;
    editorEmail: string | null;
    status: $Enums.InviteStatus | null;
    createdAt: string | null;
    expiresAt: string | null;
};
export type InviteMaxAggregateOutputType = {
    id: string | null;
    creatorId: string | null;
    editorId: string | null;
    editorEmail: string | null;
    status: $Enums.InviteStatus | null;
    createdAt: string | null;
    expiresAt: string | null;
};
export type InviteCountAggregateOutputType = {
    id: number;
    creatorId: number;
    editorId: number;
    editorEmail: number;
    status: number;
    createdAt: number;
    expiresAt: number;
    _all: number;
};
export type InviteMinAggregateInputType = {
    id?: true;
    creatorId?: true;
    editorId?: true;
    editorEmail?: true;
    status?: true;
    createdAt?: true;
    expiresAt?: true;
};
export type InviteMaxAggregateInputType = {
    id?: true;
    creatorId?: true;
    editorId?: true;
    editorEmail?: true;
    status?: true;
    createdAt?: true;
    expiresAt?: true;
};
export type InviteCountAggregateInputType = {
    id?: true;
    creatorId?: true;
    editorId?: true;
    editorEmail?: true;
    status?: true;
    createdAt?: true;
    expiresAt?: true;
    _all?: true;
};
export type InviteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Invite to aggregate.
     */
    where?: Prisma.InviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invites to fetch.
     */
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.InviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invites
    **/
    _count?: true | InviteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType;
};
export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
    [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvite[P]> : Prisma.GetScalarType<T[P], AggregateInvite[P]>;
};
export type InviteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InviteWhereInput;
    orderBy?: Prisma.InviteOrderByWithAggregationInput | Prisma.InviteOrderByWithAggregationInput[];
    by: Prisma.InviteScalarFieldEnum[] | Prisma.InviteScalarFieldEnum;
    having?: Prisma.InviteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InviteCountAggregateInputType | true;
    _min?: InviteMinAggregateInputType;
    _max?: InviteMaxAggregateInputType;
};
export type InviteGroupByOutputType = {
    id: string;
    creatorId: string;
    editorId: string | null;
    editorEmail: string;
    status: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
    _count: InviteCountAggregateOutputType | null;
    _min: InviteMinAggregateOutputType | null;
    _max: InviteMaxAggregateOutputType | null;
};
type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InviteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InviteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InviteGroupByOutputType[P]>;
}>>;
export type InviteWhereInput = {
    AND?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    OR?: Prisma.InviteWhereInput[];
    NOT?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    id?: Prisma.StringFilter<"Invite"> | string;
    creatorId?: Prisma.StringFilter<"Invite"> | string;
    editorId?: Prisma.StringNullableFilter<"Invite"> | string | null;
    editorEmail?: Prisma.StringFilter<"Invite"> | string;
    status?: Prisma.EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus;
    createdAt?: Prisma.StringFilter<"Invite"> | string;
    expiresAt?: Prisma.StringFilter<"Invite"> | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    editor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
};
export type InviteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    creator?: Prisma.UserOrderByWithRelationInput;
    editor?: Prisma.UserOrderByWithRelationInput;
};
export type InviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    OR?: Prisma.InviteWhereInput[];
    NOT?: Prisma.InviteWhereInput | Prisma.InviteWhereInput[];
    creatorId?: Prisma.StringFilter<"Invite"> | string;
    editorId?: Prisma.StringNullableFilter<"Invite"> | string | null;
    editorEmail?: Prisma.StringFilter<"Invite"> | string;
    status?: Prisma.EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus;
    createdAt?: Prisma.StringFilter<"Invite"> | string;
    expiresAt?: Prisma.StringFilter<"Invite"> | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    editor?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
}, "id" | "id">;
export type InviteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    _count?: Prisma.InviteCountOrderByAggregateInput;
    _max?: Prisma.InviteMaxOrderByAggregateInput;
    _min?: Prisma.InviteMinOrderByAggregateInput;
};
export type InviteScalarWhereWithAggregatesInput = {
    AND?: Prisma.InviteScalarWhereWithAggregatesInput | Prisma.InviteScalarWhereWithAggregatesInput[];
    OR?: Prisma.InviteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InviteScalarWhereWithAggregatesInput | Prisma.InviteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    creatorId?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    editorId?: Prisma.StringNullableWithAggregatesFilter<"Invite"> | string | null;
    editorEmail?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    status?: Prisma.EnumInviteStatusWithAggregatesFilter<"Invite"> | $Enums.InviteStatus;
    createdAt?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
    expiresAt?: Prisma.StringWithAggregatesFilter<"Invite"> | string;
};
export type InviteCreateInput = {
    id?: string;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
    creator: Prisma.UserCreateNestedOneWithoutSentInvitesInput;
    editor?: Prisma.UserCreateNestedOneWithoutReceivedInvitesInput;
};
export type InviteUncheckedCreateInput = {
    id?: string;
    creatorId: string;
    editorId?: string | null;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
};
export type InviteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutSentInvitesNestedInput;
    editor?: Prisma.UserUpdateOneWithoutReceivedInvitesNestedInput;
};
export type InviteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InviteCreateManyInput = {
    id?: string;
    creatorId: string;
    editorId?: string | null;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
};
export type InviteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InviteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InviteListRelationFilter = {
    every?: Prisma.InviteWhereInput;
    some?: Prisma.InviteWhereInput;
    none?: Prisma.InviteWhereInput;
};
export type InviteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InviteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type InviteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type InviteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type InviteCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutCreatorInput, Prisma.InviteUncheckedCreateWithoutCreatorInput> | Prisma.InviteCreateWithoutCreatorInput[] | Prisma.InviteUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutCreatorInput | Prisma.InviteCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.InviteCreateManyCreatorInputEnvelope;
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
};
export type InviteCreateNestedManyWithoutEditorInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutEditorInput, Prisma.InviteUncheckedCreateWithoutEditorInput> | Prisma.InviteCreateWithoutEditorInput[] | Prisma.InviteUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutEditorInput | Prisma.InviteCreateOrConnectWithoutEditorInput[];
    createMany?: Prisma.InviteCreateManyEditorInputEnvelope;
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
};
export type InviteUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutCreatorInput, Prisma.InviteUncheckedCreateWithoutCreatorInput> | Prisma.InviteCreateWithoutCreatorInput[] | Prisma.InviteUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutCreatorInput | Prisma.InviteCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.InviteCreateManyCreatorInputEnvelope;
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
};
export type InviteUncheckedCreateNestedManyWithoutEditorInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutEditorInput, Prisma.InviteUncheckedCreateWithoutEditorInput> | Prisma.InviteCreateWithoutEditorInput[] | Prisma.InviteUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutEditorInput | Prisma.InviteCreateOrConnectWithoutEditorInput[];
    createMany?: Prisma.InviteCreateManyEditorInputEnvelope;
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
};
export type InviteUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutCreatorInput, Prisma.InviteUncheckedCreateWithoutCreatorInput> | Prisma.InviteCreateWithoutCreatorInput[] | Prisma.InviteUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutCreatorInput | Prisma.InviteCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.InviteUpsertWithWhereUniqueWithoutCreatorInput | Prisma.InviteUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.InviteCreateManyCreatorInputEnvelope;
    set?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    disconnect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    delete?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    update?: Prisma.InviteUpdateWithWhereUniqueWithoutCreatorInput | Prisma.InviteUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.InviteUpdateManyWithWhereWithoutCreatorInput | Prisma.InviteUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
};
export type InviteUpdateManyWithoutEditorNestedInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutEditorInput, Prisma.InviteUncheckedCreateWithoutEditorInput> | Prisma.InviteCreateWithoutEditorInput[] | Prisma.InviteUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutEditorInput | Prisma.InviteCreateOrConnectWithoutEditorInput[];
    upsert?: Prisma.InviteUpsertWithWhereUniqueWithoutEditorInput | Prisma.InviteUpsertWithWhereUniqueWithoutEditorInput[];
    createMany?: Prisma.InviteCreateManyEditorInputEnvelope;
    set?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    disconnect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    delete?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    update?: Prisma.InviteUpdateWithWhereUniqueWithoutEditorInput | Prisma.InviteUpdateWithWhereUniqueWithoutEditorInput[];
    updateMany?: Prisma.InviteUpdateManyWithWhereWithoutEditorInput | Prisma.InviteUpdateManyWithWhereWithoutEditorInput[];
    deleteMany?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
};
export type InviteUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutCreatorInput, Prisma.InviteUncheckedCreateWithoutCreatorInput> | Prisma.InviteCreateWithoutCreatorInput[] | Prisma.InviteUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutCreatorInput | Prisma.InviteCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.InviteUpsertWithWhereUniqueWithoutCreatorInput | Prisma.InviteUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.InviteCreateManyCreatorInputEnvelope;
    set?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    disconnect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    delete?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    update?: Prisma.InviteUpdateWithWhereUniqueWithoutCreatorInput | Prisma.InviteUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.InviteUpdateManyWithWhereWithoutCreatorInput | Prisma.InviteUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
};
export type InviteUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: Prisma.XOR<Prisma.InviteCreateWithoutEditorInput, Prisma.InviteUncheckedCreateWithoutEditorInput> | Prisma.InviteCreateWithoutEditorInput[] | Prisma.InviteUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.InviteCreateOrConnectWithoutEditorInput | Prisma.InviteCreateOrConnectWithoutEditorInput[];
    upsert?: Prisma.InviteUpsertWithWhereUniqueWithoutEditorInput | Prisma.InviteUpsertWithWhereUniqueWithoutEditorInput[];
    createMany?: Prisma.InviteCreateManyEditorInputEnvelope;
    set?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    disconnect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    delete?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    connect?: Prisma.InviteWhereUniqueInput | Prisma.InviteWhereUniqueInput[];
    update?: Prisma.InviteUpdateWithWhereUniqueWithoutEditorInput | Prisma.InviteUpdateWithWhereUniqueWithoutEditorInput[];
    updateMany?: Prisma.InviteUpdateManyWithWhereWithoutEditorInput | Prisma.InviteUpdateManyWithWhereWithoutEditorInput[];
    deleteMany?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
};
export type EnumInviteStatusFieldUpdateOperationsInput = {
    set?: $Enums.InviteStatus;
};
export type InviteCreateWithoutCreatorInput = {
    id?: string;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
    editor?: Prisma.UserCreateNestedOneWithoutReceivedInvitesInput;
};
export type InviteUncheckedCreateWithoutCreatorInput = {
    id?: string;
    editorId?: string | null;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
};
export type InviteCreateOrConnectWithoutCreatorInput = {
    where: Prisma.InviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.InviteCreateWithoutCreatorInput, Prisma.InviteUncheckedCreateWithoutCreatorInput>;
};
export type InviteCreateManyCreatorInputEnvelope = {
    data: Prisma.InviteCreateManyCreatorInput | Prisma.InviteCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type InviteCreateWithoutEditorInput = {
    id?: string;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
    creator: Prisma.UserCreateNestedOneWithoutSentInvitesInput;
};
export type InviteUncheckedCreateWithoutEditorInput = {
    id?: string;
    creatorId: string;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
};
export type InviteCreateOrConnectWithoutEditorInput = {
    where: Prisma.InviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.InviteCreateWithoutEditorInput, Prisma.InviteUncheckedCreateWithoutEditorInput>;
};
export type InviteCreateManyEditorInputEnvelope = {
    data: Prisma.InviteCreateManyEditorInput | Prisma.InviteCreateManyEditorInput[];
    skipDuplicates?: boolean;
};
export type InviteUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.InviteWhereUniqueInput;
    update: Prisma.XOR<Prisma.InviteUpdateWithoutCreatorInput, Prisma.InviteUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.InviteCreateWithoutCreatorInput, Prisma.InviteUncheckedCreateWithoutCreatorInput>;
};
export type InviteUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.InviteWhereUniqueInput;
    data: Prisma.XOR<Prisma.InviteUpdateWithoutCreatorInput, Prisma.InviteUncheckedUpdateWithoutCreatorInput>;
};
export type InviteUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.InviteScalarWhereInput;
    data: Prisma.XOR<Prisma.InviteUpdateManyMutationInput, Prisma.InviteUncheckedUpdateManyWithoutCreatorInput>;
};
export type InviteScalarWhereInput = {
    AND?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
    OR?: Prisma.InviteScalarWhereInput[];
    NOT?: Prisma.InviteScalarWhereInput | Prisma.InviteScalarWhereInput[];
    id?: Prisma.StringFilter<"Invite"> | string;
    creatorId?: Prisma.StringFilter<"Invite"> | string;
    editorId?: Prisma.StringNullableFilter<"Invite"> | string | null;
    editorEmail?: Prisma.StringFilter<"Invite"> | string;
    status?: Prisma.EnumInviteStatusFilter<"Invite"> | $Enums.InviteStatus;
    createdAt?: Prisma.StringFilter<"Invite"> | string;
    expiresAt?: Prisma.StringFilter<"Invite"> | string;
};
export type InviteUpsertWithWhereUniqueWithoutEditorInput = {
    where: Prisma.InviteWhereUniqueInput;
    update: Prisma.XOR<Prisma.InviteUpdateWithoutEditorInput, Prisma.InviteUncheckedUpdateWithoutEditorInput>;
    create: Prisma.XOR<Prisma.InviteCreateWithoutEditorInput, Prisma.InviteUncheckedCreateWithoutEditorInput>;
};
export type InviteUpdateWithWhereUniqueWithoutEditorInput = {
    where: Prisma.InviteWhereUniqueInput;
    data: Prisma.XOR<Prisma.InviteUpdateWithoutEditorInput, Prisma.InviteUncheckedUpdateWithoutEditorInput>;
};
export type InviteUpdateManyWithWhereWithoutEditorInput = {
    where: Prisma.InviteScalarWhereInput;
    data: Prisma.XOR<Prisma.InviteUpdateManyMutationInput, Prisma.InviteUncheckedUpdateManyWithoutEditorInput>;
};
export type InviteCreateManyCreatorInput = {
    id?: string;
    editorId?: string | null;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
};
export type InviteCreateManyEditorInput = {
    id?: string;
    creatorId: string;
    editorEmail: string;
    status?: $Enums.InviteStatus;
    createdAt: string;
    expiresAt: string;
};
export type InviteUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
    editor?: Prisma.UserUpdateOneWithoutReceivedInvitesNestedInput;
};
export type InviteUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    editorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InviteUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    editorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InviteUpdateWithoutEditorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutSentInvitesNestedInput;
};
export type InviteUncheckedUpdateWithoutEditorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InviteUncheckedUpdateManyWithoutEditorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumInviteStatusFieldUpdateOperationsInput | $Enums.InviteStatus;
    createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
    expiresAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type InviteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creatorId?: boolean;
    editorId?: boolean;
    editorEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.Invite$editorArgs<ExtArgs>;
}, ExtArgs["result"]["invite"]>;
export type InviteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creatorId?: boolean;
    editorId?: boolean;
    editorEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.Invite$editorArgs<ExtArgs>;
}, ExtArgs["result"]["invite"]>;
export type InviteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    creatorId?: boolean;
    editorId?: boolean;
    editorEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.Invite$editorArgs<ExtArgs>;
}, ExtArgs["result"]["invite"]>;
export type InviteSelectScalar = {
    id?: boolean;
    creatorId?: boolean;
    editorId?: boolean;
    editorEmail?: boolean;
    status?: boolean;
    createdAt?: boolean;
    expiresAt?: boolean;
};
export type InviteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "creatorId" | "editorId" | "editorEmail" | "status" | "createdAt" | "expiresAt", ExtArgs["result"]["invite"]>;
export type InviteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.Invite$editorArgs<ExtArgs>;
};
export type InviteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.Invite$editorArgs<ExtArgs>;
};
export type InviteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.Invite$editorArgs<ExtArgs>;
};
export type $InvitePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Invite";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        editor: Prisma.$UserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        creatorId: string;
        editorId: string | null;
        editorEmail: string;
        status: $Enums.InviteStatus;
        createdAt: string;
        expiresAt: string;
    }, ExtArgs["result"]["invite"]>;
    composites: {};
};
export type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvitePayload, S>;
export type InviteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InviteCountAggregateInputType | true;
};
export interface InviteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Invite'];
        meta: {
            name: 'Invite';
        };
    };
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteFindUniqueArgs>(args: Prisma.SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Invite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteFindUniqueOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteFindFirstArgs>(args?: Prisma.SelectSubset<T, InviteFindFirstArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Invite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     *
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InviteFindManyArgs>(args?: Prisma.SelectSubset<T, InviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     *
     */
    create<T extends InviteCreateArgs>(args: Prisma.SelectSubset<T, InviteCreateArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Invites.
     * @param {InviteCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InviteCreateManyArgs>(args?: Prisma.SelectSubset<T, InviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Invites and returns the data saved in the database.
     * @param {InviteCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InviteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     *
     */
    delete<T extends InviteDeleteArgs>(args: Prisma.SelectSubset<T, InviteDeleteArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InviteUpdateArgs>(args: Prisma.SelectSubset<T, InviteUpdateArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InviteDeleteManyArgs>(args?: Prisma.SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InviteUpdateManyArgs>(args: Prisma.SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Invites and returns the data updated in the database.
     * @param {InviteUpdateManyAndReturnArgs} args - Arguments to update many Invites.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends InviteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
     */
    upsert<T extends InviteUpsertArgs>(args: Prisma.SelectSubset<T, InviteUpsertArgs<ExtArgs>>): Prisma.Prisma__InviteClient<runtime.Types.Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InviteCountArgs>(args?: Prisma.Subset<T, InviteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InviteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteAggregateArgs>(args: Prisma.Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>;
    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends InviteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InviteGroupByArgs['orderBy'];
    } : {
        orderBy?: InviteGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Invite model
     */
    readonly fields: InviteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Invite.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__InviteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    editor<T extends Prisma.Invite$editorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Invite$editorArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Invite model
 */
export interface InviteFieldRefs {
    readonly id: Prisma.FieldRef<"Invite", 'String'>;
    readonly creatorId: Prisma.FieldRef<"Invite", 'String'>;
    readonly editorId: Prisma.FieldRef<"Invite", 'String'>;
    readonly editorEmail: Prisma.FieldRef<"Invite", 'String'>;
    readonly status: Prisma.FieldRef<"Invite", 'InviteStatus'>;
    readonly createdAt: Prisma.FieldRef<"Invite", 'String'>;
    readonly expiresAt: Prisma.FieldRef<"Invite", 'String'>;
}
/**
 * Invite findUnique
 */
export type InviteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * Filter, which Invite to fetch.
     */
    where: Prisma.InviteWhereUniqueInput;
};
/**
 * Invite findUniqueOrThrow
 */
export type InviteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * Filter, which Invite to fetch.
     */
    where: Prisma.InviteWhereUniqueInput;
};
/**
 * Invite findFirst
 */
export type InviteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * Filter, which Invite to fetch.
     */
    where?: Prisma.InviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invites to fetch.
     */
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invites.
     */
    cursor?: Prisma.InviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invites.
     */
    distinct?: Prisma.InviteScalarFieldEnum | Prisma.InviteScalarFieldEnum[];
};
/**
 * Invite findFirstOrThrow
 */
export type InviteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * Filter, which Invite to fetch.
     */
    where?: Prisma.InviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invites to fetch.
     */
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invites.
     */
    cursor?: Prisma.InviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invites.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invites.
     */
    distinct?: Prisma.InviteScalarFieldEnum | Prisma.InviteScalarFieldEnum[];
};
/**
 * Invite findMany
 */
export type InviteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * Filter, which Invites to fetch.
     */
    where?: Prisma.InviteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invites to fetch.
     */
    orderBy?: Prisma.InviteOrderByWithRelationInput | Prisma.InviteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invites.
     */
    cursor?: Prisma.InviteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invites.
     */
    skip?: number;
    distinct?: Prisma.InviteScalarFieldEnum | Prisma.InviteScalarFieldEnum[];
};
/**
 * Invite create
 */
export type InviteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * The data needed to create a Invite.
     */
    data: Prisma.XOR<Prisma.InviteCreateInput, Prisma.InviteUncheckedCreateInput>;
};
/**
 * Invite createMany
 */
export type InviteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: Prisma.InviteCreateManyInput | Prisma.InviteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Invite createManyAndReturn
 */
export type InviteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * The data used to create many Invites.
     */
    data: Prisma.InviteCreateManyInput | Prisma.InviteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Invite update
 */
export type InviteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * The data needed to update a Invite.
     */
    data: Prisma.XOR<Prisma.InviteUpdateInput, Prisma.InviteUncheckedUpdateInput>;
    /**
     * Choose, which Invite to update.
     */
    where: Prisma.InviteWhereUniqueInput;
};
/**
 * Invite updateMany
 */
export type InviteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: Prisma.XOR<Prisma.InviteUpdateManyMutationInput, Prisma.InviteUncheckedUpdateManyInput>;
    /**
     * Filter which Invites to update
     */
    where?: Prisma.InviteWhereInput;
    /**
     * Limit how many Invites to update.
     */
    limit?: number;
};
/**
 * Invite updateManyAndReturn
 */
export type InviteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * The data used to update Invites.
     */
    data: Prisma.XOR<Prisma.InviteUpdateManyMutationInput, Prisma.InviteUncheckedUpdateManyInput>;
    /**
     * Filter which Invites to update
     */
    where?: Prisma.InviteWhereInput;
    /**
     * Limit how many Invites to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Invite upsert
 */
export type InviteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * The filter to search for the Invite to update in case it exists.
     */
    where: Prisma.InviteWhereUniqueInput;
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     */
    create: Prisma.XOR<Prisma.InviteCreateInput, Prisma.InviteUncheckedCreateInput>;
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.InviteUpdateInput, Prisma.InviteUncheckedUpdateInput>;
};
/**
 * Invite delete
 */
export type InviteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
    /**
     * Filter which Invite to delete.
     */
    where: Prisma.InviteWhereUniqueInput;
};
/**
 * Invite deleteMany
 */
export type InviteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: Prisma.InviteWhereInput;
    /**
     * Limit how many Invites to delete.
     */
    limit?: number;
};
/**
 * Invite.editor
 */
export type Invite$editorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * Invite without action
 */
export type InviteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: Prisma.InviteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invite
     */
    omit?: Prisma.InviteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.InviteInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Invite.d.ts.map