"use client";
import {
  addToast,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import axios from "axios";

import { type HTMLAttributes, useState } from "react";
export type TVideoDropdownProps = {
  title: string;
  handleDeleteVideo: (
    e: React.FormEvent<HTMLFormElement>,
    onClose: () => void,
    videoId: string
  ) => void;

  isDeleting: boolean;
};
export default function VideoDropdown({
  videoId,
  title,
  userRole,
  className,
  CREATOR_BASE_URL,
  handleDeleteVideo,
  isDeleting,
}: {
  title?: string;
  videoId: string;
  userRole: "CREATOR" | "EDITOR";
  className?: HTMLAttributes<HTMLElement>["className"];
  CREATOR_BASE_URL: string;
} & Partial<TVideoDropdownProps>) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function onDownload() {
    try {
      setIsDownloading(true);

      const res = await axios.get(
        `${CREATOR_BASE_URL}/api/download/${videoId}`,
        { responseType: "blob" }
      );

      addToast({
        description: "Video download started successfully.",
        color: "success",
      });

      const url = window.URL.createObjectURL(res.data);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${title}.mp4`;
      a.style.display = "none";

      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
      setIsDownloading(false);
    } catch (error) {
      addToast({
        description: "Failed to download video",
        color: "danger",
      });
      console.log("error in onDownload", error);
    }
  }

  return (
    <>
      <div className={className}>
        <Dropdown
          closeOnSelect={false}
          classNames={{ content: ["dark:bg-[#4d4d4d] "] }}
        >
          <DropdownTrigger>
            <button
              className="p-1 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 rotate-90 self-end mb-2 transition"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600   dark:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
              </svg>
            </button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            disabledKeys={isDownloading ? ["download"] : []}
            className="z-10"
          >
            <DropdownItem key="download" className="text-lg p-0 pl-2">
              <Button
                isLoading={isDownloading}
                onPress={onDownload}
                startContent={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-200  dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 10l5 5 5-5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v11"
                    />
                  </svg>
                }
                className="bg-transparent p-0"
              >
                Download
              </Button>
            </DropdownItem>
            {userRole === "CREATOR" &&
            handleDeleteVideo &&
            isDeleting !== undefined ? (
              <DropdownItem
                key="delete"
                startContent={
                  <svg
                    className="w-6 h-6 text-red-600 hover:text-red-700 transition"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2m2 0V5a1 1 0 011-1h4a1 1 0 011 1v2"
                    />
                  </svg>
                }
                className="text-red-300"
              >
                <DeleteVideoModal
                  title={title as string}
                  handleDeleteVideo={handleDeleteVideo}
                  isDeleting={isDeleting}
                  videoId={videoId}
                />
              </DropdownItem>
            ) : null}
          </DropdownMenu>
        </Dropdown>
      </div>
    </>
  );
}

function DeleteVideoModal({
  title,
  handleDeleteVideo,
  isDeleting,
  videoId,
}: TVideoDropdownProps & { videoId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <p onClick={onOpen}> Delete Video</p>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{ wrapper: ["z-[100000]"] }}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={(e) => handleDeleteVideo(e, onClose, videoId)}>
              <ModalHeader className="flex flex-col gap-1">
                Delete Video
              </ModalHeader>
              <ModalBody className="space-y-4 ">
                <p className="text-gray-600 dark:text-gray-300 ">
                  Are you sure you want to delete this video? This action is
                  irreversible.
                </p>
                <section>
                  <strong className="text-lg">Video:-</strong>
                  <p>
                    <span>Title:</span> &nbsp;
                    {title}
                  </p>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button isLoading={isDeleting} color="primary" type="submit">
                  Delete
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
