import { backend } from "@repo/trpc/react";
import { VideoComponent } from "@repo/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/video/$videoId/")({
  component: VideosPage,
});

function VideosPage() {
  const { videoId } = Route.useParams();
  const getVideoLinkQuery = backend.action.getVideoLink.useQuery({
    videoId,
  });

  return (
    <>
      <div className="p-6 max-w-4xl mx-auto">
        <VideoComponent videoLink={getVideoLinkQuery.data?.result?.videoLink} />
      </div>
    </>
  );
}
