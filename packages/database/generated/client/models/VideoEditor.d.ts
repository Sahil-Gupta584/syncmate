/**
 * This file exports the `VideoEditor` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model VideoEditor
 *
 */
export type VideoEditorModel = runtime.Types.Result.DefaultSelection<Prisma.$VideoEditorPayload>;
export type AggregateVideoEditor = {
    _count: VideoEditorCountAggregateOutputType | null;
    _min: VideoEditorMinAggregateOutputType | null;
    _max: VideoEditorMaxAggregateOutputType | null;
};
export type VideoEditorMinAggregateOutputType = {
    videoId: string | null;
    editorEmail: string | null;
    assignedAt: string | null;
};
export type VideoEditorMaxAggregateOutputType = {
    videoId: string | null;
    editorEmail: string | null;
    assignedAt: string | null;
};
export type VideoEditorCountAggregateOutputType = {
    videoId: number;
    editorEmail: number;
    assignedAt: number;
    _all: number;
};
export type VideoEditorMinAggregateInputType = {
    videoId?: true;
    editorEmail?: true;
    assignedAt?: true;
};
export type VideoEditorMaxAggregateInputType = {
    videoId?: true;
    editorEmail?: true;
    assignedAt?: true;
};
export type VideoEditorCountAggregateInputType = {
    videoId?: true;
    editorEmail?: true;
    assignedAt?: true;
    _all?: true;
};
export type VideoEditorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VideoEditor to aggregate.
     */
    where?: Prisma.VideoEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoEditors to fetch.
     */
    orderBy?: Prisma.VideoEditorOrderByWithRelationInput | Prisma.VideoEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.VideoEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoEditors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned VideoEditors
    **/
    _count?: true | VideoEditorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: VideoEditorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: VideoEditorMaxAggregateInputType;
};
export type GetVideoEditorAggregateType<T extends VideoEditorAggregateArgs> = {
    [P in keyof T & keyof AggregateVideoEditor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVideoEditor[P]> : Prisma.GetScalarType<T[P], AggregateVideoEditor[P]>;
};
export type VideoEditorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VideoEditorWhereInput;
    orderBy?: Prisma.VideoEditorOrderByWithAggregationInput | Prisma.VideoEditorOrderByWithAggregationInput[];
    by: Prisma.VideoEditorScalarFieldEnum[] | Prisma.VideoEditorScalarFieldEnum;
    having?: Prisma.VideoEditorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VideoEditorCountAggregateInputType | true;
    _min?: VideoEditorMinAggregateInputType;
    _max?: VideoEditorMaxAggregateInputType;
};
export type VideoEditorGroupByOutputType = {
    videoId: string;
    editorEmail: string;
    assignedAt: string;
    _count: VideoEditorCountAggregateOutputType | null;
    _min: VideoEditorMinAggregateOutputType | null;
    _max: VideoEditorMaxAggregateOutputType | null;
};
type GetVideoEditorGroupByPayload<T extends VideoEditorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VideoEditorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VideoEditorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VideoEditorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VideoEditorGroupByOutputType[P]>;
}>>;
export type VideoEditorWhereInput = {
    AND?: Prisma.VideoEditorWhereInput | Prisma.VideoEditorWhereInput[];
    OR?: Prisma.VideoEditorWhereInput[];
    NOT?: Prisma.VideoEditorWhereInput | Prisma.VideoEditorWhereInput[];
    videoId?: Prisma.StringFilter<"VideoEditor"> | string;
    editorEmail?: Prisma.StringFilter<"VideoEditor"> | string;
    assignedAt?: Prisma.StringFilter<"VideoEditor"> | string;
    video?: Prisma.XOR<Prisma.VideoScalarRelationFilter, Prisma.VideoWhereInput>;
    editor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type VideoEditorOrderByWithRelationInput = {
    videoId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    video?: Prisma.VideoOrderByWithRelationInput;
    editor?: Prisma.UserOrderByWithRelationInput;
};
export type VideoEditorWhereUniqueInput = Prisma.AtLeast<{
    videoId_editorEmail?: Prisma.VideoEditorVideoIdEditorEmailCompoundUniqueInput;
    AND?: Prisma.VideoEditorWhereInput | Prisma.VideoEditorWhereInput[];
    OR?: Prisma.VideoEditorWhereInput[];
    NOT?: Prisma.VideoEditorWhereInput | Prisma.VideoEditorWhereInput[];
    videoId?: Prisma.StringFilter<"VideoEditor"> | string;
    editorEmail?: Prisma.StringFilter<"VideoEditor"> | string;
    assignedAt?: Prisma.StringFilter<"VideoEditor"> | string;
    video?: Prisma.XOR<Prisma.VideoScalarRelationFilter, Prisma.VideoWhereInput>;
    editor?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "videoId_editorEmail">;
export type VideoEditorOrderByWithAggregationInput = {
    videoId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
    _count?: Prisma.VideoEditorCountOrderByAggregateInput;
    _max?: Prisma.VideoEditorMaxOrderByAggregateInput;
    _min?: Prisma.VideoEditorMinOrderByAggregateInput;
};
export type VideoEditorScalarWhereWithAggregatesInput = {
    AND?: Prisma.VideoEditorScalarWhereWithAggregatesInput | Prisma.VideoEditorScalarWhereWithAggregatesInput[];
    OR?: Prisma.VideoEditorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VideoEditorScalarWhereWithAggregatesInput | Prisma.VideoEditorScalarWhereWithAggregatesInput[];
    videoId?: Prisma.StringWithAggregatesFilter<"VideoEditor"> | string;
    editorEmail?: Prisma.StringWithAggregatesFilter<"VideoEditor"> | string;
    assignedAt?: Prisma.StringWithAggregatesFilter<"VideoEditor"> | string;
};
export type VideoEditorCreateInput = {
    assignedAt: string;
    video: Prisma.VideoCreateNestedOneWithoutEditorsInput;
    editor: Prisma.UserCreateNestedOneWithoutAccessibleVideosInput;
};
export type VideoEditorUncheckedCreateInput = {
    videoId: string;
    editorEmail: string;
    assignedAt: string;
};
export type VideoEditorUpdateInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
    video?: Prisma.VideoUpdateOneRequiredWithoutEditorsNestedInput;
    editor?: Prisma.UserUpdateOneRequiredWithoutAccessibleVideosNestedInput;
};
export type VideoEditorUncheckedUpdateInput = {
    videoId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoEditorCreateManyInput = {
    videoId: string;
    editorEmail: string;
    assignedAt: string;
};
export type VideoEditorUpdateManyMutationInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoEditorUncheckedUpdateManyInput = {
    videoId?: Prisma.StringFieldUpdateOperationsInput | string;
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoEditorListRelationFilter = {
    every?: Prisma.VideoEditorWhereInput;
    some?: Prisma.VideoEditorWhereInput;
    none?: Prisma.VideoEditorWhereInput;
};
export type VideoEditorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VideoEditorVideoIdEditorEmailCompoundUniqueInput = {
    videoId: string;
    editorEmail: string;
};
export type VideoEditorCountOrderByAggregateInput = {
    videoId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type VideoEditorMaxOrderByAggregateInput = {
    videoId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type VideoEditorMinOrderByAggregateInput = {
    videoId?: Prisma.SortOrder;
    editorEmail?: Prisma.SortOrder;
    assignedAt?: Prisma.SortOrder;
};
export type VideoEditorCreateNestedManyWithoutEditorInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutEditorInput, Prisma.VideoEditorUncheckedCreateWithoutEditorInput> | Prisma.VideoEditorCreateWithoutEditorInput[] | Prisma.VideoEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutEditorInput | Prisma.VideoEditorCreateOrConnectWithoutEditorInput[];
    createMany?: Prisma.VideoEditorCreateManyEditorInputEnvelope;
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
};
export type VideoEditorUncheckedCreateNestedManyWithoutEditorInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutEditorInput, Prisma.VideoEditorUncheckedCreateWithoutEditorInput> | Prisma.VideoEditorCreateWithoutEditorInput[] | Prisma.VideoEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutEditorInput | Prisma.VideoEditorCreateOrConnectWithoutEditorInput[];
    createMany?: Prisma.VideoEditorCreateManyEditorInputEnvelope;
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
};
export type VideoEditorUpdateManyWithoutEditorNestedInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutEditorInput, Prisma.VideoEditorUncheckedCreateWithoutEditorInput> | Prisma.VideoEditorCreateWithoutEditorInput[] | Prisma.VideoEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutEditorInput | Prisma.VideoEditorCreateOrConnectWithoutEditorInput[];
    upsert?: Prisma.VideoEditorUpsertWithWhereUniqueWithoutEditorInput | Prisma.VideoEditorUpsertWithWhereUniqueWithoutEditorInput[];
    createMany?: Prisma.VideoEditorCreateManyEditorInputEnvelope;
    set?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    disconnect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    delete?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    update?: Prisma.VideoEditorUpdateWithWhereUniqueWithoutEditorInput | Prisma.VideoEditorUpdateWithWhereUniqueWithoutEditorInput[];
    updateMany?: Prisma.VideoEditorUpdateManyWithWhereWithoutEditorInput | Prisma.VideoEditorUpdateManyWithWhereWithoutEditorInput[];
    deleteMany?: Prisma.VideoEditorScalarWhereInput | Prisma.VideoEditorScalarWhereInput[];
};
export type VideoEditorUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutEditorInput, Prisma.VideoEditorUncheckedCreateWithoutEditorInput> | Prisma.VideoEditorCreateWithoutEditorInput[] | Prisma.VideoEditorUncheckedCreateWithoutEditorInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutEditorInput | Prisma.VideoEditorCreateOrConnectWithoutEditorInput[];
    upsert?: Prisma.VideoEditorUpsertWithWhereUniqueWithoutEditorInput | Prisma.VideoEditorUpsertWithWhereUniqueWithoutEditorInput[];
    createMany?: Prisma.VideoEditorCreateManyEditorInputEnvelope;
    set?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    disconnect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    delete?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    update?: Prisma.VideoEditorUpdateWithWhereUniqueWithoutEditorInput | Prisma.VideoEditorUpdateWithWhereUniqueWithoutEditorInput[];
    updateMany?: Prisma.VideoEditorUpdateManyWithWhereWithoutEditorInput | Prisma.VideoEditorUpdateManyWithWhereWithoutEditorInput[];
    deleteMany?: Prisma.VideoEditorScalarWhereInput | Prisma.VideoEditorScalarWhereInput[];
};
export type VideoEditorCreateNestedManyWithoutVideoInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutVideoInput, Prisma.VideoEditorUncheckedCreateWithoutVideoInput> | Prisma.VideoEditorCreateWithoutVideoInput[] | Prisma.VideoEditorUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutVideoInput | Prisma.VideoEditorCreateOrConnectWithoutVideoInput[];
    createMany?: Prisma.VideoEditorCreateManyVideoInputEnvelope;
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
};
export type VideoEditorUncheckedCreateNestedManyWithoutVideoInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutVideoInput, Prisma.VideoEditorUncheckedCreateWithoutVideoInput> | Prisma.VideoEditorCreateWithoutVideoInput[] | Prisma.VideoEditorUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutVideoInput | Prisma.VideoEditorCreateOrConnectWithoutVideoInput[];
    createMany?: Prisma.VideoEditorCreateManyVideoInputEnvelope;
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
};
export type VideoEditorUpdateManyWithoutVideoNestedInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutVideoInput, Prisma.VideoEditorUncheckedCreateWithoutVideoInput> | Prisma.VideoEditorCreateWithoutVideoInput[] | Prisma.VideoEditorUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutVideoInput | Prisma.VideoEditorCreateOrConnectWithoutVideoInput[];
    upsert?: Prisma.VideoEditorUpsertWithWhereUniqueWithoutVideoInput | Prisma.VideoEditorUpsertWithWhereUniqueWithoutVideoInput[];
    createMany?: Prisma.VideoEditorCreateManyVideoInputEnvelope;
    set?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    disconnect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    delete?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    update?: Prisma.VideoEditorUpdateWithWhereUniqueWithoutVideoInput | Prisma.VideoEditorUpdateWithWhereUniqueWithoutVideoInput[];
    updateMany?: Prisma.VideoEditorUpdateManyWithWhereWithoutVideoInput | Prisma.VideoEditorUpdateManyWithWhereWithoutVideoInput[];
    deleteMany?: Prisma.VideoEditorScalarWhereInput | Prisma.VideoEditorScalarWhereInput[];
};
export type VideoEditorUncheckedUpdateManyWithoutVideoNestedInput = {
    create?: Prisma.XOR<Prisma.VideoEditorCreateWithoutVideoInput, Prisma.VideoEditorUncheckedCreateWithoutVideoInput> | Prisma.VideoEditorCreateWithoutVideoInput[] | Prisma.VideoEditorUncheckedCreateWithoutVideoInput[];
    connectOrCreate?: Prisma.VideoEditorCreateOrConnectWithoutVideoInput | Prisma.VideoEditorCreateOrConnectWithoutVideoInput[];
    upsert?: Prisma.VideoEditorUpsertWithWhereUniqueWithoutVideoInput | Prisma.VideoEditorUpsertWithWhereUniqueWithoutVideoInput[];
    createMany?: Prisma.VideoEditorCreateManyVideoInputEnvelope;
    set?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    disconnect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    delete?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    connect?: Prisma.VideoEditorWhereUniqueInput | Prisma.VideoEditorWhereUniqueInput[];
    update?: Prisma.VideoEditorUpdateWithWhereUniqueWithoutVideoInput | Prisma.VideoEditorUpdateWithWhereUniqueWithoutVideoInput[];
    updateMany?: Prisma.VideoEditorUpdateManyWithWhereWithoutVideoInput | Prisma.VideoEditorUpdateManyWithWhereWithoutVideoInput[];
    deleteMany?: Prisma.VideoEditorScalarWhereInput | Prisma.VideoEditorScalarWhereInput[];
};
export type VideoEditorCreateWithoutEditorInput = {
    assignedAt: string;
    video: Prisma.VideoCreateNestedOneWithoutEditorsInput;
};
export type VideoEditorUncheckedCreateWithoutEditorInput = {
    videoId: string;
    assignedAt: string;
};
export type VideoEditorCreateOrConnectWithoutEditorInput = {
    where: Prisma.VideoEditorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VideoEditorCreateWithoutEditorInput, Prisma.VideoEditorUncheckedCreateWithoutEditorInput>;
};
export type VideoEditorCreateManyEditorInputEnvelope = {
    data: Prisma.VideoEditorCreateManyEditorInput | Prisma.VideoEditorCreateManyEditorInput[];
    skipDuplicates?: boolean;
};
export type VideoEditorUpsertWithWhereUniqueWithoutEditorInput = {
    where: Prisma.VideoEditorWhereUniqueInput;
    update: Prisma.XOR<Prisma.VideoEditorUpdateWithoutEditorInput, Prisma.VideoEditorUncheckedUpdateWithoutEditorInput>;
    create: Prisma.XOR<Prisma.VideoEditorCreateWithoutEditorInput, Prisma.VideoEditorUncheckedCreateWithoutEditorInput>;
};
export type VideoEditorUpdateWithWhereUniqueWithoutEditorInput = {
    where: Prisma.VideoEditorWhereUniqueInput;
    data: Prisma.XOR<Prisma.VideoEditorUpdateWithoutEditorInput, Prisma.VideoEditorUncheckedUpdateWithoutEditorInput>;
};
export type VideoEditorUpdateManyWithWhereWithoutEditorInput = {
    where: Prisma.VideoEditorScalarWhereInput;
    data: Prisma.XOR<Prisma.VideoEditorUpdateManyMutationInput, Prisma.VideoEditorUncheckedUpdateManyWithoutEditorInput>;
};
export type VideoEditorScalarWhereInput = {
    AND?: Prisma.VideoEditorScalarWhereInput | Prisma.VideoEditorScalarWhereInput[];
    OR?: Prisma.VideoEditorScalarWhereInput[];
    NOT?: Prisma.VideoEditorScalarWhereInput | Prisma.VideoEditorScalarWhereInput[];
    videoId?: Prisma.StringFilter<"VideoEditor"> | string;
    editorEmail?: Prisma.StringFilter<"VideoEditor"> | string;
    assignedAt?: Prisma.StringFilter<"VideoEditor"> | string;
};
export type VideoEditorCreateWithoutVideoInput = {
    assignedAt: string;
    editor: Prisma.UserCreateNestedOneWithoutAccessibleVideosInput;
};
export type VideoEditorUncheckedCreateWithoutVideoInput = {
    editorEmail: string;
    assignedAt: string;
};
export type VideoEditorCreateOrConnectWithoutVideoInput = {
    where: Prisma.VideoEditorWhereUniqueInput;
    create: Prisma.XOR<Prisma.VideoEditorCreateWithoutVideoInput, Prisma.VideoEditorUncheckedCreateWithoutVideoInput>;
};
export type VideoEditorCreateManyVideoInputEnvelope = {
    data: Prisma.VideoEditorCreateManyVideoInput | Prisma.VideoEditorCreateManyVideoInput[];
    skipDuplicates?: boolean;
};
export type VideoEditorUpsertWithWhereUniqueWithoutVideoInput = {
    where: Prisma.VideoEditorWhereUniqueInput;
    update: Prisma.XOR<Prisma.VideoEditorUpdateWithoutVideoInput, Prisma.VideoEditorUncheckedUpdateWithoutVideoInput>;
    create: Prisma.XOR<Prisma.VideoEditorCreateWithoutVideoInput, Prisma.VideoEditorUncheckedCreateWithoutVideoInput>;
};
export type VideoEditorUpdateWithWhereUniqueWithoutVideoInput = {
    where: Prisma.VideoEditorWhereUniqueInput;
    data: Prisma.XOR<Prisma.VideoEditorUpdateWithoutVideoInput, Prisma.VideoEditorUncheckedUpdateWithoutVideoInput>;
};
export type VideoEditorUpdateManyWithWhereWithoutVideoInput = {
    where: Prisma.VideoEditorScalarWhereInput;
    data: Prisma.XOR<Prisma.VideoEditorUpdateManyMutationInput, Prisma.VideoEditorUncheckedUpdateManyWithoutVideoInput>;
};
export type VideoEditorCreateManyEditorInput = {
    videoId: string;
    assignedAt: string;
};
export type VideoEditorUpdateWithoutEditorInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
    video?: Prisma.VideoUpdateOneRequiredWithoutEditorsNestedInput;
};
export type VideoEditorUncheckedUpdateWithoutEditorInput = {
    videoId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoEditorUncheckedUpdateManyWithoutEditorInput = {
    videoId?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoEditorCreateManyVideoInput = {
    editorEmail: string;
    assignedAt: string;
};
export type VideoEditorUpdateWithoutVideoInput = {
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
    editor?: Prisma.UserUpdateOneRequiredWithoutAccessibleVideosNestedInput;
};
export type VideoEditorUncheckedUpdateWithoutVideoInput = {
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoEditorUncheckedUpdateManyWithoutVideoInput = {
    editorEmail?: Prisma.StringFieldUpdateOperationsInput | string;
    assignedAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoEditorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    videoId?: boolean;
    editorEmail?: boolean;
    assignedAt?: boolean;
    video?: boolean | Prisma.VideoDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["videoEditor"]>;
export type VideoEditorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    videoId?: boolean;
    editorEmail?: boolean;
    assignedAt?: boolean;
    video?: boolean | Prisma.VideoDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["videoEditor"]>;
export type VideoEditorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    videoId?: boolean;
    editorEmail?: boolean;
    assignedAt?: boolean;
    video?: boolean | Prisma.VideoDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["videoEditor"]>;
export type VideoEditorSelectScalar = {
    videoId?: boolean;
    editorEmail?: boolean;
    assignedAt?: boolean;
};
export type VideoEditorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"videoId" | "editorEmail" | "assignedAt", ExtArgs["result"]["videoEditor"]>;
export type VideoEditorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    video?: boolean | Prisma.VideoDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VideoEditorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    video?: boolean | Prisma.VideoDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type VideoEditorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    video?: boolean | Prisma.VideoDefaultArgs<ExtArgs>;
    editor?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $VideoEditorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "VideoEditor";
    objects: {
        video: Prisma.$VideoPayload<ExtArgs>;
        editor: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        videoId: string;
        editorEmail: string;
        assignedAt: string;
    }, ExtArgs["result"]["videoEditor"]>;
    composites: {};
};
export type VideoEditorGetPayload<S extends boolean | null | undefined | VideoEditorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload, S>;
export type VideoEditorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VideoEditorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VideoEditorCountAggregateInputType | true;
};
export interface VideoEditorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['VideoEditor'];
        meta: {
            name: 'VideoEditor';
        };
    };
    /**
     * Find zero or one VideoEditor that matches the filter.
     * @param {VideoEditorFindUniqueArgs} args - Arguments to find a VideoEditor
     * @example
     * // Get one VideoEditor
     * const videoEditor = await prisma.videoEditor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoEditorFindUniqueArgs>(args: Prisma.SelectSubset<T, VideoEditorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one VideoEditor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoEditorFindUniqueOrThrowArgs} args - Arguments to find a VideoEditor
     * @example
     * // Get one VideoEditor
     * const videoEditor = await prisma.videoEditor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoEditorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VideoEditorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VideoEditor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoEditorFindFirstArgs} args - Arguments to find a VideoEditor
     * @example
     * // Get one VideoEditor
     * const videoEditor = await prisma.videoEditor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoEditorFindFirstArgs>(args?: Prisma.SelectSubset<T, VideoEditorFindFirstArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first VideoEditor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoEditorFindFirstOrThrowArgs} args - Arguments to find a VideoEditor
     * @example
     * // Get one VideoEditor
     * const videoEditor = await prisma.videoEditor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoEditorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VideoEditorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more VideoEditors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoEditorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoEditors
     * const videoEditors = await prisma.videoEditor.findMany()
     *
     * // Get first 10 VideoEditors
     * const videoEditors = await prisma.videoEditor.findMany({ take: 10 })
     *
     * // Only select the `videoId`
     * const videoEditorWithVideoIdOnly = await prisma.videoEditor.findMany({ select: { videoId: true } })
     *
     */
    findMany<T extends VideoEditorFindManyArgs>(args?: Prisma.SelectSubset<T, VideoEditorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a VideoEditor.
     * @param {VideoEditorCreateArgs} args - Arguments to create a VideoEditor.
     * @example
     * // Create one VideoEditor
     * const VideoEditor = await prisma.videoEditor.create({
     *   data: {
     *     // ... data to create a VideoEditor
     *   }
     * })
     *
     */
    create<T extends VideoEditorCreateArgs>(args: Prisma.SelectSubset<T, VideoEditorCreateArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many VideoEditors.
     * @param {VideoEditorCreateManyArgs} args - Arguments to create many VideoEditors.
     * @example
     * // Create many VideoEditors
     * const videoEditor = await prisma.videoEditor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends VideoEditorCreateManyArgs>(args?: Prisma.SelectSubset<T, VideoEditorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many VideoEditors and returns the data saved in the database.
     * @param {VideoEditorCreateManyAndReturnArgs} args - Arguments to create many VideoEditors.
     * @example
     * // Create many VideoEditors
     * const videoEditor = await prisma.videoEditor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many VideoEditors and only return the `videoId`
     * const videoEditorWithVideoIdOnly = await prisma.videoEditor.createManyAndReturn({
     *   select: { videoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends VideoEditorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VideoEditorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a VideoEditor.
     * @param {VideoEditorDeleteArgs} args - Arguments to delete one VideoEditor.
     * @example
     * // Delete one VideoEditor
     * const VideoEditor = await prisma.videoEditor.delete({
     *   where: {
     *     // ... filter to delete one VideoEditor
     *   }
     * })
     *
     */
    delete<T extends VideoEditorDeleteArgs>(args: Prisma.SelectSubset<T, VideoEditorDeleteArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one VideoEditor.
     * @param {VideoEditorUpdateArgs} args - Arguments to update one VideoEditor.
     * @example
     * // Update one VideoEditor
     * const videoEditor = await prisma.videoEditor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends VideoEditorUpdateArgs>(args: Prisma.SelectSubset<T, VideoEditorUpdateArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more VideoEditors.
     * @param {VideoEditorDeleteManyArgs} args - Arguments to filter VideoEditors to delete.
     * @example
     * // Delete a few VideoEditors
     * const { count } = await prisma.videoEditor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends VideoEditorDeleteManyArgs>(args?: Prisma.SelectSubset<T, VideoEditorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VideoEditors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoEditorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoEditors
     * const videoEditor = await prisma.videoEditor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends VideoEditorUpdateManyArgs>(args: Prisma.SelectSubset<T, VideoEditorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more VideoEditors and returns the data updated in the database.
     * @param {VideoEditorUpdateManyAndReturnArgs} args - Arguments to update many VideoEditors.
     * @example
     * // Update many VideoEditors
     * const videoEditor = await prisma.videoEditor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more VideoEditors and only return the `videoId`
     * const videoEditorWithVideoIdOnly = await prisma.videoEditor.updateManyAndReturn({
     *   select: { videoId: true },
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
    updateManyAndReturn<T extends VideoEditorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VideoEditorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one VideoEditor.
     * @param {VideoEditorUpsertArgs} args - Arguments to update or create a VideoEditor.
     * @example
     * // Update or create a VideoEditor
     * const videoEditor = await prisma.videoEditor.upsert({
     *   create: {
     *     // ... data to create a VideoEditor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoEditor we want to update
     *   }
     * })
     */
    upsert<T extends VideoEditorUpsertArgs>(args: Prisma.SelectSubset<T, VideoEditorUpsertArgs<ExtArgs>>): Prisma.Prisma__VideoEditorClient<runtime.Types.Result.GetResult<Prisma.$VideoEditorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of VideoEditors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoEditorCountArgs} args - Arguments to filter VideoEditors to count.
     * @example
     * // Count the number of VideoEditors
     * const count = await prisma.videoEditor.count({
     *   where: {
     *     // ... the filter for the VideoEditors we want to count
     *   }
     * })
    **/
    count<T extends VideoEditorCountArgs>(args?: Prisma.Subset<T, VideoEditorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VideoEditorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a VideoEditor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoEditorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VideoEditorAggregateArgs>(args: Prisma.Subset<T, VideoEditorAggregateArgs>): Prisma.PrismaPromise<GetVideoEditorAggregateType<T>>;
    /**
     * Group by VideoEditor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoEditorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends VideoEditorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VideoEditorGroupByArgs['orderBy'];
    } : {
        orderBy?: VideoEditorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VideoEditorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoEditorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the VideoEditor model
     */
    readonly fields: VideoEditorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for VideoEditor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VideoEditorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    video<T extends Prisma.VideoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VideoDefaultArgs<ExtArgs>>): Prisma.Prisma__VideoClient<runtime.Types.Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the VideoEditor model
 */
export interface VideoEditorFieldRefs {
    readonly videoId: Prisma.FieldRef<"VideoEditor", 'String'>;
    readonly editorEmail: Prisma.FieldRef<"VideoEditor", 'String'>;
    readonly assignedAt: Prisma.FieldRef<"VideoEditor", 'String'>;
}
/**
 * VideoEditor findUnique
 */
export type VideoEditorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * Filter, which VideoEditor to fetch.
     */
    where: Prisma.VideoEditorWhereUniqueInput;
};
/**
 * VideoEditor findUniqueOrThrow
 */
export type VideoEditorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * Filter, which VideoEditor to fetch.
     */
    where: Prisma.VideoEditorWhereUniqueInput;
};
/**
 * VideoEditor findFirst
 */
export type VideoEditorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * Filter, which VideoEditor to fetch.
     */
    where?: Prisma.VideoEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoEditors to fetch.
     */
    orderBy?: Prisma.VideoEditorOrderByWithRelationInput | Prisma.VideoEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VideoEditors.
     */
    cursor?: Prisma.VideoEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoEditors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VideoEditors.
     */
    distinct?: Prisma.VideoEditorScalarFieldEnum | Prisma.VideoEditorScalarFieldEnum[];
};
/**
 * VideoEditor findFirstOrThrow
 */
export type VideoEditorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * Filter, which VideoEditor to fetch.
     */
    where?: Prisma.VideoEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoEditors to fetch.
     */
    orderBy?: Prisma.VideoEditorOrderByWithRelationInput | Prisma.VideoEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for VideoEditors.
     */
    cursor?: Prisma.VideoEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoEditors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of VideoEditors.
     */
    distinct?: Prisma.VideoEditorScalarFieldEnum | Prisma.VideoEditorScalarFieldEnum[];
};
/**
 * VideoEditor findMany
 */
export type VideoEditorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * Filter, which VideoEditors to fetch.
     */
    where?: Prisma.VideoEditorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of VideoEditors to fetch.
     */
    orderBy?: Prisma.VideoEditorOrderByWithRelationInput | Prisma.VideoEditorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing VideoEditors.
     */
    cursor?: Prisma.VideoEditorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` VideoEditors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` VideoEditors.
     */
    skip?: number;
    distinct?: Prisma.VideoEditorScalarFieldEnum | Prisma.VideoEditorScalarFieldEnum[];
};
/**
 * VideoEditor create
 */
export type VideoEditorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * The data needed to create a VideoEditor.
     */
    data: Prisma.XOR<Prisma.VideoEditorCreateInput, Prisma.VideoEditorUncheckedCreateInput>;
};
/**
 * VideoEditor createMany
 */
export type VideoEditorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoEditors.
     */
    data: Prisma.VideoEditorCreateManyInput | Prisma.VideoEditorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * VideoEditor createManyAndReturn
 */
export type VideoEditorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * The data used to create many VideoEditors.
     */
    data: Prisma.VideoEditorCreateManyInput | Prisma.VideoEditorCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * VideoEditor update
 */
export type VideoEditorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * The data needed to update a VideoEditor.
     */
    data: Prisma.XOR<Prisma.VideoEditorUpdateInput, Prisma.VideoEditorUncheckedUpdateInput>;
    /**
     * Choose, which VideoEditor to update.
     */
    where: Prisma.VideoEditorWhereUniqueInput;
};
/**
 * VideoEditor updateMany
 */
export type VideoEditorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoEditors.
     */
    data: Prisma.XOR<Prisma.VideoEditorUpdateManyMutationInput, Prisma.VideoEditorUncheckedUpdateManyInput>;
    /**
     * Filter which VideoEditors to update
     */
    where?: Prisma.VideoEditorWhereInput;
    /**
     * Limit how many VideoEditors to update.
     */
    limit?: number;
};
/**
 * VideoEditor updateManyAndReturn
 */
export type VideoEditorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * The data used to update VideoEditors.
     */
    data: Prisma.XOR<Prisma.VideoEditorUpdateManyMutationInput, Prisma.VideoEditorUncheckedUpdateManyInput>;
    /**
     * Filter which VideoEditors to update
     */
    where?: Prisma.VideoEditorWhereInput;
    /**
     * Limit how many VideoEditors to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * VideoEditor upsert
 */
export type VideoEditorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * The filter to search for the VideoEditor to update in case it exists.
     */
    where: Prisma.VideoEditorWhereUniqueInput;
    /**
     * In case the VideoEditor found by the `where` argument doesn't exist, create a new VideoEditor with this data.
     */
    create: Prisma.XOR<Prisma.VideoEditorCreateInput, Prisma.VideoEditorUncheckedCreateInput>;
    /**
     * In case the VideoEditor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.VideoEditorUpdateInput, Prisma.VideoEditorUncheckedUpdateInput>;
};
/**
 * VideoEditor delete
 */
export type VideoEditorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
    /**
     * Filter which VideoEditor to delete.
     */
    where: Prisma.VideoEditorWhereUniqueInput;
};
/**
 * VideoEditor deleteMany
 */
export type VideoEditorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which VideoEditors to delete
     */
    where?: Prisma.VideoEditorWhereInput;
    /**
     * Limit how many VideoEditors to delete.
     */
    limit?: number;
};
/**
 * VideoEditor without action
 */
export type VideoEditorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoEditor
     */
    select?: Prisma.VideoEditorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the VideoEditor
     */
    omit?: Prisma.VideoEditorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.VideoEditorInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=VideoEditor.d.ts.map