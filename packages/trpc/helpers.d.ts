export type TBackendRes<T> = {
  ok: boolean;
  error?: Error;
  result?: T | null;
};
export declare const backendRes: <T = undefined>({
  ok,
  error,
  result,
}: TBackendRes<T>) => TBackendRes<T>;
export declare function getGoogleServices(
  userId: string,
  code?: string,
): Promise<
  | TBackendRes<{
      youtube: import("googleapis").youtube_v3.Youtube;
      drive: import("googleapis").drive_v3.Drive;
      authTokens: import("google-auth-library").Credentials | null;
    }>
  | TBackendRes<null>
>;
export declare function updateGoogleDrivePermissions({
  gDriveId,
  selectedEditorEmails,
  videoOwnerId,
}: {
  gDriveId: string;
  selectedEditorEmails: string[];
  videoOwnerId: string;
}): Promise<void>;
export declare function getOrCreateFolder(
  drive: any,
  folderName: string,
): Promise<any>;
export declare function getFileFromDrive(
  driveFileId: string,
  userId: string,
): Promise<import("stream").Readable>;
export type TUpdateThumbnailsProps = {
  videos: {
    thumbnailLink?: string;
    videoId: string;
    gDriveId: string;
  }[];
  ownerId: string;
};
export declare function updateThumbnails({
  videos,
  ownerId,
}: TUpdateThumbnailsProps): Promise<
  TBackendRes<null> | TBackendRes<TUpdateThumbnailsProps> | undefined
>;
//# sourceMappingURL=helpers.d.ts.map
