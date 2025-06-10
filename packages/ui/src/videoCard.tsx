import { type TRole } from "@repo/lib/constants";
import { formatDuration } from "@repo/lib/utils";
import { type LinkComponent } from "@tanstack/react-router";
import { imageInputPlaceholder } from "../assets/index.ts";
import Tag from "./tag.tsx";
import VideoDropdown, { type TVideoDropdownProps } from "./videoDropdown.tsx";

type VideoCardRawProps = {
  video: any;
};

export default function VideoCard({
  video,
  LinkComponent,
  role,
  handleDeleteVideo,
  isDeleting,
}: VideoCardRawProps & {
  LinkComponent: LinkComponent<"a", string>;
  role: TRole;
} & Partial<TVideoDropdownProps>) {
  return (
    <div
      className="relative cursor-pointer hover:translate-y-[-3px] transition-all duration-300"
      key={video.id}
    >
      <LinkComponent
        to="/video/$videoId"
        params={{ videoId: video.id }}
        className="block outline-none "
      >
        <VideoCardRaw video={video} />
      </LinkComponent>
      <VideoDropdown
        title={video.title as string}
        videoId={video.id}
        userRole={role}
        className="video-dropdown absolute top-[51vw] sm:top-[27vw] lg:top-[18vw] xl:top-[11rem] right-2 z-10"
        CREATOR_BASE_URL={import.meta.env.VITE_CREATOR_BASE_URL as string}
        handleDeleteVideo={handleDeleteVideo}
        isDeleting={isDeleting}
      />
    </div>
  );
}

function VideoCardRaw({ video }: VideoCardRawProps) {
  // Format duration if available (YouTube style)
  const formattedDuration = formatDuration(video.duration); // Example placeholder - replace with actual duration from video if available

  return (
    <div className=" w-full flex flex-col group">
      <div className="relative w-full">
        <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-400">
          <img
            src={video.thumbnailUrl || imageInputPlaceholder}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Duration indicator (YouTube style) */}
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs font-medium px-1 rounded">
          {formattedDuration || "0:0"}
        </div>
      </div>

      {/* Content area (YouTube style) */}
      <div className="mt-3 flex">
        {/* Channel logo */}
        <div className="flex-shrink-0 mr-3">
          <img
            className="w-9 h-9 rounded-full object-cover bg-gray-100 dark:bg-neutral-700"
            src={video.channel ? video.channel.logoUrl : imageInputPlaceholder}
            alt={video.channel ? video.channel.name : "Channel"}
          />
        </div>

        {/* Video details */}
        <div className="flex-grow min-w-0">
          {/* Title - with hover effect */}
          <h3
            className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2 mb-1 group-hover:text-blue-500 transition-colors"
            title={video.title as string}
          >
            {video.title}
          </h3>

          {/* Channel name */}
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {video.channel ? video.channel.name : "None"}
          </p>

          {/* Meta info with tag moved here */}
          <div className="flex items-center justify-between mt-1">
            <span className="text-xs text-gray-600 dark:text-gray-400">
              By: {video.importedBy.name}
            </span>
            <Tag text={video.videoStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}
