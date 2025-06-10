import { addToast, Progress, Skeleton } from "@heroui/react";
import type { TRole } from "@repo/lib/constants";
import { trpcErrorHandler } from "@repo/lib/utils";
import { backend } from "@repo/trpc2/react";
import { VideoCard, VideosNotFound } from "@repo/ui";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useSession } from "../../lib/authActions";
import ImportVideo from "./-modals/importVideo";

export const Route = createFileRoute("/_protected/")({
  component: VideosPage,
});

function VideosPage() {
  const { data } = useSession();
  const { data: userDetails, isFetching } =
    backend.db.getCreatorDetails.useQuery({
      userId: data?.user ? data.user.id : "",
    });

  const backendUtils = backend.useUtils();
  const deleteVideoMutation = backend.db.deleteVideo.useMutation();

  async function handleDeleteVideo(
    e: React.FormEvent<HTMLFormElement>,
    onClose: () => void,
    videoId: string
  ) {
    try {
      e.preventDefault();
      const res = await deleteVideoMutation.mutateAsync({ videoId });
      if (res.ok) {
        addToast({
          color: "success",
          description: "Video deleted successfully",
        });
      }
      if (!res.ok) {
        addToast({ color: "danger", description: "Failed to delete video" });
      }
      onClose();
      backendUtils.db.getCreatorDetails.invalidate();
    } catch (error) {
      trpcErrorHandler(error);
    }
  }

  return (
    <div className=" px-4 py-6">
      <div className="flex justify-end items-center mb-6">
        {userDetails?.result && (
          <ImportVideo userDetails={userDetails.result} />
        )}
      </div>
      {isFetching && (
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-full"
          isStriped
        />
      )}
      {(!userDetails || !userDetails.result) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="w-full aspect-video rounded-lg" />
          ))}
        </div>
      )}
      {userDetails &&
        userDetails.result &&
        userDetails.result.ownedVideos?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {userDetails.result.ownedVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                LinkComponent={Link}
                role={data?.user.role as TRole}
                isDeleting={deleteVideoMutation.isPending}
                handleDeleteVideo={handleDeleteVideo}
              />
            ))}
          </div>
        )}
      {userDetails &&
        userDetails.result &&
        userDetails.result.ownedVideos?.length === 0 && <VideosNotFound />}
    </div>
  );
}
