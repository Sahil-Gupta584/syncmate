"use client";
import { Skeleton } from "@heroui/react";

export default function VideoComponent({
  videoLink,
}: {
  videoLink: string | undefined;
}) {
  return (
    <div className="rounded-lg overflow-hidden  shadow-[0px_0px_7px_-2px_gray]  ">
      {videoLink ? (
        <iframe
          src={videoLink}
          allow="autoplay"
          className="w-full h-[228px] sm:h-[340px] md:h-[548px]  rounded-md"
        ></iframe>
      ) : (
        <Skeleton className="w-full h-[228px] sm:h-[340px] lg:h-[548px] shadow-md rounded-md" />
      )}
    </div>
  );
}
