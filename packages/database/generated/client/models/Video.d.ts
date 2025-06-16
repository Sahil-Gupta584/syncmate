/**
 * This file exports the `Video` model and its related types.
 *
 * 🟢 You can import this file directly.
 */
import * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Video
 *
 */
export type VideoModel =
  runtime.Types.Result.DefaultSelection<Prisma.$VideoPayload>;
export type AggregateVideo = {
  _count: VideoCountAggregateOutputType | null;
  _avg: VideoAvgAggregateOutputType | null;
  _sum: VideoSumAggregateOutputType | null;
  _min: VideoMinAggregateOutputType | null;
  _max: VideoMaxAggregateOutputType | null;
};
export type VideoAvgAggregateOutputType = {
  duration: number | null;
  scheduledAt: number | null;
};
export type VideoSumAggregateOutputType = {
  duration: number | null;
  scheduledAt: number | null;
};
export type VideoMinAggregateOutputType = {
  id: string | null;
  gDriveId: string | null;
  title: string | null;
  description: string | null;
  duration: number | null;
  thumbnailUrl: string | null;
  scheduledAt: number | null;
  videoStatus: $Enums.VideoStatus | null;
  privacyStatus: $Enums.PrivacyStatus | null;
  tags: string | null;
  categoryId: string | null;
  ownerId: string | null;
  importedById: string | null;
  channelId: string | null;
  createdAt: string | null;
};
export type VideoMaxAggregateOutputType = {
  id: string | null;
  gDriveId: string | null;
  title: string | null;
  description: string | null;
  duration: number | null;
  thumbnailUrl: string | null;
  scheduledAt: number | null;
  videoStatus: $Enums.VideoStatus | null;
  privacyStatus: $Enums.PrivacyStatus | null;
  tags: string | null;
  categoryId: string | null;
  ownerId: string | null;
  importedById: string | null;
  channelId: string | null;
  createdAt: string | null;
};
export type VideoCountAggregateOutputType = {
  id: number;
  gDriveId: number;
  title: number;
  description: number;
  duration: number;
  thumbnailUrl: number;
  scheduledAt: number;
  videoStatus: number;
  privacyStatus: number;
  playlistIds: number;
  tags: number;
  categoryId: number;
  ownerId: number;
  importedById: number;
  channelId: number;
  createdAt: number;
  _all: number;
};
export type VideoAvgAggregateInputType = {
  duration?: true;
  scheduledAt?: true;
};
export type VideoSumAggregateInputType = {
  duration?: true;
  scheduledAt?: true;
};
export type VideoMinAggregateInputType = {
  id?: true;
  gDriveId?: true;
  title?: true;
  description?: true;
  duration?: true;
  thumbnailUrl?: true;
  scheduledAt?: true;
  videoStatus?: true;
  privacyStatus?: true;
  tags?: true;
  categoryId?: true;
  ownerId?: true;
  importedById?: true;
  channelId?: true;
  createdAt?: true;
};
export type VideoMaxAggregateInputType = {
  id?: true;
  gDriveId?: true;
  title?: true;
  description?: true;
  duration?: true;
  thumbnailUrl?: true;
  scheduledAt?: true;
  videoStatus?: true;
  privacyStatus?: true;
  tags?: true;
  categoryId?: true;
  ownerId?: true;
  importedById?: true;
  channelId?: true;
  createdAt?: true;
};
export type VideoCountAggregateInputType = {
  id?: true;
  gDriveId?: true;
  title?: true;
  description?: true;
  duration?: true;
  thumbnailUrl?: true;
  scheduledAt?: true;
  videoStatus?: true;
  privacyStatus?: true;
  playlistIds?: true;
  tags?: true;
  categoryId?: true;
  ownerId?: true;
  importedById?: true;
  channelId?: true;
  createdAt?: true;
  _all?: true;
};
export type VideoAggregateArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Filter which Video to aggregate.
   */
  where?: Prisma.VideoWhereInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   *
   * Determine the order of Videos to fetch.
   */
  orderBy?:
    | Prisma.VideoOrderByWithRelationInput
    | Prisma.VideoOrderByWithRelationInput[];
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   *
   * Sets the start position
   */
  cursor?: Prisma.VideoWhereUniqueInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Take `±n` Videos from the position of the cursor.
   */
  take?: number;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Skip the first `n` Videos.
   */
  skip?: number;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   *
   * Count returned Videos
   **/
  _count?: true | VideoCountAggregateInputType;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   *
   * Select which fields to average
   **/
  _avg?: VideoAvgAggregateInputType;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   *
   * Select which fields to sum
   **/
  _sum?: VideoSumAggregateInputType;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   *
   * Select which fields to find the minimum value
   **/
  _min?: VideoMinAggregateInputType;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
   *
   * Select which fields to find the maximum value
   **/
  _max?: VideoMaxAggregateInputType;
};
export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
  [P in keyof T & keyof AggregateVideo]: P extends "_count" | "count"
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateVideo[P]>
    : Prisma.GetScalarType<T[P], AggregateVideo[P]>;
};
export type VideoGroupByArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.VideoWhereInput;
  orderBy?:
    | Prisma.VideoOrderByWithAggregationInput
    | Prisma.VideoOrderByWithAggregationInput[];
  by: Prisma.VideoScalarFieldEnum[] | Prisma.VideoScalarFieldEnum;
  having?: Prisma.VideoScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
  _count?: VideoCountAggregateInputType | true;
  _avg?: VideoAvgAggregateInputType;
  _sum?: VideoSumAggregateInputType;
  _min?: VideoMinAggregateInputType;
  _max?: VideoMaxAggregateInputType;
};
export type VideoGroupByOutputType = {
  id: string;
  gDriveId: string;
  title: string | null;
  description: string | null;
  duration: number;
  thumbnailUrl: string | null;
  scheduledAt: number | null;
  videoStatus: $Enums.VideoStatus;
  privacyStatus: $Enums.PrivacyStatus;
  playlistIds: string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  importedById: string;
  channelId: string | null;
  createdAt: string;
  _count: VideoCountAggregateOutputType | null;
  _avg: VideoAvgAggregateOutputType | null;
  _sum: VideoSumAggregateOutputType | null;
  _min: VideoMinAggregateOutputType | null;
  _max: VideoMaxAggregateOutputType | null;
};
type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<VideoGroupByOutputType, T["by"]> & {
      [P in keyof T & keyof VideoGroupByOutputType]: P extends "_count"
        ? T[P] extends boolean
          ? number
          : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]>
        : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]>;
    }
  >
>;
export type VideoWhereInput = {
  AND?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
  OR?: Prisma.VideoWhereInput[];
  NOT?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
  id?: Prisma.StringFilter<"Video"> | string;
  gDriveId?: Prisma.StringFilter<"Video"> | string;
  title?: Prisma.StringNullableFilter<"Video"> | string | null;
  description?: Prisma.StringNullableFilter<"Video"> | string | null;
  duration?: Prisma.IntFilter<"Video"> | number;
  thumbnailUrl?: Prisma.StringNullableFilter<"Video"> | string | null;
  scheduledAt?: Prisma.IntNullableFilter<"Video"> | number | null;
  videoStatus?: Prisma.EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFilter<"Video">
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.StringNullableListFilter<"Video">;
  tags?: Prisma.StringFilter<"Video"> | string;
  categoryId?: Prisma.StringFilter<"Video"> | string;
  ownerId?: Prisma.StringFilter<"Video"> | string;
  importedById?: Prisma.StringFilter<"Video"> | string;
  channelId?: Prisma.StringNullableFilter<"Video"> | string | null;
  createdAt?: Prisma.StringFilter<"Video"> | string;
  owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
  importedBy?: Prisma.XOR<
    Prisma.UserScalarRelationFilter,
    Prisma.UserWhereInput
  >;
  editors?: Prisma.VideoEditorListRelationFilter;
  channel?: Prisma.XOR<
    Prisma.ChannelNullableScalarRelationFilter,
    Prisma.ChannelWhereInput
  > | null;
};
export type VideoOrderByWithRelationInput = {
  id?: Prisma.SortOrder;
  gDriveId?: Prisma.SortOrder;
  title?: Prisma.SortOrderInput | Prisma.SortOrder;
  description?: Prisma.SortOrderInput | Prisma.SortOrder;
  duration?: Prisma.SortOrder;
  thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
  scheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
  videoStatus?: Prisma.SortOrder;
  privacyStatus?: Prisma.SortOrder;
  playlistIds?: Prisma.SortOrder;
  tags?: Prisma.SortOrder;
  categoryId?: Prisma.SortOrder;
  ownerId?: Prisma.SortOrder;
  importedById?: Prisma.SortOrder;
  channelId?: Prisma.SortOrderInput | Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  owner?: Prisma.UserOrderByWithRelationInput;
  importedBy?: Prisma.UserOrderByWithRelationInput;
  editors?: Prisma.VideoEditorOrderByRelationAggregateInput;
  channel?: Prisma.ChannelOrderByWithRelationInput;
};
export type VideoWhereUniqueInput = Prisma.AtLeast<
  {
    id?: string;
    AND?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    OR?: Prisma.VideoWhereInput[];
    NOT?: Prisma.VideoWhereInput | Prisma.VideoWhereInput[];
    gDriveId?: Prisma.StringFilter<"Video"> | string;
    title?: Prisma.StringNullableFilter<"Video"> | string | null;
    description?: Prisma.StringNullableFilter<"Video"> | string | null;
    duration?: Prisma.IntFilter<"Video"> | number;
    thumbnailUrl?: Prisma.StringNullableFilter<"Video"> | string | null;
    scheduledAt?: Prisma.IntNullableFilter<"Video"> | number | null;
    videoStatus?: Prisma.EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus;
    privacyStatus?:
      | Prisma.EnumPrivacyStatusFilter<"Video">
      | $Enums.PrivacyStatus;
    playlistIds?: Prisma.StringNullableListFilter<"Video">;
    tags?: Prisma.StringFilter<"Video"> | string;
    categoryId?: Prisma.StringFilter<"Video"> | string;
    ownerId?: Prisma.StringFilter<"Video"> | string;
    importedById?: Prisma.StringFilter<"Video"> | string;
    channelId?: Prisma.StringNullableFilter<"Video"> | string | null;
    createdAt?: Prisma.StringFilter<"Video"> | string;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    importedBy?: Prisma.XOR<
      Prisma.UserScalarRelationFilter,
      Prisma.UserWhereInput
    >;
    editors?: Prisma.VideoEditorListRelationFilter;
    channel?: Prisma.XOR<
      Prisma.ChannelNullableScalarRelationFilter,
      Prisma.ChannelWhereInput
    > | null;
  },
  "id"
>;
export type VideoOrderByWithAggregationInput = {
  id?: Prisma.SortOrder;
  gDriveId?: Prisma.SortOrder;
  title?: Prisma.SortOrderInput | Prisma.SortOrder;
  description?: Prisma.SortOrderInput | Prisma.SortOrder;
  duration?: Prisma.SortOrder;
  thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
  scheduledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
  videoStatus?: Prisma.SortOrder;
  privacyStatus?: Prisma.SortOrder;
  playlistIds?: Prisma.SortOrder;
  tags?: Prisma.SortOrder;
  categoryId?: Prisma.SortOrder;
  ownerId?: Prisma.SortOrder;
  importedById?: Prisma.SortOrder;
  channelId?: Prisma.SortOrderInput | Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  _count?: Prisma.VideoCountOrderByAggregateInput;
  _avg?: Prisma.VideoAvgOrderByAggregateInput;
  _max?: Prisma.VideoMaxOrderByAggregateInput;
  _min?: Prisma.VideoMinOrderByAggregateInput;
  _sum?: Prisma.VideoSumOrderByAggregateInput;
};
export type VideoScalarWhereWithAggregatesInput = {
  AND?:
    | Prisma.VideoScalarWhereWithAggregatesInput
    | Prisma.VideoScalarWhereWithAggregatesInput[];
  OR?: Prisma.VideoScalarWhereWithAggregatesInput[];
  NOT?:
    | Prisma.VideoScalarWhereWithAggregatesInput
    | Prisma.VideoScalarWhereWithAggregatesInput[];
  id?: Prisma.StringWithAggregatesFilter<"Video"> | string;
  gDriveId?: Prisma.StringWithAggregatesFilter<"Video"> | string;
  title?: Prisma.StringNullableWithAggregatesFilter<"Video"> | string | null;
  description?:
    | Prisma.StringNullableWithAggregatesFilter<"Video">
    | string
    | null;
  duration?: Prisma.IntWithAggregatesFilter<"Video"> | number;
  thumbnailUrl?:
    | Prisma.StringNullableWithAggregatesFilter<"Video">
    | string
    | null;
  scheduledAt?: Prisma.IntNullableWithAggregatesFilter<"Video"> | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusWithAggregatesFilter<"Video">
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusWithAggregatesFilter<"Video">
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.StringNullableListFilter<"Video">;
  tags?: Prisma.StringWithAggregatesFilter<"Video"> | string;
  categoryId?: Prisma.StringWithAggregatesFilter<"Video"> | string;
  ownerId?: Prisma.StringWithAggregatesFilter<"Video"> | string;
  importedById?: Prisma.StringWithAggregatesFilter<"Video"> | string;
  channelId?:
    | Prisma.StringNullableWithAggregatesFilter<"Video">
    | string
    | null;
  createdAt?: Prisma.StringWithAggregatesFilter<"Video"> | string;
};
export type VideoCreateInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  createdAt: string;
  owner: Prisma.UserCreateNestedOneWithoutOwnedVideosInput;
  importedBy: Prisma.UserCreateNestedOneWithoutImportedVideosInput;
  editors?: Prisma.VideoEditorCreateNestedManyWithoutVideoInput;
  channel?: Prisma.ChannelCreateNestedOneWithoutVideoInput;
};
export type VideoUncheckedCreateInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  importedById: string;
  channelId?: string | null;
  createdAt: string;
  editors?: Prisma.VideoEditorUncheckedCreateNestedManyWithoutVideoInput;
};
export type VideoUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  owner?: Prisma.UserUpdateOneRequiredWithoutOwnedVideosNestedInput;
  importedBy?: Prisma.UserUpdateOneRequiredWithoutImportedVideosNestedInput;
  editors?: Prisma.VideoEditorUpdateManyWithoutVideoNestedInput;
  channel?: Prisma.ChannelUpdateOneWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
  importedById?: Prisma.StringFieldUpdateOperationsInput | string;
  channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  editors?: Prisma.VideoEditorUncheckedUpdateManyWithoutVideoNestedInput;
};
export type VideoCreateManyInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  importedById: string;
  channelId?: string | null;
  createdAt: string;
};
export type VideoUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
  importedById?: Prisma.StringFieldUpdateOperationsInput | string;
  channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoListRelationFilter = {
  every?: Prisma.VideoWhereInput;
  some?: Prisma.VideoWhereInput;
  none?: Prisma.VideoWhereInput;
};
export type VideoOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
  equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
  has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
  hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
  hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
  isEmpty?: boolean;
};
export type VideoCountOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  gDriveId?: Prisma.SortOrder;
  title?: Prisma.SortOrder;
  description?: Prisma.SortOrder;
  duration?: Prisma.SortOrder;
  thumbnailUrl?: Prisma.SortOrder;
  scheduledAt?: Prisma.SortOrder;
  videoStatus?: Prisma.SortOrder;
  privacyStatus?: Prisma.SortOrder;
  playlistIds?: Prisma.SortOrder;
  tags?: Prisma.SortOrder;
  categoryId?: Prisma.SortOrder;
  ownerId?: Prisma.SortOrder;
  importedById?: Prisma.SortOrder;
  channelId?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
};
export type VideoAvgOrderByAggregateInput = {
  duration?: Prisma.SortOrder;
  scheduledAt?: Prisma.SortOrder;
};
export type VideoMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  gDriveId?: Prisma.SortOrder;
  title?: Prisma.SortOrder;
  description?: Prisma.SortOrder;
  duration?: Prisma.SortOrder;
  thumbnailUrl?: Prisma.SortOrder;
  scheduledAt?: Prisma.SortOrder;
  videoStatus?: Prisma.SortOrder;
  privacyStatus?: Prisma.SortOrder;
  tags?: Prisma.SortOrder;
  categoryId?: Prisma.SortOrder;
  ownerId?: Prisma.SortOrder;
  importedById?: Prisma.SortOrder;
  channelId?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
};
export type VideoMinOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  gDriveId?: Prisma.SortOrder;
  title?: Prisma.SortOrder;
  description?: Prisma.SortOrder;
  duration?: Prisma.SortOrder;
  thumbnailUrl?: Prisma.SortOrder;
  scheduledAt?: Prisma.SortOrder;
  videoStatus?: Prisma.SortOrder;
  privacyStatus?: Prisma.SortOrder;
  tags?: Prisma.SortOrder;
  categoryId?: Prisma.SortOrder;
  ownerId?: Prisma.SortOrder;
  importedById?: Prisma.SortOrder;
  channelId?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
};
export type VideoSumOrderByAggregateInput = {
  duration?: Prisma.SortOrder;
  scheduledAt?: Prisma.SortOrder;
};
export type VideoScalarRelationFilter = {
  is?: Prisma.VideoWhereInput;
  isNot?: Prisma.VideoWhereInput;
};
export type VideoCreateNestedManyWithoutOwnerInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutOwnerInput,
        Prisma.VideoUncheckedCreateWithoutOwnerInput
      >
    | Prisma.VideoCreateWithoutOwnerInput[]
    | Prisma.VideoUncheckedCreateWithoutOwnerInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutOwnerInput
    | Prisma.VideoCreateOrConnectWithoutOwnerInput[];
  createMany?: Prisma.VideoCreateManyOwnerInputEnvelope;
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoCreateNestedManyWithoutImportedByInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutImportedByInput,
        Prisma.VideoUncheckedCreateWithoutImportedByInput
      >
    | Prisma.VideoCreateWithoutImportedByInput[]
    | Prisma.VideoUncheckedCreateWithoutImportedByInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutImportedByInput
    | Prisma.VideoCreateOrConnectWithoutImportedByInput[];
  createMany?: Prisma.VideoCreateManyImportedByInputEnvelope;
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUncheckedCreateNestedManyWithoutOwnerInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutOwnerInput,
        Prisma.VideoUncheckedCreateWithoutOwnerInput
      >
    | Prisma.VideoCreateWithoutOwnerInput[]
    | Prisma.VideoUncheckedCreateWithoutOwnerInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutOwnerInput
    | Prisma.VideoCreateOrConnectWithoutOwnerInput[];
  createMany?: Prisma.VideoCreateManyOwnerInputEnvelope;
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUncheckedCreateNestedManyWithoutImportedByInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutImportedByInput,
        Prisma.VideoUncheckedCreateWithoutImportedByInput
      >
    | Prisma.VideoCreateWithoutImportedByInput[]
    | Prisma.VideoUncheckedCreateWithoutImportedByInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutImportedByInput
    | Prisma.VideoCreateOrConnectWithoutImportedByInput[];
  createMany?: Prisma.VideoCreateManyImportedByInputEnvelope;
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUpdateManyWithoutOwnerNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutOwnerInput,
        Prisma.VideoUncheckedCreateWithoutOwnerInput
      >
    | Prisma.VideoCreateWithoutOwnerInput[]
    | Prisma.VideoUncheckedCreateWithoutOwnerInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutOwnerInput
    | Prisma.VideoCreateOrConnectWithoutOwnerInput[];
  upsert?:
    | Prisma.VideoUpsertWithWhereUniqueWithoutOwnerInput
    | Prisma.VideoUpsertWithWhereUniqueWithoutOwnerInput[];
  createMany?: Prisma.VideoCreateManyOwnerInputEnvelope;
  set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  update?:
    | Prisma.VideoUpdateWithWhereUniqueWithoutOwnerInput
    | Prisma.VideoUpdateWithWhereUniqueWithoutOwnerInput[];
  updateMany?:
    | Prisma.VideoUpdateManyWithWhereWithoutOwnerInput
    | Prisma.VideoUpdateManyWithWhereWithoutOwnerInput[];
  deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoUpdateManyWithoutImportedByNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutImportedByInput,
        Prisma.VideoUncheckedCreateWithoutImportedByInput
      >
    | Prisma.VideoCreateWithoutImportedByInput[]
    | Prisma.VideoUncheckedCreateWithoutImportedByInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutImportedByInput
    | Prisma.VideoCreateOrConnectWithoutImportedByInput[];
  upsert?:
    | Prisma.VideoUpsertWithWhereUniqueWithoutImportedByInput
    | Prisma.VideoUpsertWithWhereUniqueWithoutImportedByInput[];
  createMany?: Prisma.VideoCreateManyImportedByInputEnvelope;
  set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  update?:
    | Prisma.VideoUpdateWithWhereUniqueWithoutImportedByInput
    | Prisma.VideoUpdateWithWhereUniqueWithoutImportedByInput[];
  updateMany?:
    | Prisma.VideoUpdateManyWithWhereWithoutImportedByInput
    | Prisma.VideoUpdateManyWithWhereWithoutImportedByInput[];
  deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoUncheckedUpdateManyWithoutOwnerNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutOwnerInput,
        Prisma.VideoUncheckedCreateWithoutOwnerInput
      >
    | Prisma.VideoCreateWithoutOwnerInput[]
    | Prisma.VideoUncheckedCreateWithoutOwnerInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutOwnerInput
    | Prisma.VideoCreateOrConnectWithoutOwnerInput[];
  upsert?:
    | Prisma.VideoUpsertWithWhereUniqueWithoutOwnerInput
    | Prisma.VideoUpsertWithWhereUniqueWithoutOwnerInput[];
  createMany?: Prisma.VideoCreateManyOwnerInputEnvelope;
  set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  update?:
    | Prisma.VideoUpdateWithWhereUniqueWithoutOwnerInput
    | Prisma.VideoUpdateWithWhereUniqueWithoutOwnerInput[];
  updateMany?:
    | Prisma.VideoUpdateManyWithWhereWithoutOwnerInput
    | Prisma.VideoUpdateManyWithWhereWithoutOwnerInput[];
  deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoUncheckedUpdateManyWithoutImportedByNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutImportedByInput,
        Prisma.VideoUncheckedCreateWithoutImportedByInput
      >
    | Prisma.VideoCreateWithoutImportedByInput[]
    | Prisma.VideoUncheckedCreateWithoutImportedByInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutImportedByInput
    | Prisma.VideoCreateOrConnectWithoutImportedByInput[];
  upsert?:
    | Prisma.VideoUpsertWithWhereUniqueWithoutImportedByInput
    | Prisma.VideoUpsertWithWhereUniqueWithoutImportedByInput[];
  createMany?: Prisma.VideoCreateManyImportedByInputEnvelope;
  set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  update?:
    | Prisma.VideoUpdateWithWhereUniqueWithoutImportedByInput
    | Prisma.VideoUpdateWithWhereUniqueWithoutImportedByInput[];
  updateMany?:
    | Prisma.VideoUpdateManyWithWhereWithoutImportedByInput
    | Prisma.VideoUpdateManyWithWhereWithoutImportedByInput[];
  deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoCreateplaylistIdsInput = {
  set: string[];
};
export type IntFieldUpdateOperationsInput = {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
};
export type NullableIntFieldUpdateOperationsInput = {
  set?: number | null;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
};
export type EnumVideoStatusFieldUpdateOperationsInput = {
  set?: $Enums.VideoStatus;
};
export type EnumPrivacyStatusFieldUpdateOperationsInput = {
  set?: $Enums.PrivacyStatus;
};
export type VideoUpdateplaylistIdsInput = {
  set?: string[];
  push?: string | string[];
};
export type VideoCreateNestedManyWithoutChannelInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutChannelInput,
        Prisma.VideoUncheckedCreateWithoutChannelInput
      >
    | Prisma.VideoCreateWithoutChannelInput[]
    | Prisma.VideoUncheckedCreateWithoutChannelInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutChannelInput
    | Prisma.VideoCreateOrConnectWithoutChannelInput[];
  createMany?: Prisma.VideoCreateManyChannelInputEnvelope;
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUncheckedCreateNestedManyWithoutChannelInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutChannelInput,
        Prisma.VideoUncheckedCreateWithoutChannelInput
      >
    | Prisma.VideoCreateWithoutChannelInput[]
    | Prisma.VideoUncheckedCreateWithoutChannelInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutChannelInput
    | Prisma.VideoCreateOrConnectWithoutChannelInput[];
  createMany?: Prisma.VideoCreateManyChannelInputEnvelope;
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
};
export type VideoUpdateManyWithoutChannelNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutChannelInput,
        Prisma.VideoUncheckedCreateWithoutChannelInput
      >
    | Prisma.VideoCreateWithoutChannelInput[]
    | Prisma.VideoUncheckedCreateWithoutChannelInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutChannelInput
    | Prisma.VideoCreateOrConnectWithoutChannelInput[];
  upsert?:
    | Prisma.VideoUpsertWithWhereUniqueWithoutChannelInput
    | Prisma.VideoUpsertWithWhereUniqueWithoutChannelInput[];
  createMany?: Prisma.VideoCreateManyChannelInputEnvelope;
  set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  update?:
    | Prisma.VideoUpdateWithWhereUniqueWithoutChannelInput
    | Prisma.VideoUpdateWithWhereUniqueWithoutChannelInput[];
  updateMany?:
    | Prisma.VideoUpdateManyWithWhereWithoutChannelInput
    | Prisma.VideoUpdateManyWithWhereWithoutChannelInput[];
  deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoUncheckedUpdateManyWithoutChannelNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.VideoCreateWithoutChannelInput,
        Prisma.VideoUncheckedCreateWithoutChannelInput
      >
    | Prisma.VideoCreateWithoutChannelInput[]
    | Prisma.VideoUncheckedCreateWithoutChannelInput[];
  connectOrCreate?:
    | Prisma.VideoCreateOrConnectWithoutChannelInput
    | Prisma.VideoCreateOrConnectWithoutChannelInput[];
  upsert?:
    | Prisma.VideoUpsertWithWhereUniqueWithoutChannelInput
    | Prisma.VideoUpsertWithWhereUniqueWithoutChannelInput[];
  createMany?: Prisma.VideoCreateManyChannelInputEnvelope;
  set?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  disconnect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  delete?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  connect?: Prisma.VideoWhereUniqueInput | Prisma.VideoWhereUniqueInput[];
  update?:
    | Prisma.VideoUpdateWithWhereUniqueWithoutChannelInput
    | Prisma.VideoUpdateWithWhereUniqueWithoutChannelInput[];
  updateMany?:
    | Prisma.VideoUpdateManyWithWhereWithoutChannelInput
    | Prisma.VideoUpdateManyWithWhereWithoutChannelInput[];
  deleteMany?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
};
export type VideoCreateNestedOneWithoutEditorsInput = {
  create?: Prisma.XOR<
    Prisma.VideoCreateWithoutEditorsInput,
    Prisma.VideoUncheckedCreateWithoutEditorsInput
  >;
  connectOrCreate?: Prisma.VideoCreateOrConnectWithoutEditorsInput;
  connect?: Prisma.VideoWhereUniqueInput;
};
export type VideoUpdateOneRequiredWithoutEditorsNestedInput = {
  create?: Prisma.XOR<
    Prisma.VideoCreateWithoutEditorsInput,
    Prisma.VideoUncheckedCreateWithoutEditorsInput
  >;
  connectOrCreate?: Prisma.VideoCreateOrConnectWithoutEditorsInput;
  upsert?: Prisma.VideoUpsertWithoutEditorsInput;
  connect?: Prisma.VideoWhereUniqueInput;
  update?: Prisma.XOR<
    Prisma.XOR<
      Prisma.VideoUpdateToOneWithWhereWithoutEditorsInput,
      Prisma.VideoUpdateWithoutEditorsInput
    >,
    Prisma.VideoUncheckedUpdateWithoutEditorsInput
  >;
};
export type VideoCreateWithoutOwnerInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  createdAt: string;
  importedBy: Prisma.UserCreateNestedOneWithoutImportedVideosInput;
  editors?: Prisma.VideoEditorCreateNestedManyWithoutVideoInput;
  channel?: Prisma.ChannelCreateNestedOneWithoutVideoInput;
};
export type VideoUncheckedCreateWithoutOwnerInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  importedById: string;
  channelId?: string | null;
  createdAt: string;
  editors?: Prisma.VideoEditorUncheckedCreateNestedManyWithoutVideoInput;
};
export type VideoCreateOrConnectWithoutOwnerInput = {
  where: Prisma.VideoWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutOwnerInput,
    Prisma.VideoUncheckedCreateWithoutOwnerInput
  >;
};
export type VideoCreateManyOwnerInputEnvelope = {
  data: Prisma.VideoCreateManyOwnerInput | Prisma.VideoCreateManyOwnerInput[];
  skipDuplicates?: boolean;
};
export type VideoCreateWithoutImportedByInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  createdAt: string;
  owner: Prisma.UserCreateNestedOneWithoutOwnedVideosInput;
  editors?: Prisma.VideoEditorCreateNestedManyWithoutVideoInput;
  channel?: Prisma.ChannelCreateNestedOneWithoutVideoInput;
};
export type VideoUncheckedCreateWithoutImportedByInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  channelId?: string | null;
  createdAt: string;
  editors?: Prisma.VideoEditorUncheckedCreateNestedManyWithoutVideoInput;
};
export type VideoCreateOrConnectWithoutImportedByInput = {
  where: Prisma.VideoWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutImportedByInput,
    Prisma.VideoUncheckedCreateWithoutImportedByInput
  >;
};
export type VideoCreateManyImportedByInputEnvelope = {
  data:
    | Prisma.VideoCreateManyImportedByInput
    | Prisma.VideoCreateManyImportedByInput[];
  skipDuplicates?: boolean;
};
export type VideoUpsertWithWhereUniqueWithoutOwnerInput = {
  where: Prisma.VideoWhereUniqueInput;
  update: Prisma.XOR<
    Prisma.VideoUpdateWithoutOwnerInput,
    Prisma.VideoUncheckedUpdateWithoutOwnerInput
  >;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutOwnerInput,
    Prisma.VideoUncheckedCreateWithoutOwnerInput
  >;
};
export type VideoUpdateWithWhereUniqueWithoutOwnerInput = {
  where: Prisma.VideoWhereUniqueInput;
  data: Prisma.XOR<
    Prisma.VideoUpdateWithoutOwnerInput,
    Prisma.VideoUncheckedUpdateWithoutOwnerInput
  >;
};
export type VideoUpdateManyWithWhereWithoutOwnerInput = {
  where: Prisma.VideoScalarWhereInput;
  data: Prisma.XOR<
    Prisma.VideoUpdateManyMutationInput,
    Prisma.VideoUncheckedUpdateManyWithoutOwnerInput
  >;
};
export type VideoScalarWhereInput = {
  AND?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
  OR?: Prisma.VideoScalarWhereInput[];
  NOT?: Prisma.VideoScalarWhereInput | Prisma.VideoScalarWhereInput[];
  id?: Prisma.StringFilter<"Video"> | string;
  gDriveId?: Prisma.StringFilter<"Video"> | string;
  title?: Prisma.StringNullableFilter<"Video"> | string | null;
  description?: Prisma.StringNullableFilter<"Video"> | string | null;
  duration?: Prisma.IntFilter<"Video"> | number;
  thumbnailUrl?: Prisma.StringNullableFilter<"Video"> | string | null;
  scheduledAt?: Prisma.IntNullableFilter<"Video"> | number | null;
  videoStatus?: Prisma.EnumVideoStatusFilter<"Video"> | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFilter<"Video">
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.StringNullableListFilter<"Video">;
  tags?: Prisma.StringFilter<"Video"> | string;
  categoryId?: Prisma.StringFilter<"Video"> | string;
  ownerId?: Prisma.StringFilter<"Video"> | string;
  importedById?: Prisma.StringFilter<"Video"> | string;
  channelId?: Prisma.StringNullableFilter<"Video"> | string | null;
  createdAt?: Prisma.StringFilter<"Video"> | string;
};
export type VideoUpsertWithWhereUniqueWithoutImportedByInput = {
  where: Prisma.VideoWhereUniqueInput;
  update: Prisma.XOR<
    Prisma.VideoUpdateWithoutImportedByInput,
    Prisma.VideoUncheckedUpdateWithoutImportedByInput
  >;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutImportedByInput,
    Prisma.VideoUncheckedCreateWithoutImportedByInput
  >;
};
export type VideoUpdateWithWhereUniqueWithoutImportedByInput = {
  where: Prisma.VideoWhereUniqueInput;
  data: Prisma.XOR<
    Prisma.VideoUpdateWithoutImportedByInput,
    Prisma.VideoUncheckedUpdateWithoutImportedByInput
  >;
};
export type VideoUpdateManyWithWhereWithoutImportedByInput = {
  where: Prisma.VideoScalarWhereInput;
  data: Prisma.XOR<
    Prisma.VideoUpdateManyMutationInput,
    Prisma.VideoUncheckedUpdateManyWithoutImportedByInput
  >;
};
export type VideoCreateWithoutChannelInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  createdAt: string;
  owner: Prisma.UserCreateNestedOneWithoutOwnedVideosInput;
  importedBy: Prisma.UserCreateNestedOneWithoutImportedVideosInput;
  editors?: Prisma.VideoEditorCreateNestedManyWithoutVideoInput;
};
export type VideoUncheckedCreateWithoutChannelInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  importedById: string;
  createdAt: string;
  editors?: Prisma.VideoEditorUncheckedCreateNestedManyWithoutVideoInput;
};
export type VideoCreateOrConnectWithoutChannelInput = {
  where: Prisma.VideoWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutChannelInput,
    Prisma.VideoUncheckedCreateWithoutChannelInput
  >;
};
export type VideoCreateManyChannelInputEnvelope = {
  data:
    | Prisma.VideoCreateManyChannelInput
    | Prisma.VideoCreateManyChannelInput[];
  skipDuplicates?: boolean;
};
export type VideoUpsertWithWhereUniqueWithoutChannelInput = {
  where: Prisma.VideoWhereUniqueInput;
  update: Prisma.XOR<
    Prisma.VideoUpdateWithoutChannelInput,
    Prisma.VideoUncheckedUpdateWithoutChannelInput
  >;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutChannelInput,
    Prisma.VideoUncheckedCreateWithoutChannelInput
  >;
};
export type VideoUpdateWithWhereUniqueWithoutChannelInput = {
  where: Prisma.VideoWhereUniqueInput;
  data: Prisma.XOR<
    Prisma.VideoUpdateWithoutChannelInput,
    Prisma.VideoUncheckedUpdateWithoutChannelInput
  >;
};
export type VideoUpdateManyWithWhereWithoutChannelInput = {
  where: Prisma.VideoScalarWhereInput;
  data: Prisma.XOR<
    Prisma.VideoUpdateManyMutationInput,
    Prisma.VideoUncheckedUpdateManyWithoutChannelInput
  >;
};
export type VideoCreateWithoutEditorsInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  createdAt: string;
  owner: Prisma.UserCreateNestedOneWithoutOwnedVideosInput;
  importedBy: Prisma.UserCreateNestedOneWithoutImportedVideosInput;
  channel?: Prisma.ChannelCreateNestedOneWithoutVideoInput;
};
export type VideoUncheckedCreateWithoutEditorsInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  importedById: string;
  channelId?: string | null;
  createdAt: string;
};
export type VideoCreateOrConnectWithoutEditorsInput = {
  where: Prisma.VideoWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutEditorsInput,
    Prisma.VideoUncheckedCreateWithoutEditorsInput
  >;
};
export type VideoUpsertWithoutEditorsInput = {
  update: Prisma.XOR<
    Prisma.VideoUpdateWithoutEditorsInput,
    Prisma.VideoUncheckedUpdateWithoutEditorsInput
  >;
  create: Prisma.XOR<
    Prisma.VideoCreateWithoutEditorsInput,
    Prisma.VideoUncheckedCreateWithoutEditorsInput
  >;
  where?: Prisma.VideoWhereInput;
};
export type VideoUpdateToOneWithWhereWithoutEditorsInput = {
  where?: Prisma.VideoWhereInput;
  data: Prisma.XOR<
    Prisma.VideoUpdateWithoutEditorsInput,
    Prisma.VideoUncheckedUpdateWithoutEditorsInput
  >;
};
export type VideoUpdateWithoutEditorsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  owner?: Prisma.UserUpdateOneRequiredWithoutOwnedVideosNestedInput;
  importedBy?: Prisma.UserUpdateOneRequiredWithoutImportedVideosNestedInput;
  channel?: Prisma.ChannelUpdateOneWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateWithoutEditorsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
  importedById?: Prisma.StringFieldUpdateOperationsInput | string;
  channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoCreateManyOwnerInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  importedById: string;
  channelId?: string | null;
  createdAt: string;
};
export type VideoCreateManyImportedByInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  channelId?: string | null;
  createdAt: string;
};
export type VideoUpdateWithoutOwnerInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  importedBy?: Prisma.UserUpdateOneRequiredWithoutImportedVideosNestedInput;
  editors?: Prisma.VideoEditorUpdateManyWithoutVideoNestedInput;
  channel?: Prisma.ChannelUpdateOneWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateWithoutOwnerInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  importedById?: Prisma.StringFieldUpdateOperationsInput | string;
  channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  editors?: Prisma.VideoEditorUncheckedUpdateManyWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateManyWithoutOwnerInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  importedById?: Prisma.StringFieldUpdateOperationsInput | string;
  channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoUpdateWithoutImportedByInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  owner?: Prisma.UserUpdateOneRequiredWithoutOwnedVideosNestedInput;
  editors?: Prisma.VideoEditorUpdateManyWithoutVideoNestedInput;
  channel?: Prisma.ChannelUpdateOneWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateWithoutImportedByInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
  channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  editors?: Prisma.VideoEditorUncheckedUpdateManyWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateManyWithoutImportedByInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
  channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type VideoCreateManyChannelInput = {
  id?: string;
  gDriveId: string;
  title?: string | null;
  description?: string | null;
  duration: number;
  thumbnailUrl?: string | null;
  scheduledAt?: number | null;
  videoStatus?: $Enums.VideoStatus;
  privacyStatus?: $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoCreateplaylistIdsInput | string[];
  tags: string;
  categoryId: string;
  ownerId: string;
  importedById: string;
  createdAt: string;
};
export type VideoUpdateWithoutChannelInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  owner?: Prisma.UserUpdateOneRequiredWithoutOwnedVideosNestedInput;
  importedBy?: Prisma.UserUpdateOneRequiredWithoutImportedVideosNestedInput;
  editors?: Prisma.VideoEditorUpdateManyWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateWithoutChannelInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
  importedById?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
  editors?: Prisma.VideoEditorUncheckedUpdateManyWithoutVideoNestedInput;
};
export type VideoUncheckedUpdateManyWithoutChannelInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  gDriveId?: Prisma.StringFieldUpdateOperationsInput | string;
  title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  duration?: Prisma.IntFieldUpdateOperationsInput | number;
  thumbnailUrl?:
    | Prisma.NullableStringFieldUpdateOperationsInput
    | string
    | null;
  scheduledAt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
  videoStatus?:
    | Prisma.EnumVideoStatusFieldUpdateOperationsInput
    | $Enums.VideoStatus;
  privacyStatus?:
    | Prisma.EnumPrivacyStatusFieldUpdateOperationsInput
    | $Enums.PrivacyStatus;
  playlistIds?: Prisma.VideoUpdateplaylistIdsInput | string[];
  tags?: Prisma.StringFieldUpdateOperationsInput | string;
  categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
  ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
  importedById?: Prisma.StringFieldUpdateOperationsInput | string;
  createdAt?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type VideoCountOutputType
 */
export type VideoCountOutputType = {
  editors: number;
};
export type VideoCountOutputTypeSelect<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  editors?: boolean | VideoCountOutputTypeCountEditorsArgs;
};
/**
 * VideoCountOutputType without action
 */
export type VideoCountOutputTypeDefaultArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the VideoCountOutputType
   */
  select?: Prisma.VideoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * VideoCountOutputType without action
 */
export type VideoCountOutputTypeCountEditorsArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.VideoEditorWhereInput;
};
export type VideoSelect<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    gDriveId?: boolean;
    title?: boolean;
    description?: boolean;
    duration?: boolean;
    thumbnailUrl?: boolean;
    scheduledAt?: boolean;
    videoStatus?: boolean;
    privacyStatus?: boolean;
    playlistIds?: boolean;
    tags?: boolean;
    categoryId?: boolean;
    ownerId?: boolean;
    importedById?: boolean;
    channelId?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    importedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    editors?: boolean | Prisma.Video$editorsArgs<ExtArgs>;
    channel?: boolean | Prisma.Video$channelArgs<ExtArgs>;
    _count?: boolean | Prisma.VideoCountOutputTypeDefaultArgs<ExtArgs>;
  },
  ExtArgs["result"]["video"]
>;
export type VideoSelectCreateManyAndReturn<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    gDriveId?: boolean;
    title?: boolean;
    description?: boolean;
    duration?: boolean;
    thumbnailUrl?: boolean;
    scheduledAt?: boolean;
    videoStatus?: boolean;
    privacyStatus?: boolean;
    playlistIds?: boolean;
    tags?: boolean;
    categoryId?: boolean;
    ownerId?: boolean;
    importedById?: boolean;
    channelId?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    importedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    channel?: boolean | Prisma.Video$channelArgs<ExtArgs>;
  },
  ExtArgs["result"]["video"]
>;
export type VideoSelectUpdateManyAndReturn<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    gDriveId?: boolean;
    title?: boolean;
    description?: boolean;
    duration?: boolean;
    thumbnailUrl?: boolean;
    scheduledAt?: boolean;
    videoStatus?: boolean;
    privacyStatus?: boolean;
    playlistIds?: boolean;
    tags?: boolean;
    categoryId?: boolean;
    ownerId?: boolean;
    importedById?: boolean;
    channelId?: boolean;
    createdAt?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    importedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    channel?: boolean | Prisma.Video$channelArgs<ExtArgs>;
  },
  ExtArgs["result"]["video"]
>;
export type VideoSelectScalar = {
  id?: boolean;
  gDriveId?: boolean;
  title?: boolean;
  description?: boolean;
  duration?: boolean;
  thumbnailUrl?: boolean;
  scheduledAt?: boolean;
  videoStatus?: boolean;
  privacyStatus?: boolean;
  playlistIds?: boolean;
  tags?: boolean;
  categoryId?: boolean;
  ownerId?: boolean;
  importedById?: boolean;
  channelId?: boolean;
  createdAt?: boolean;
};
export type VideoOmit<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
  | "id"
  | "gDriveId"
  | "title"
  | "description"
  | "duration"
  | "thumbnailUrl"
  | "scheduledAt"
  | "videoStatus"
  | "privacyStatus"
  | "playlistIds"
  | "tags"
  | "categoryId"
  | "ownerId"
  | "importedById"
  | "channelId"
  | "createdAt",
  ExtArgs["result"]["video"]
>;
export type VideoInclude<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  importedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  editors?: boolean | Prisma.Video$editorsArgs<ExtArgs>;
  channel?: boolean | Prisma.Video$channelArgs<ExtArgs>;
  _count?: boolean | Prisma.VideoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VideoIncludeCreateManyAndReturn<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  importedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  channel?: boolean | Prisma.Video$channelArgs<ExtArgs>;
};
export type VideoIncludeUpdateManyAndReturn<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  importedBy?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  channel?: boolean | Prisma.Video$channelArgs<ExtArgs>;
};
export type $VideoPayload<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  name: "Video";
  objects: {
    owner: Prisma.$UserPayload<ExtArgs>;
    importedBy: Prisma.$UserPayload<ExtArgs>;
    editors: Prisma.$VideoEditorPayload<ExtArgs>[];
    channel: Prisma.$ChannelPayload<ExtArgs> | null;
  };
  scalars: runtime.Types.Extensions.GetPayloadResult<
    {
      id: string;
      gDriveId: string;
      title: string | null;
      description: string | null;
      duration: number;
      thumbnailUrl: string | null;
      scheduledAt: number | null;
      videoStatus: $Enums.VideoStatus;
      privacyStatus: $Enums.PrivacyStatus;
      playlistIds: string[];
      tags: string;
      categoryId: string;
      ownerId: string;
      importedById: string;
      channelId: string | null;
      createdAt: string;
    },
    ExtArgs["result"]["video"]
  >;
  composites: {};
};
export type VideoGetPayload<
  S extends boolean | null | undefined | VideoDefaultArgs,
> = runtime.Types.Result.GetResult<Prisma.$VideoPayload, S>;
export type VideoCountArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<VideoFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
  select?: VideoCountAggregateInputType | true;
};
export interface VideoDelegate<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
  GlobalOmitOptions = {},
> {
  [K: symbol]: {
    types: Prisma.TypeMap<ExtArgs>["model"]["Video"];
    meta: {
      name: "Video";
    };
  };
  /**
   * Find zero or one Video that matches the filter.
   * @param {VideoFindUniqueArgs} args - Arguments to find a Video
   * @example
   * // Get one Video
   * const video = await prisma.video.findUnique({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUnique<T extends VideoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "findUnique",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Find one Video that matches the filter or throw an error with `error.code='P2025'`
   * if no matches were found.
   * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
   * @example
   * // Get one Video
   * const video = await prisma.video.findUniqueOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(
    args: Prisma.SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "findUniqueOrThrow",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Find the first Video that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {VideoFindFirstArgs} args - Arguments to find a Video
   * @example
   * // Get one Video
   * const video = await prisma.video.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirst<T extends VideoFindFirstArgs>(
    args?: Prisma.SelectSubset<T, VideoFindFirstArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "findFirst",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Find the first Video that matches the filter or
   * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
   * @example
   * // Get one Video
   * const video = await prisma.video.findFirstOrThrow({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   */
  findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(
    args?: Prisma.SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "findFirstOrThrow",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Find zero or more Videos that matches the filter.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all Videos
   * const videos = await prisma.video.findMany()
   *
   * // Get first 10 Videos
   * const videos = await prisma.video.findMany({ take: 10 })
   *
   * // Only select the `id`
   * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
   *
   */
  findMany<T extends VideoFindManyArgs>(
    args?: Prisma.SelectSubset<T, VideoFindManyArgs<ExtArgs>>,
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "findMany",
      GlobalOmitOptions
    >
  >;
  /**
   * Create a Video.
   * @param {VideoCreateArgs} args - Arguments to create a Video.
   * @example
   * // Create one Video
   * const Video = await prisma.video.create({
   *   data: {
   *     // ... data to create a Video
   *   }
   * })
   *
   */
  create<T extends VideoCreateArgs>(
    args: Prisma.SelectSubset<T, VideoCreateArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "create",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Create many Videos.
   * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
   * @example
   * // Create many Videos
   * const video = await prisma.video.createMany({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *
   */
  createMany<T extends VideoCreateManyArgs>(
    args?: Prisma.SelectSubset<T, VideoCreateManyArgs<ExtArgs>>,
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  /**
   * Create many Videos and returns the data saved in the database.
   * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
   * @example
   * // Create many Videos
   * const video = await prisma.video.createManyAndReturn({
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *
   * // Create many Videos and only return the `id`
   * const videoWithIdOnly = await prisma.video.createManyAndReturn({
   *   select: { id: true },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   *
   */
  createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(
    args?: Prisma.SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>,
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "createManyAndReturn",
      GlobalOmitOptions
    >
  >;
  /**
   * Delete a Video.
   * @param {VideoDeleteArgs} args - Arguments to delete one Video.
   * @example
   * // Delete one Video
   * const Video = await prisma.video.delete({
   *   where: {
   *     // ... filter to delete one Video
   *   }
   * })
   *
   */
  delete<T extends VideoDeleteArgs>(
    args: Prisma.SelectSubset<T, VideoDeleteArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "delete",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Update one Video.
   * @param {VideoUpdateArgs} args - Arguments to update one Video.
   * @example
   * // Update one Video
   * const video = await prisma.video.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   *
   */
  update<T extends VideoUpdateArgs>(
    args: Prisma.SelectSubset<T, VideoUpdateArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "update",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Delete zero or more Videos.
   * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
   * @example
   * // Delete a few Videos
   * const { count } = await prisma.video.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   *
   */
  deleteMany<T extends VideoDeleteManyArgs>(
    args?: Prisma.SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>,
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  /**
   * Update zero or more Videos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many Videos
   * const video = await prisma.video.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   *
   */
  updateMany<T extends VideoUpdateManyArgs>(
    args: Prisma.SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>,
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  /**
   * Update zero or more Videos and returns the data updated in the database.
   * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
   * @example
   * // Update many Videos
   * const video = await prisma.video.updateManyAndReturn({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: [
   *     // ... provide data here
   *   ]
   * })
   *
   * // Update zero or more Videos and only return the `id`
   * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
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
  updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(
    args: Prisma.SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>,
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "updateManyAndReturn",
      GlobalOmitOptions
    >
  >;
  /**
   * Create or update one Video.
   * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
   * @example
   * // Update or create a Video
   * const video = await prisma.video.upsert({
   *   create: {
   *     // ... data to create a Video
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the Video we want to update
   *   }
   * })
   */
  upsert<T extends VideoUpsertArgs>(
    args: Prisma.SelectSubset<T, VideoUpsertArgs<ExtArgs>>,
  ): Prisma.Prisma__VideoClient<
    runtime.Types.Result.GetResult<
      Prisma.$VideoPayload<ExtArgs>,
      T,
      "upsert",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Count the number of Videos.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {VideoCountArgs} args - Arguments to filter Videos to count.
   * @example
   * // Count the number of Videos
   * const count = await prisma.video.count({
   *   where: {
   *     // ... the filter for the Videos we want to count
   *   }
   * })
   **/
  count<T extends VideoCountArgs>(
    args?: Prisma.Subset<T, VideoCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<"select", any>
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<T["select"], VideoCountAggregateOutputType>
      : number
  >;
  /**
   * Allows you to perform aggregations operations on a Video.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
  aggregate<T extends VideoAggregateArgs>(
    args: Prisma.Subset<T, VideoAggregateArgs>,
  ): Prisma.PrismaPromise<GetVideoAggregateType<T>>;
  /**
   * Group by Video.
   * Note, that providing `undefined` is treated as the value not being there.
   * Read more here: https://pris.ly/d/null-undefined
   * @param {VideoGroupByArgs} args - Group by arguments.
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
  groupBy<
    T extends VideoGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<"skip", Prisma.Keys<T>>,
      Prisma.Extends<"take", Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? {
          orderBy: VideoGroupByArgs["orderBy"];
        }
      : {
          orderBy?: VideoGroupByArgs["orderBy"];
        },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<
      Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
    >,
    ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T["having"]>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
      ? `Error: "by" must not be empty.`
      : HavingValid extends Prisma.False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [
                    Error,
                    "Field ",
                    P,
                    ` in "having" needs to be provided in "by"`,
                  ];
          }[HavingFields]
        : "take" extends Prisma.Keys<T>
          ? "orderBy" extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
              ? {}
              : {
                  [P in OrderFields]: P extends ByFields
                    ? never
                    : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
          : "skip" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
              ? {}
              : {
                  [P in OrderFields]: P extends ByFields
                    ? never
                    : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                }[OrderFields],
  >(
    args: Prisma.SubsetIntersection<T, VideoGroupByArgs, OrderByArg> &
      InputErrors,
  ): {} extends InputErrors
    ? GetVideoGroupByPayload<T>
    : Prisma.PrismaPromise<InputErrors>;
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Video.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__VideoClient<
  T,
  Null = never,
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
  GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise";
  owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>,
  ): Prisma.Prisma__UserClient<
    | runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >
    | Null,
    Null,
    ExtArgs,
    GlobalOmitOptions
  >;
  importedBy<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>,
  ): Prisma.Prisma__UserClient<
    | runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >
    | Null,
    Null,
    ExtArgs,
    GlobalOmitOptions
  >;
  editors<T extends Prisma.Video$editorsArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.Video$editorsArgs<ExtArgs>>,
  ): Prisma.PrismaPromise<
    | runtime.Types.Result.GetResult<
        Prisma.$VideoEditorPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    | Null
  >;
  channel<T extends Prisma.Video$channelArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.Video$channelArgs<ExtArgs>>,
  ): Prisma.Prisma__ChannelClient<
    runtime.Types.Result.GetResult<
      Prisma.$ChannelPayload<ExtArgs>,
      T,
      "findUniqueOrThrow",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?:
      | ((reason: any) => TResult | PromiseLike<TResult>)
      | undefined
      | null,
  ): runtime.Types.Utils.JsPromise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(
    onfinally?: (() => void) | undefined | null,
  ): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Video model
 */
export interface VideoFieldRefs {
  readonly id: Prisma.FieldRef<"Video", "String">;
  readonly gDriveId: Prisma.FieldRef<"Video", "String">;
  readonly title: Prisma.FieldRef<"Video", "String">;
  readonly description: Prisma.FieldRef<"Video", "String">;
  readonly duration: Prisma.FieldRef<"Video", "Int">;
  readonly thumbnailUrl: Prisma.FieldRef<"Video", "String">;
  readonly scheduledAt: Prisma.FieldRef<"Video", "Int">;
  readonly videoStatus: Prisma.FieldRef<"Video", "VideoStatus">;
  readonly privacyStatus: Prisma.FieldRef<"Video", "PrivacyStatus">;
  readonly playlistIds: Prisma.FieldRef<"Video", "String[]">;
  readonly tags: Prisma.FieldRef<"Video", "String">;
  readonly categoryId: Prisma.FieldRef<"Video", "String">;
  readonly ownerId: Prisma.FieldRef<"Video", "String">;
  readonly importedById: Prisma.FieldRef<"Video", "String">;
  readonly channelId: Prisma.FieldRef<"Video", "String">;
  readonly createdAt: Prisma.FieldRef<"Video", "String">;
}
/**
 * Video findUnique
 */
export type VideoFindUniqueArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * Filter, which Video to fetch.
   */
  where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video findUniqueOrThrow
 */
export type VideoFindUniqueOrThrowArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * Filter, which Video to fetch.
   */
  where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video findFirst
 */
export type VideoFindFirstArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * Filter, which Video to fetch.
   */
  where?: Prisma.VideoWhereInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   *
   * Determine the order of Videos to fetch.
   */
  orderBy?:
    | Prisma.VideoOrderByWithRelationInput
    | Prisma.VideoOrderByWithRelationInput[];
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   *
   * Sets the position for searching for Videos.
   */
  cursor?: Prisma.VideoWhereUniqueInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Take `±n` Videos from the position of the cursor.
   */
  take?: number;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Skip the first `n` Videos.
   */
  skip?: number;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   *
   * Filter by unique combinations of Videos.
   */
  distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * Video findFirstOrThrow
 */
export type VideoFindFirstOrThrowArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * Filter, which Video to fetch.
   */
  where?: Prisma.VideoWhereInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   *
   * Determine the order of Videos to fetch.
   */
  orderBy?:
    | Prisma.VideoOrderByWithRelationInput
    | Prisma.VideoOrderByWithRelationInput[];
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   *
   * Sets the position for searching for Videos.
   */
  cursor?: Prisma.VideoWhereUniqueInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Take `±n` Videos from the position of the cursor.
   */
  take?: number;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Skip the first `n` Videos.
   */
  skip?: number;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
   *
   * Filter by unique combinations of Videos.
   */
  distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * Video findMany
 */
export type VideoFindManyArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * Filter, which Videos to fetch.
   */
  where?: Prisma.VideoWhereInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
   *
   * Determine the order of Videos to fetch.
   */
  orderBy?:
    | Prisma.VideoOrderByWithRelationInput
    | Prisma.VideoOrderByWithRelationInput[];
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
   *
   * Sets the position for listing Videos.
   */
  cursor?: Prisma.VideoWhereUniqueInput;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Take `±n` Videos from the position of the cursor.
   */
  take?: number;
  /**
   * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
   *
   * Skip the first `n` Videos.
   */
  skip?: number;
  distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
/**
 * Video create
 */
export type VideoCreateArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * The data needed to create a Video.
   */
  data: Prisma.XOR<Prisma.VideoCreateInput, Prisma.VideoUncheckedCreateInput>;
};
/**
 * Video createMany
 */
export type VideoCreateManyArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * The data used to create many Videos.
   */
  data: Prisma.VideoCreateManyInput | Prisma.VideoCreateManyInput[];
  skipDuplicates?: boolean;
};
/**
 * Video createManyAndReturn
 */
export type VideoCreateManyAndReturnArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelectCreateManyAndReturn<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * The data used to create many Videos.
   */
  data: Prisma.VideoCreateManyInput | Prisma.VideoCreateManyInput[];
  skipDuplicates?: boolean;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Video update
 */
export type VideoUpdateArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * The data needed to update a Video.
   */
  data: Prisma.XOR<Prisma.VideoUpdateInput, Prisma.VideoUncheckedUpdateInput>;
  /**
   * Choose, which Video to update.
   */
  where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video updateMany
 */
export type VideoUpdateManyArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * The data used to update Videos.
   */
  data: Prisma.XOR<
    Prisma.VideoUpdateManyMutationInput,
    Prisma.VideoUncheckedUpdateManyInput
  >;
  /**
   * Filter which Videos to update
   */
  where?: Prisma.VideoWhereInput;
  /**
   * Limit how many Videos to update.
   */
  limit?: number;
};
/**
 * Video updateManyAndReturn
 */
export type VideoUpdateManyAndReturnArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelectUpdateManyAndReturn<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * The data used to update Videos.
   */
  data: Prisma.XOR<
    Prisma.VideoUpdateManyMutationInput,
    Prisma.VideoUncheckedUpdateManyInput
  >;
  /**
   * Filter which Videos to update
   */
  where?: Prisma.VideoWhereInput;
  /**
   * Limit how many Videos to update.
   */
  limit?: number;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Video upsert
 */
export type VideoUpsertArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * The filter to search for the Video to update in case it exists.
   */
  where: Prisma.VideoWhereUniqueInput;
  /**
   * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
   */
  create: Prisma.XOR<Prisma.VideoCreateInput, Prisma.VideoUncheckedCreateInput>;
  /**
   * In case the Video was found with the provided `where` argument, update it with this data.
   */
  update: Prisma.XOR<Prisma.VideoUpdateInput, Prisma.VideoUncheckedUpdateInput>;
};
/**
 * Video delete
 */
export type VideoDeleteArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
  /**
   * Filter which Video to delete.
   */
  where: Prisma.VideoWhereUniqueInput;
};
/**
 * Video deleteMany
 */
export type VideoDeleteManyArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Filter which Videos to delete
   */
  where?: Prisma.VideoWhereInput;
  /**
   * Limit how many Videos to delete.
   */
  limit?: number;
};
/**
 * Video.editors
 */
export type Video$editorsArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
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
  where?: Prisma.VideoEditorWhereInput;
  orderBy?:
    | Prisma.VideoEditorOrderByWithRelationInput
    | Prisma.VideoEditorOrderByWithRelationInput[];
  cursor?: Prisma.VideoEditorWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?:
    | Prisma.VideoEditorScalarFieldEnum
    | Prisma.VideoEditorScalarFieldEnum[];
};
/**
 * Video.channel
 */
export type Video$channelArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Channel
   */
  select?: Prisma.ChannelSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Channel
   */
  omit?: Prisma.ChannelOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.ChannelInclude<ExtArgs> | null;
  where?: Prisma.ChannelWhereInput;
};
/**
 * Video without action
 */
export type VideoDefaultArgs<
  ExtArgs extends
    runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  /**
   * Select specific fields to fetch from the Video
   */
  select?: Prisma.VideoSelect<ExtArgs> | null;
  /**
   * Omit specific fields from the Video
   */
  omit?: Prisma.VideoOmit<ExtArgs> | null;
  /**
   * Choose, which related nodes to fetch as well
   */
  include?: Prisma.VideoInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Video.d.ts.map
