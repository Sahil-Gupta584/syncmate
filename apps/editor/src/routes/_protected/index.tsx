import { Progress, Skeleton } from "@heroui/react";
import type { TRole } from "@repo/lib/constants";
import { backend } from "@repo/trpc/react";
import { VideoCard, VideosNotFound } from "@repo/ui";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useSession } from "../../lib/authActions";
import ImportVideo from "./-modals/importVideo";

export const Route = createFileRoute("/_protected/")({
  component: VideosPage,
});

function VideosPage() {
  const { data } = useSession();
  const { data: userDetails, isFetching } = backend.db.getEditorVideos.useQuery(
    {
      editorId: data?.user ? data.user.id : "",
    },
  );

  return (
    <>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {userDetails &&
            userDetails.result &&
            userDetails.result.accessibleVideos.length > 0 &&
            userDetails.result &&
            userDetails.result.accessibleVideos.map(({ video }) => (
              <div className="relative" key={video.id}>
                <VideoCard
                  key={video.id}
                  video={video}
                  LinkComponent={Link}
                  role={data?.user.role as TRole}
                />
              </div>
            ))}
        </div>
        {userDetails &&
          userDetails.result &&
          userDetails.result.accessibleVideos.length === 0 && (
            <VideosNotFound />
          )}
      </div>
    </>
  );
}
