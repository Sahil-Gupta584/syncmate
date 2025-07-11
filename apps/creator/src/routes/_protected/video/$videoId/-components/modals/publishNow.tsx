"use client";
import {
  addToast,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { axiosInstance, trpcErrorHandler } from "@repo/lib/utils";
import { backend } from "@repo/trpc/react";
import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
export default function PublishNow({
  isEditing,
  videoId,
  status,
}: {
  isEditing: boolean;
  videoId: string;
  status: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const backendUtils = backend.useUtils();
  async function handlePublishNow() {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post(`/schedule-video/${videoId}`, {
        videoId,
        scheduleAt: null,
        isPublishNow: true,
      });
      if (res.data.ok) {
        addToast({
          color: "success",
          description: "Video Publishing Started!",
        });
        return;
      }
      addToast({
        color: "danger",
        description: "Failed to publish video. Please try again later.",
      });
    } catch (error) {
      trpcErrorHandler(error);
    } finally {
      setIsLoading(false);
      backendUtils.db.getVideoDetails.invalidate();
      onClose();
    }
  }
  return (
    <>
      <Button
        className="grow tracking-[1px] font-semibold text-[16px] p-6"
        color="primary"
        startContent={<MdOutlineFileUpload />}
        onPress={onOpen}
        type="submit"
        isDisabled={isEditing || status !== "DRAFT"}
      >
        Publish Now
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Confirmation
              </ModalHeader>
              <ModalBody>
                Are you sure you want to publish this video now? Have you set
                all important detail for video?
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  isLoading={isLoading}
                  color="primary"
                  onPress={handlePublishNow}
                >
                  Publish Now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
