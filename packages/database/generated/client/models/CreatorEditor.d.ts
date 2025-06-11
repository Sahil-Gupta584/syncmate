/**
 * This file exports the `CreatorEditor` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model CreatorEditor
 *
 */
export type CreatorEditorModel = runtime.Types.Result.DefaultSelection<Prisma.$CreatorEditorPayload>;
export type AggregateCreatorEditor = {
    _count: CreatorEditorCountAggregateOutputType | null;
    _min: CreatorEditorMinAggregateOutputType | null;
    _max: CreatorEditorMaxAggregateOutputType | null;
};
export type CreatorEditorMinAggregateOutputType = {
    creatorId: string | null;
    editorId: string | null;
    assignedAt: string | null;
};
export type CreatorEditorMaxAggregateOutputType = {
    creatorId: string | null;
    editorId: string | null;
    assignedAt: string | null;
};
export type CreatorEditorCountAggregateOutputType = {
    creatorId: number;
    editorId: number;
    assignedAt: number;
    _all: number;
};
export type CreatorEditorMinAggregateInputType = {
    creatorId?: true;
    editorId?: true;
    assignedAt?: true;
};
export type CreatorEditorMaxAggregateInputType = {
    creatorId?: true;
    editorId?: true;
    assignedAt?: true;
};
export type CreatorEditorCountAggregateInputType = {
    creatorId?: true;
    editorId?: true;
    assignedAt?: true;
    _all?: true;
};
export type CreatorEditorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorEditor to aggregate.
     */
    where?: Prisma.CreatorEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CreatorEditors to fetch.
     */
    orderBy?: Prisma.CreatorEditorOrderByWithRelationInput | Prisma.CreatorEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CreatorEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CreatorEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CreatorEditors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CreatorEditors
    **/
    _count?: true | CreatorEditorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CreatorEditorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CreatorEditorMaxAggregateInputType;
};
export type GetCreatorEditorAggregateType<T extends CreatorEditorAggregateArgs> = {
    [P in keyof T & keyof AggregateCreatorEditor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCreatorEditor[P]> : Prisma.GetScalarType<T[P], AggregateCreatorEditor[P]>;
};
export type CreatorEditorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CreatorEditorWhereInput;
    orderBy?: Prisma.CreatorEditorOrderByWithAggregationInput | Prisma.CreatorEditorOrderByWithAggregationInput[];
    by: Prisma.CreatorEditorScalarFieldEnum[] | Prisma.CreatorEditorScalarFieldEnum;
    having?: Prisma.CreatorEditorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CreatorEditorCountAggregateInputType | true;
    _min?: CreatorEditorMinAggregateInputType;
    _max?: CreatorEditorMaxAggregateInputType;
};
export type CreatorEditorGroupByOutputType = {
    creatorId: string;
    editorId: string;
    assignedAt: string;
    _count: CreatorEditorCountAggregateOutputType | null;
    _min: CreatorEditorMinAggregateOutputType | null;
    _max: CreatorEditorMaxAggregateOutputType | null;
};
type GetCreatorEditorGroupByPayload<T extends CreatorEditorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CreatorEditorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CreatorEditorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CreatorEditorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CreatorEditorGroupByOutputType[P]>;
}>>;
export type CreatorEditorWhereInput = {
    AND?: Prisma.CreatorEditorWhereInput | Prisma.CreatorEditorWhereInput[];
    OR?: Prisma.CreatorEditorWhereInput[];
    NOT?: Prisma.CreatorEditorWhereInput | Prisma.CreatorEditorWhereInput[];
    creatorId?: Prisma.StringFilter<"CreatorEditor"> | string;
    editorId?: Prisma.StringFilter<"CreatorEditor"> | string;
    assignedAt?: Prisma.StringFilter<"CreatorEditor"> | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    editor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type CreatorEditorOrderByWithRelationInput = {
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    creator?: Prisma.UserOrderByWithRelationInput;
    editor?: Prisma.UserOrderByWithRelationInput;
};
export type CreatorEditorWhereUniqueInput = Prisma.AtLeast<{
    creatorId_editorId?: Prisma.CreatorEditorCreatorIdEditorIdCompoundUniqueInput;
    AND?: Prisma.CreatorEditorWhereInput | Prisma.CreatorEditorWhereInput[];
    OR?: Prisma.CreatorEditorWhereInput[];
    NOT?: Prisma.CreatorEditorWhereInput | Prisma.CreatorEditorWhereInput[];
    creatorId?: Prisma.StringFilter<"CreatorEditor"> | string;
    editorId?: Prisma.StringFilter<"CreatorEditor"> | string;
    assignedAt?: Prisma.StringFilter<"CreatorEditor"> | string;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    editor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "creatorId_editorId">;
export type CreatorEditorOrderByWithAggregationInput = {
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    _count?: Prisma.CreatorEditorCountOrderByAggregateInput;
    _max?: Prisma.CreatorEditorMaxOrderByAggregateInput;
    _min?: Prisma.CreatorEditorMinOrderByAggregateInput;
};
export type CreatorEditorScalarWhereWithAggregatesInput = {
    AND?: Prisma.CreatorEditorScalarWhereWithAggregatesInput | Prisma.CreatorEditorScalarWhereWithAggregatesInput[];
    OR?: Prisma.CreatorEditorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CreatorEditorScalarWhereWithAggregatesInput | Prisma.CreatorEditorScalarWhereWithAggregatesInput[];
    creatorId?: Prisma.StringWithAggregatesFilter<"CreatorEditor"> | string;
    editorId?: Prisma.StringWithAggregatesFilter<"CreatorEditor"> | string;
    assignedAt?: Prisma.StringWithAggregatesFilter<"CreatorEditor"> | string;
};
export type CreatorEditorCreateInput = {
    assignedAt: string;
    creator: Prisma.UserCreateNestedOneWithoutEditorsInput;
    editor: Prisma.UserCreateNestedOneWithoutCreatorsInput;
};
export type CreatorEditorUncheckedCreateInput = {
    creatorId: string;
    editorId: string;
    assignedAt: string;
};
export type CreatorEditorUpdateInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutEditorsNestedInput;
    editor?: Prisma.UserUpdateOneRequiredWithoutCreatorsNestedInput;
};
export type CreatorEditorUncheckedUpdateInput = {
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CreatorEditorCreateManyInput = {
    creatorId: string;
    editorId: string;
    assignedAt: string;
};
export type CreatorEditorUpdateManyMutationInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CreatorEditorUncheckedUpdateManyInput = {
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CreatorEditorListRelationFilter = {
    every?: Prisma.CreatorEditorWhereInput;
    some?: Prisma.CreatorEditorWhereInput;
    none?: Prisma.CreatorEditorWhereInput;
};
export type CreatorEditorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CreatorEditorCreatorIdEditorIdCompoundUniqueInput = {
    creatorId: string;
    editorId: string;
};
export type CreatorEditorCountOrderByAggregateInput = {
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type CreatorEditorMaxOrderByAggregateInput = {
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type CreatorEditorMinOrderByAggregateInput = {
    creatorId?: Prisma.SortOrder;
    editorId?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type CreatorEditorCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutCreatorInput, Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput> | Prisma.CreatorEditorCreateWithoutCreatorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput | Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.CreatorEditorCreateManyCreatorInputEnvelope;
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
};
export type CreatorEditorCreateNestedManyWithoutEditorInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutEditorInput, Prisma.CreatorEditorUncheckedCreateWithoutEditorInput> | Prisma.CreatorEditorCreateWithoutEditorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutEditorInput | Prisma.CreatorEditorCreateOrConnectWithoutEditorInput[];
    createMany?: Prisma.CreatorEditorCreateManyEditorInputEnvelope;
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
};
export type CreatorEditorUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutCreatorInput, Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput> | Prisma.CreatorEditorCreateWithoutCreatorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput | Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.CreatorEditorCreateManyCreatorInputEnvelope;
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
};
export type CreatorEditorUncheckedCreateNestedManyWithoutEditorInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutEditorInput, Prisma.CreatorEditorUncheckedCreateWithoutEditorInput> | Prisma.CreatorEditorCreateWithoutEditorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutEditorInput | Prisma.CreatorEditorCreateOrConnectWithoutEditorInput[];
    createMany?: Prisma.CreatorEditorCreateManyEditorInputEnvelope;
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
};
export type CreatorEditorUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutCreatorInput, Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput> | Prisma.CreatorEditorCreateWithoutCreatorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput | Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.CreatorEditorUpsertWithWhereUniqueWithoutCreatorInput | Prisma.CreatorEditorUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.CreatorEditorCreateManyCreatorInputEnvelope;
    set?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    disconnect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    delete?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    update?: Prisma.CreatorEditorUpdateWithWhereUniqueWithoutCreatorInput | Prisma.CreatorEditorUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.CreatorEditorUpdateManyWithWhereWithoutCreatorInput | Prisma.CreatorEditorUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.CreatorEditorScalarWhereInput | Prisma.CreatorEditorScalarWhereInput[];
};
export type CreatorEditorUpdateManyWithoutEditorNestedInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutEditorInput, Prisma.CreatorEditorUncheckedCreateWithoutEditorInput> | Prisma.CreatorEditorCreateWithoutEditorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutEditorInput | Prisma.CreatorEditorCreateOrConnectWithoutEditorInput[];
    upsert?: Prisma.CreatorEditorUpsertWithWhereUniqueWithoutEditorInput | Prisma.CreatorEditorUpsertWithWhereUniqueWithoutEditorInput[];
    createMany?: Prisma.CreatorEditorCreateManyEditorInputEnvelope;
    set?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    disconnect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    delete?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    update?: Prisma.CreatorEditorUpdateWithWhereUniqueWithoutEditorInput | Prisma.CreatorEditorUpdateWithWhereUniqueWithoutEditorInput[];
    updateMany?: Prisma.CreatorEditorUpdateManyWithWhereWithoutEditorInput | Prisma.CreatorEditorUpdateManyWithWhereWithoutEditorInput[];
    deleteMany?: Prisma.CreatorEditorScalarWhereInput | Prisma.CreatorEditorScalarWhereInput[];
};
export type CreatorEditorUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutCreatorInput, Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput> | Prisma.CreatorEditorCreateWithoutCreatorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput | Prisma.CreatorEditorCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.CreatorEditorUpsertWithWhereUniqueWithoutCreatorInput | Prisma.CreatorEditorUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.CreatorEditorCreateManyCreatorInputEnvelope;
    set?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    disconnect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    delete?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    update?: Prisma.CreatorEditorUpdateWithWhereUniqueWithoutCreatorInput | Prisma.CreatorEditorUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.CreatorEditorUpdateManyWithWhereWithoutCreatorInput | Prisma.CreatorEditorUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.CreatorEditorScalarWhereInput | Prisma.CreatorEditorScalarWhereInput[];
};
export type CreatorEditorUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: Prisma.XOR<Prisma.CreatorEditorCreateWithoutEditorInput, Prisma.CreatorEditorUncheckedCreateWithoutEditorInput> | Prisma.CreatorEditorCreateWithoutEditorInput[] | Prisma.CreatorEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.CreatorEditorCreateOrConnectWithoutEditorInput | Prisma.CreatorEditorCreateOrConnectWithoutEditorInput[];
    upsert?: Prisma.CreatorEditorUpsertWithWhereUniqueWithoutEditorInput | Prisma.CreatorEditorUpsertWithWhereUniqueWithoutEditorInput[];
    createMany?: Prisma.CreatorEditorCreateManyEditorInputEnvelope;
    set?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    disconnect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    delete?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    connect?: Prisma.CreatorEditorWhereUniqueInput | Prisma.CreatorEditorWhereUniqueInput[];
    update?: Prisma.CreatorEditorUpdateWithWhereUniqueWithoutEditorInput | Prisma.CreatorEditorUpdateWithWhereUniqueWithoutEditorInput[];
    updateMany?: Prisma.CreatorEditorUpdateManyWithWhereWithoutEditorInput | Prisma.CreatorEditorUpdateManyWithWhereWithoutEditorInput[];
    deleteMany?: Prisma.CreatorEditorScalarWhereInput | Prisma.CreatorEditorScalarWhereInput[];
};
export type CreatorEditorCreateWithoutCreatorInput = {
    assignedAt: string;
    editor: Prisma.UserCreateNestedOneWithoutCreatorsInput;
};
export type CreatorEditorUncheckedCreateWithoutCreatorInput = {
    editorId: string;
    assignedAt: string;
};
export type CreatorEditorCreateOrConnectWithoutCreatorInput = {
    where: Prisma.CreatorEditorWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreatorEditorCreateWithoutCreatorInput, Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput>;
};
export type CreatorEditorCreateManyCreatorInputEnvelope = {
    data: Prisma.CreatorEditorCreateManyCreatorInput | Prisma.CreatorEditorCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type CreatorEditorCreateWithoutEditorInput = {
    assignedAt: string;
    creator: Prisma.UserCreateNestedOneWithoutEditorsInput;
};
export type CreatorEditorUncheckedCreateWithoutEditorInput = {
    creatorId: string;
    assignedAt: string;
};
export type CreatorEditorCreateOrConnectWithoutEditorInput = {
    where: Prisma.CreatorEditorWhereUniqueInput;
    create: Prisma.XOR<Prisma.CreatorEditorCreateWithoutEditorInput, Prisma.CreatorEditorUncheckedCreateWithoutEditorInput>;
};
export type CreatorEditorCreateManyEditorInputEnvelope = {
    data: Prisma.CreatorEditorCreateManyEditorInput | Prisma.CreatorEditorCreateManyEditorInput[];
    skipDuplicates?: boolean;
};
export type CreatorEditorUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.CreatorEditorWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreatorEditorUpdateWithoutCreatorInput, Prisma.CreatorEditorUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.CreatorEditorCreateWithoutCreatorInput, Prisma.CreatorEditorUncheckedCreateWithoutCreatorInput>;
};
export type CreatorEditorUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.CreatorEditorWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreatorEditorUpdateWithoutCreatorInput, Prisma.CreatorEditorUncheckedUpdateWithoutCreatorInput>;
};
export type CreatorEditorUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.CreatorEditorScalarWhereInput;
    data: Prisma.XOR<Prisma.CreatorEditorUpdateManyMutationInput, Prisma.CreatorEditorUncheckedUpdateManyWithoutCreatorInput>;
};
export type CreatorEditorScalarWhereInput = {
    AND?: Prisma.CreatorEditorScalarWhereInput | Prisma.CreatorEditorScalarWhereInput[];
    OR?: Prisma.CreatorEditorScalarWhereInput[];
    NOT?: Prisma.CreatorEditorScalarWhereInput | Prisma.CreatorEditorScalarWhereInput[];
    creatorId?: Prisma.StringFilter<"CreatorEditor"> | string;
    editorId?: Prisma.StringFilter<"CreatorEditor"> | string;
    assignedAt?: Prisma.StringFilter<"CreatorEditor"> | string;
};
export type CreatorEditorUpsertWithWhereUniqueWithoutEditorInput = {
    where: Prisma.CreatorEditorWhereUniqueInput;
    update: Prisma.XOR<Prisma.CreatorEditorUpdateWithoutEditorInput, Prisma.CreatorEditorUncheckedUpdateWithoutEditorInput>;
    create: Prisma.XOR<Prisma.CreatorEditorCreateWithoutEditorInput, Prisma.CreatorEditorUncheckedCreateWithoutEditorInput>;
};
export type CreatorEditorUpdateWithWhereUniqueWithoutEditorInput = {
    where: Prisma.CreatorEditorWhereUniqueInput;
    data: Prisma.XOR<Prisma.CreatorEditorUpdateWithoutEditorInput, Prisma.CreatorEditorUncheckedUpdateWithoutEditorInput>;
};
export type CreatorEditorUpdateManyWithWhereWithoutEditorInput = {
    where: Prisma.CreatorEditorScalarWhereInput;
    data: Prisma.XOR<Prisma.CreatorEditorUpdateManyMutationInput, Prisma.CreatorEditorUncheckedUpdateManyWithoutEditorInput>;
};
export type CreatorEditorCreateManyCreatorInput = {
    editorId: string;
    assignedAt: string;
};
export type CreatorEditorCreateManyEditorInput = {
    creatorId: string;
    assignedAt: string;
};
export type CreatorEditorUpdateWithoutCreatorInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
    editor?: Prisma.UserUpdateOneRequiredWithoutCreatorsNestedInput;
};
export type CreatorEditorUncheckedUpdateWithoutCreatorInput = {
    editorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CreatorEditorUncheckedUpdateManyWithoutCreatorInput = {
    editorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CreatorEditorUpdateWithoutEditorInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
    creator?: Prisma.UserUpdateOneRequiredWithoutEditorsNestedInput;
};
export type CreatorEditorUncheckedUpdateWithoutEditorInput = {
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CreatorEditorUncheckedUpdateManyWithoutEditorInput = {
    creatorId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CreatorEditorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    creatorId?: boolean;
    editorId?: boolean;
    assignedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creatorEditor"]>;
export type CreatorEditorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    creatorId?: boolean;
    editorId?: boolean;
    assignedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creatorEditor"]>;
export type CreatorEditorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    creatorId?: boolean;
    editorId?: boolean;
    assignedAt?: boolean;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["creatorEditor"]>;
export type CreatorEditorSelectScalar = {
    creatorId?: boolean;
    editorId?: boolean;
    assignedAt?: boolean;
};
export type CreatorEditorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"creatorId" | "editorId" | "assignedAt", ExtArgs["result"]["creatorEditor"]>;
export type CreatorEditorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CreatorEditorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CreatorEditorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CreatorEditorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CreatorEditor";
    objects: {
        creator: Prisma.$UserPayload<ExtArgs>;
        editor: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        creatorId: string;
        editorId: string;
        assignedAt: string;
    }, ExtArgs["result"]["creatorEditor"]>;
    composites: {};
};
export type CreatorEditorGetPayload<S extends boolean | null | undefined | CreatorEditorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload, S>;
export type CreatorEditorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CreatorEditorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CreatorEditorCountAggregateInputType | true;
};
export interface CreatorEditorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CreatorEditor'];
        meta: {
            name: 'CreatorEditor';
        };
    };
    /**
     * Find zero or one CreatorEditor that matches the filter.
     * @param {CreatorEditorFindUniqueArgs} args - Arguments to find a CreatorEditor
     * @example
     * // Get one CreatorEditor
     * const creatorEditor = await prisma.creatorEditor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreatorEditorFindUniqueArgs>(args: Prisma.SelectSubset<T, CreatorEditorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CreatorEditor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreatorEditorFindUniqueOrThrowArgs} args - Arguments to find a CreatorEditor
     * @example
     * // Get one CreatorEditor
     * const creatorEditor = await prisma.creatorEditor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreatorEditorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CreatorEditorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CreatorEditor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorEditorFindFirstArgs} args - Arguments to find a CreatorEditor
     * @example
     * // Get one CreatorEditor
     * const creatorEditor = await prisma.creatorEditor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreatorEditorFindFirstArgs>(args?: Prisma.SelectSubset<T, CreatorEditorFindFirstArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CreatorEditor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorEditorFindFirstOrThrowArgs} args - Arguments to find a CreatorEditor
     * @example
     * // Get one CreatorEditor
     * const creatorEditor = await prisma.creatorEditor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreatorEditorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CreatorEditorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CreatorEditors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorEditorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreatorEditors
     * const creatorEditors = await prisma.creatorEditor.findMany()
     *
     * // Get first 10 CreatorEditors
     * const creatorEditors = await prisma.creatorEditor.findMany({ take: 10 })
     *
     * // Only select the `creatorId`
     * const creatorEditorWithCreatorIdOnly = await prisma.creatorEditor.findMany({ select: { creatorId: true } })
     *
     */
    findMany<T extends CreatorEditorFindManyArgs>(args?: Prisma.SelectSubset<T, CreatorEditorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CreatorEditor.
     * @param {CreatorEditorCreateArgs} args - Arguments to create a CreatorEditor.
     * @example
     * // Create one CreatorEditor
     * const CreatorEditor = await prisma.creatorEditor.create({
     *   data: {
     *     // ... data to create a CreatorEditor
     *   }
     * })
     *
     */
    create<T extends CreatorEditorCreateArgs>(args: Prisma.SelectSubset<T, CreatorEditorCreateArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CreatorEditors.
     * @param {CreatorEditorCreateManyArgs} args - Arguments to create many CreatorEditors.
     * @example
     * // Create many CreatorEditors
     * const creatorEditor = await prisma.creatorEditor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CreatorEditorCreateManyArgs>(args?: Prisma.SelectSubset<T, CreatorEditorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CreatorEditors and returns the data saved in the database.
     * @param {CreatorEditorCreateManyAndReturnArgs} args - Arguments to create many CreatorEditors.
     * @example
     * // Create many CreatorEditors
     * const creatorEditor = await prisma.creatorEditor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CreatorEditors and only return the `creatorId`
     * const creatorEditorWithCreatorIdOnly = await prisma.creatorEditor.createManyAndReturn({
     *   select: { creatorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CreatorEditorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CreatorEditorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CreatorEditor.
     * @param {CreatorEditorDeleteArgs} args - Arguments to delete one CreatorEditor.
     * @example
     * // Delete one CreatorEditor
     * const CreatorEditor = await prisma.creatorEditor.delete({
     *   where: {
     *     // ... filter to delete one CreatorEditor
     *   }
     * })
     *
     */
    delete<T extends CreatorEditorDeleteArgs>(args: Prisma.SelectSubset<T, CreatorEditorDeleteArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CreatorEditor.
     * @param {CreatorEditorUpdateArgs} args - Arguments to update one CreatorEditor.
     * @example
     * // Update one CreatorEditor
     * const creatorEditor = await prisma.creatorEditor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CreatorEditorUpdateArgs>(args: Prisma.SelectSubset<T, CreatorEditorUpdateArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CreatorEditors.
     * @param {CreatorEditorDeleteManyArgs} args - Arguments to filter CreatorEditors to delete.
     * @example
     * // Delete a few CreatorEditors
     * const { count } = await prisma.creatorEditor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CreatorEditorDeleteManyArgs>(args?: Prisma.SelectSubset<T, CreatorEditorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CreatorEditors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorEditorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreatorEditors
     * const creatorEditor = await prisma.creatorEditor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CreatorEditorUpdateManyArgs>(args: Prisma.SelectSubset<T, CreatorEditorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CreatorEditors and returns the data updated in the database.
     * @param {CreatorEditorUpdateManyAndReturnArgs} args - Arguments to update many CreatorEditors.
     * @example
     * // Update many CreatorEditors
     * const creatorEditor = await prisma.creatorEditor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CreatorEditors and only return the `creatorId`
     * const creatorEditorWithCreatorIdOnly = await prisma.creatorEditor.updateManyAndReturn({
     *   select: { creatorId: true },
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
    updateManyAndReturn<T extends CreatorEditorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CreatorEditorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CreatorEditor.
     * @param {CreatorEditorUpsertArgs} args - Arguments to update or create a CreatorEditor.
     * @example
     * // Update or create a CreatorEditor
     * const creatorEditor = await prisma.creatorEditor.upsert({
     *   create: {
     *     // ... data to create a CreatorEditor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreatorEditor we want to update
     *   }
     * })
     */
    upsert<T extends CreatorEditorUpsertArgs>(args: Prisma.SelectSubset<T, CreatorEditorUpsertArgs<ExtArgs>>): Prisma.Prisma__CreatorEditorClient<runtime.Types.Result.GetResult<Prisma.$CreatorEditorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CreatorEditors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorEditorCountArgs} args - Arguments to filter CreatorEditors to count.
     * @example
     * // Count the number of CreatorEditors
     * const count = await prisma.creatorEditor.count({
     *   where: {
     *     // ... the filter for the CreatorEditors we want to count
     *   }
     * })
    **/
    count<T extends CreatorEditorCountArgs>(args?: Prisma.Subset<T, CreatorEditorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CreatorEditorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CreatorEditor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorEditorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreatorEditorAggregateArgs>(args: Prisma.Subset<T, CreatorEditorAggregateArgs>): Prisma.PrismaPromise<GetCreatorEditorAggregateType<T>>;
    /**
     * Group by CreatorEditor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorEditorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CreatorEditorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CreatorEditorGroupByArgs['orderBy'];
    } : {
        orderBy?: CreatorEditorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CreatorEditorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorEditorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CreatorEditor model
     */
    readonly fields: CreatorEditorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CreatorEditor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CreatorEditorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    editor<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the CreatorEditor model
 */
export interface CreatorEditorFieldRefs {
    readonly creatorId: Prisma.FieldRef<"CreatorEditor", 'String'>;
    readonly editorId: Prisma.FieldRef<"CreatorEditor", 'String'>;
    readonly assignedAt: Prisma.FieldRef<"CreatorEditor", 'String'>;
}
/**
 * CreatorEditor findUnique
 */
export type CreatorEditorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * Filter, which CreatorEditor to fetch.
     */
    where: Prisma.CreatorEditorWhereUniqueInput;
};
/**
 * CreatorEditor findUniqueOrThrow
 */
export type CreatorEditorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * Filter, which CreatorEditor to fetch.
     */
    where: Prisma.CreatorEditorWhereUniqueInput;
};
/**
 * CreatorEditor findFirst
 */
export type CreatorEditorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * Filter, which CreatorEditor to fetch.
     */
    where?: Prisma.CreatorEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CreatorEditors to fetch.
     */
    orderBy?: Prisma.CreatorEditorOrderByWithRelationInput | Prisma.CreatorEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CreatorEditors.
     */
    cursor?: Prisma.CreatorEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CreatorEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CreatorEditors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CreatorEditors.
     */
    distinct?: Prisma.CreatorEditorScalarFieldEnum | Prisma.CreatorEditorScalarFieldEnum[];
};
/**
 * CreatorEditor findFirstOrThrow
 */
export type CreatorEditorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * Filter, which CreatorEditor to fetch.
     */
    where?: Prisma.CreatorEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CreatorEditors to fetch.
     */
    orderBy?: Prisma.CreatorEditorOrderByWithRelationInput | Prisma.CreatorEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CreatorEditors.
     */
    cursor?: Prisma.CreatorEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CreatorEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CreatorEditors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CreatorEditors.
     */
    distinct?: Prisma.CreatorEditorScalarFieldEnum | Prisma.CreatorEditorScalarFieldEnum[];
};
/**
 * CreatorEditor findMany
 */
export type CreatorEditorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * Filter, which CreatorEditors to fetch.
     */
    where?: Prisma.CreatorEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CreatorEditors to fetch.
     */
    orderBy?: Prisma.CreatorEditorOrderByWithRelationInput | Prisma.CreatorEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CreatorEditors.
     */
    cursor?: Prisma.CreatorEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CreatorEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CreatorEditors.
     */
    skip?: number;
    distinct?: Prisma.CreatorEditorScalarFieldEnum | Prisma.CreatorEditorScalarFieldEnum[];
};
/**
 * CreatorEditor create
 */
export type CreatorEditorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * The data needed to create a CreatorEditor.
     */
    data: Prisma.XOR<Prisma.CreatorEditorCreateInput, Prisma.CreatorEditorUncheckedCreateInput>;
};
/**
 * CreatorEditor createMany
 */
export type CreatorEditorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreatorEditors.
     */
    data: Prisma.CreatorEditorCreateManyInput | Prisma.CreatorEditorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CreatorEditor createManyAndReturn
 */
export type CreatorEditorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * The data used to create many CreatorEditors.
     */
    data: Prisma.CreatorEditorCreateManyInput | Prisma.CreatorEditorCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * CreatorEditor update
 */
export type CreatorEditorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * The data needed to update a CreatorEditor.
     */
    data: Prisma.XOR<Prisma.CreatorEditorUpdateInput, Prisma.CreatorEditorUncheckedUpdateInput>;
    /**
     * Choose, which CreatorEditor to update.
     */
    where: Prisma.CreatorEditorWhereUniqueInput;
};
/**
 * CreatorEditor updateMany
 */
export type CreatorEditorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CreatorEditors.
     */
    data: Prisma.XOR<Prisma.CreatorEditorUpdateManyMutationInput, Prisma.CreatorEditorUncheckedUpdateManyInput>;
    /**
     * Filter which CreatorEditors to update
     */
    where?: Prisma.CreatorEditorWhereInput;
    /**
     * Limit how many CreatorEditors to update.
     */
    limit?: number;
};
/**
 * CreatorEditor updateManyAndReturn
 */
export type CreatorEditorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * The data used to update CreatorEditors.
     */
    data: Prisma.XOR<Prisma.CreatorEditorUpdateManyMutationInput, Prisma.CreatorEditorUncheckedUpdateManyInput>;
    /**
     * Filter which CreatorEditors to update
     */
    where?: Prisma.CreatorEditorWhereInput;
    /**
     * Limit how many CreatorEditors to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * CreatorEditor upsert
 */
export type CreatorEditorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * The filter to search for the CreatorEditor to update in case it exists.
     */
    where: Prisma.CreatorEditorWhereUniqueInput;
    /**
     * In case the CreatorEditor found by the `where` argument doesn't exist, create a new CreatorEditor with this data.
     */
    create: Prisma.XOR<Prisma.CreatorEditorCreateInput, Prisma.CreatorEditorUncheckedCreateInput>;
    /**
     * In case the CreatorEditor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CreatorEditorUpdateInput, Prisma.CreatorEditorUncheckedUpdateInput>;
};
/**
 * CreatorEditor delete
 */
export type CreatorEditorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
    /**
     * Filter which CreatorEditor to delete.
     */
    where: Prisma.CreatorEditorWhereUniqueInput;
};
/**
 * CreatorEditor deleteMany
 */
export type CreatorEditorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorEditors to delete
     */
    where?: Prisma.CreatorEditorWhereInput;
    /**
     * Limit how many CreatorEditors to delete.
     */
    limit?: number;
};
/**
 * CreatorEditor without action
 */
export type CreatorEditorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorEditor
     */
    select?: Prisma.CreatorEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CreatorEditor
     */
    omit?: Prisma.CreatorEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CreatorEditorInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=CreatorEditor.d.ts.map