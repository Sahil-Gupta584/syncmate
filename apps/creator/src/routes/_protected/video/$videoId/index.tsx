import {
  addToast,
  Button,
  Input,
  Progress,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import type { TRole } from "@repo/lib/constants";
import { trpcErrorHandler } from "@repo/lib/utils";
import { backend, type TBackendOutput } from "@repo/trpc/react";
import { serverZodSchemas } from "@repo/trpc/server/zodSchemas.ts";
import { Tag, VideoComponent, VideoDropdown } from "@repo/ui";
import { createFileRoute } from "@tanstack/react-router";
import type { youtube_v3 } from "googleapis/build/src/apis/youtube";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { categories, UploadImgGetUrl } from "../../../../lib/utils";
import ChanNEditrsFields from "./-components/ChanNEditrsFields";
import { DateTimePicker } from "./-components/modals/dateTimePicker";
import PublishNow from "./-components/modals/publishNow";
import ShowThumbnails from "./-components/showThumbnails";
import VideoFormSkeleton from "./-components/VideoFormSkeleton";

export const Route = createFileRoute("/_protected/video/$videoId/")({
  component: Page,
});

type TPlaylists = youtube_v3.Schema$Playlist[] | undefined;
export type TVideoDetails = TBackendOutput["db"]["getVideoDetails"]["result"];

export default function Page() {
  // const [playlists, setPlaylists] = useState<TPlaylists>();
  const [isEditing, setIsEditing] = useState(false);
  const { videoId } = Route.useParams();
  const videoDetailsQuery = backend.db.getVideoDetails.useQuery({ videoId });

  return (
    <>
      {videoDetailsQuery.isFetching && (
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-full"
          isStriped
        />
      )}
      {videoDetailsQuery.data?.result ? (
        <VideoPage
          previousData={videoDetailsQuery.data.result}
          playlists={[]}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <VideoFormSkeleton />
      )}
    </>
  );
}

const updateVideoDetailsZodSchema =
  serverZodSchemas.dbActionsZodSchema.updateVideoDetails;
export type TVideoDetailsForm = Partial<
  z.infer<typeof updateVideoDetailsZodSchema> & {
    newThumbnailFile?: FileList;
    selectedEditorsId: string[];
  }
>;

export function VideoPage({
  previousData,
  playlists,
  isEditing,
  setIsEditing,
}: {
  previousData: NonNullable<TVideoDetails>;
  playlists: TPlaylists;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TVideoDetailsForm>({
    disabled: !isEditing || previousData.videoStatus !== "DRAFT",
  });
  const updateVideoDetailsMutation =
    backend.db.updateVideoDetails.useMutation();
  const getVideoLinkQuery = backend.action.getVideoLink.useQuery({
    videoId: previousData.id,
  });

  useEffect(() => {
    if (!isEditing) return;

    const confirmLeave = () =>
      window.confirm("You have unsaved changes. Do you really want to leave?");

    const interceptNavigation = (e: globalThis.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a[href]") && !confirmLeave()) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    const handlePopState = () => {
      if (!confirmLeave()) {
        history.pushState(null, "", location.href);
      } else {
        window.removeEventListener("popstate", handlePopState);
      }
    };

    history.pushState(null, "", location.href);
    document.addEventListener("click", interceptNavigation, true);
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", interceptNavigation, true);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isEditing]);

  async function handleVideoSave(formDataRaw: TVideoDetailsForm) {
    try {
      if (formDataRaw.newThumbnailFile && formDataRaw.newThumbnailFile[0]) {
        const { result } = await UploadImgGetUrl({
          imgFile: formDataRaw.newThumbnailFile[0],
        });
        formDataRaw.thumbnailUrl = result?.displayUrl;
      }

      console.log(" formDataRaw:", formDataRaw);

      const playlistIds = `${formDataRaw.playlistIds}`;

      const res = await updateVideoDetailsMutation.mutateAsync({
        ...formDataRaw,
        id: previousData.id,
        playlistIds: playlistIds.split(","),
        editors: Array.isArray(formDataRaw.editors)
          ? formDataRaw.editors.map((e) => ({
              id: e.id,
              email: e.email,
            }))
          : [],
      });
      console.log("res save video", res);

      if (res.ok && res.result) {
        addToast({
          color: "success",
          description: "Video Data Saved Successfully",
        });
      }

      if (!res.ok && res.error) {
        addToast({
          color: "danger",
          description: "Unknown error occurred",
        });
      }
      setIsEditing(false);
    } catch (error) {
      trpcErrorHandler(error);
    }
  }
  return (
    <div
      className={`"p-6 max-w-4xl mx-auto ${
        previousData.videoStatus !== "DRAFT" && "text-gray-500"
      }`}
    >
      <VideoComponent videoLink={getVideoLinkQuery.data?.result?.videoLink} />

      <div className="flex sm:flex-row flex-col gap-4 font-semibold my-4 sm:mb-6">
        <DateTimePicker isEditing={isEditing} videoDetails={previousData} />
        <PublishNow
          isSubmitting={isSubmitting}
          isEditing={isEditing}
          videoId={previousData.id}
          status={previousData.videoStatus}
        />
      </div>
      <form className="" onSubmit={handleSubmit(handleVideoSave)}>
        <li className="flex sm:items-center sm:justify-between sm:flex-row flex-col pl-1 gap-4">
          <ul className="flex gap-2 items-center">
            <h1 className="text-3xl font-extrabold">Video Details</h1>
            <Tag text={previousData.videoStatus} className="self-end" />
          </ul>
          <div className="flex flex-row  sm:gap-4 gap-2 font-semibold ">
            {isEditing && (
              <Button
                className="w-fit bg-blue-600 text-white"
                isLoading={isSubmitting}
                type="submit"
                isDisabled={previousData.videoStatus !== "DRAFT"}
              >
                {isEditing ? "Save" : "Edit"}
              </Button>
            )}
            {!isEditing && (
              <Button
                color="primary"
                className="text-lg"
                isLoading={isSubmitting}
                type="button"
                onPress={() => setIsEditing(true)}
                isDisabled={previousData.videoStatus !== "DRAFT"}
              >
                Edit
              </Button>
            )}
            {isEditing && (
              <Button
                color="danger"
                className="w-fit"
                isLoading={isSubmitting}
                onPress={() => {
                  reset();
                  setIsEditing(false);
                }}
              >
                Cancel
              </Button>
            )}
            <VideoDropdown
              title={previousData.title as string}
              videoId={previousData.id}
              userRole={previousData.owner.role as TRole}
              className="mt-1"
              CREATOR_BASE_URL={import.meta.env.VITE_CREATOR_BASE_URL!}
            />
          </div>
        </li>
        <div className="mt-4 space-y-8">
          <ChanNEditrsFields
            isEditing={isEditing}
            register={register}
            setValue={setValue}
            previousData={previousData}
          />
          <Textarea
            isClearable={isEditing}
            minRows={2}
            label="Title (required)"
            placeholder="Add your title here"
            variant="bordered"
            classNames={{
              label: ["text-xl font-bold"],
              input: ["text-[17px]"],
            }}
            {...register("title")}
          />
          {errors.title && (
            <span className="text-red-500">
              {errors.title.message as string}
            </span>
          )}

          <Textarea
            isClearable={isEditing}
            minRows={7}
            label="Description"
            placeholder="Add your description here"
            variant="bordered"
            classNames={{
              label: ["text-xl font-bold"],
              input: ["text-[17px]"],
            }}
            {...register("description")}
          />

          <ShowThumbnails
            handleRemoveImage={() => setValue("thumbnailUrl", null)}
            register={register}
            watch={watch}
          />
          {errors.thumbnailUrl && (
            <span className="text-red-500">
              {errors.thumbnailUrl?.message as string}
            </span>
          )}
          <div className="">
            <ul className="mb-2">
              <li className="text-xl font-bold">Playlists</li>
              <li className="text-sm text-gray-500">
                Add your video to one or more playlists to organize your content
                for viewers.
              </li>
            </ul>
            <Select
              variant="bordered"
              className="max-w-xs m-1"
              placeholder="Select Playlist"
              classNames={{
                popoverContent: ["w-fit"],
              }}
              selectionMode="multiple"
              items={playlists || []}
              defaultSelectedKeys={previousData.playlistIds}
              isDisabled={!isEditing}
              {...register("playlistIds")}
            >
              {(item) => (
                <SelectItem key={item.id}>
                  {item.snippet?.localized?.title}
                </SelectItem>
              )}
            </Select>
          </div>

          {/* <AudienceSec register={register} /> */}

          <div>
            <ul className="mb-4">
              <li className="text-xl font-bold">Tags</li>
              <li className="text-sm text-gray-500 mt-1">
                Tags can be useful if content in your video is commonly
                misspelt. Otherwise, tags play a minimal role in helping viewers
                to find your video.
              </li>
            </ul>
            <Input
              variant="bordered"
              placeholder="Add tags"
              description="Enter a comma after each tag"
              classNames={{ inputWrapper: [" p-[22px_1rem]"] }}
              {...register("tags")}
            />
          </div>

          <div>
            <ul className="mb-4">
              <li className="text-xl font-bold">Category</li>
              <li className="text-sm text-gray-500 mt-1">
                Add your video to a category so that viewers can find it more
                easily
              </li>
            </ul>
            <Select
              variant="bordered"
              className="max-w-xs m-1"
              placeholder="Select Category"
              classNames={{
                popoverContent: ["w-fit"],
              }}
              isDisabled={!isEditing}
              defaultSelectedKeys={previousData.categoryId}
              {...register("categoryId")}
            >
              {categories.map((text) => (
                <SelectItem key={text.id}>{text.label}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </form>
    </div>
  );
}
