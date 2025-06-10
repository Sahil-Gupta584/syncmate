"use client";
import {
  addToast,
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import { getVideoDuration, trpcErrorHandler } from "@repo/lib/utils";
import type { TBackendOutput } from "@repo/trpc/react";
import { ImportButton } from "@repo/ui";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
type TImportVideo = {
  videoFile: FileList;
  creatorId: string;
};
export type TUserDetails = TBackendOutput["db"]["getEditorVideos"]["result"];

export default function ImportVideo({
  userDetails,
}: {
  userDetails: TUserDetails;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<TImportVideo>();

  const videoFile = watch("videoFile");

  const onSubmit = async (data: TImportVideo) => {
    try {
      if (!userDetails) {
        addToast({ color: "danger", description: "Unauthenticated" });
        return;
      }
      if (!data.videoFile[0]) {
        addToast({ color: "danger", description: "Video file is required" });
        return;
      }
      const duration = await getVideoDuration(data.videoFile[0]);
      const formData = new FormData();
      formData.append("videoFile", data.videoFile[0]); // must be "video" to match multer
      formData.append("importerId", userDetails.id);
      formData.append("ownerId", userDetails.id);
      formData.append("duration", duration);
      formData.append(
        "selectedEditorEmails",
        JSON.stringify([userDetails.email])
      );
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/import-video`,
        formData
      );

      if (res.data.ok) {
        addToast({
          color: "success",
          title: "Video Imported Successfully!",
        });
        onClose();
        return;
      }
      addToast({ color: "danger", description: "Error uploading video" });
    } catch (error) {
      trpcErrorHandler(error);
    }
  };

  return (
    <>
      <ImportButton onPress={onOpen} />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Import Video
              </ModalHeader>
              <ModalBody className="space-y-4 ">
                {/* Upload Field */}
                <label className="border-dashed border-2 border-gray-300 p-10 flex flex-col items-center justify-center text-gray-500 cursor-pointer">
                  <FaUpload className="text-3xl mb-2" />
                  <span className="text-sm">
                    Click to upload or drag and drop
                  </span>
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    {...register("videoFile", {
                      required: {
                        value: true,
                        message: "Video File is required",
                      },
                    })}
                  />
                </label>
                {videoFile?.[0] && (
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Selected file: {videoFile[0].name}
                  </p>
                )}

                <Select
                  classNames={{
                    label: "group-data-[filled=true]:-translate-y-5 top-[24px]",
                    trigger: "min-h-16",
                    listboxWrapper: "max-h-[400px]",
                  }}
                  items={userDetails?.creators}
                  defaultSelectedKeys={
                    userDetails?.creators && userDetails?.creators.length > 1
                      ? []
                      : [userDetails?.creators[0]?.creatorId as string]
                  }
                  label="Select a Creator"
                  listboxProps={{
                    itemClasses: {
                      base: [
                        "rounded-md",
                        "text-default-500",
                        "transition-opacity",
                        "data-[hover=true]:text-foreground",
                        "data-[hover=true]:bg-default-100",
                        "dark:data-[hover=true]:bg-default-50",
                        "data-[selectable=true]:focus:bg-default-50",
                        "data-[pressed=true]:opacity-70",
                        "data-[focus-visible=true]:ring-default-500",
                      ],
                    },
                  }}
                  popoverProps={{
                    classNames: {
                      base: "before:bg-default-200",
                      content: "p-0 border-small border-divider bg-background",
                    },
                  }}
                  renderValue={(creators) => {
                    console.log({ creators });

                    return creators.map((creator) => (
                      <div
                        key={creator.key}
                        className="flex items-center gap-2 "
                      >
                        <Avatar
                          alt={creator.data?.creator.name}
                          className="flex-shrink-0"
                          size="sm"
                          src={creator.data?.creator.image || undefined}
                        />
                        <div className="flex flex-col">
                          <span>{creator.data?.creator.name}</span>
                        </div>
                      </div>
                    ));
                  }}
                  variant="bordered"
                  {...register("creatorId", {
                    required: {
                      value: true,
                      message: "Creator is required",
                    },
                  })}
                >
                  {({ creator }) => (
                    <SelectItem key={creator.id} textValue={creator.name}>
                      <div className="flex gap-2 items-center">
                        <Avatar
                          alt={creator.name}
                          className="flex-shrink-0"
                          size="sm"
                          src={creator.image || undefined}
                        />
                        <div className="flex flex-col">
                          <span className="text-small">{creator.name}</span>
                          <span className="text-tiny text-default-400">
                            {creator.email}
                          </span>
                        </div>
                      </div>
                    </SelectItem>
                  )}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  isLoading={isSubmitting}
                  color="primary"
                  type="submit"
                  disabled={!videoFile}
                >
                  Upload
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
