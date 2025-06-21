"use client";
import {
  addToast,
  Avatar,
  Button,
  Checkbox,
  CheckboxGroup,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { axiosInstance, getVideoDuration } from "@repo/lib/utils";
import { backend, type TBackendOutput } from "@repo/trpc/react";
import { ImportButton } from "@repo/ui";
import { imageInputPlaceholder } from "@repo/ui/assets";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";

type TImportVideo = {
  videoFile: FileList;
  channelId?: string;
  editorsId?: string[];
};

export type TUserDetails = TBackendOutput["db"]["getCreatorDetails"]["result"];

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
    setValue,
    formState: { isSubmitting },
  } = useForm<TImportVideo>();
  const backendUtils = backend.useUtils();

  const videoFile = watch("videoFile");
  const selectedChannel = watch("channelId");
  const selectedEditors = watch("editorsId");

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
      if (data.channelId) {
        formData.append("channelId", data.channelId);
      }
      if (userDetails.channels.length === 1) {
        formData.append("channelId", userDetails.channels[0].id);
      }
      if (selectedEditors && selectedEditors.length > 0) {
        formData.append(
          "selectedEditorEmails",
          JSON.stringify(
            (userDetails.editors as { editor: { id: string; email: string } }[])
              .filter((e) => selectedEditors?.includes(e.editor.id))
              .map((e) => e.editor.email),
          ),
        );
      }

      const res = await axiosInstance.post(`/import-video`, formData);

      if (res.data.ok) {
        addToast({
          color: "success",
          title: "Video Imported Successfully!",
        });
        onClose();
        backendUtils.db.getCreatorDetails.invalidate();

        return;
      }
      addToast({ color: "danger", description: "Failed to import video" });
    } catch (error) {
      console.log("error in import video", error);
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

                {/* Channel Selection (Single) */}
                {userDetails && userDetails.channels?.length > 1 && (
                  <div className="space-y-2">
                    <Divider className="bg-gray-400" />
                    <p className=" font-medium">For :</p>
                    <div className="gap-6 flex flex-wrap ">
                      {userDetails &&
                        userDetails.channels.map(
                          (channel: {
                            id: string;
                            logoUrl: string;
                            name: string;
                          }) => (
                            <label
                              key={channel.id}
                              className="flex items-center  cursor-pointer gap-1"
                            >
                              <input
                                type="radio"
                                value={channel.id}
                                {...register("channelId")}
                                checked={selectedChannel === channel.id}
                                onChange={() =>
                                  setValue("channelId", channel.id)
                                }
                              />
                              <Avatar
                                src={channel.logoUrl}
                                fallback
                                className="w-7 h-7 ml-3"
                              />
                              <span className="mt-1">{channel.name}</span>
                            </label>
                          ),
                        )}
                    </div>
                  </div>
                )}

                {/* Editors Selection (Multiple) */}
                {userDetails && userDetails.editors.length > 0 && (
                  <div className="space-y-2">
                    <Divider className="bg-gray-400" />
                    <p className=" font-medium">Can be accessed by:</p>
                    <CheckboxGroup
                      value={selectedEditors}
                      onValueChange={(val) => setValue("editorsId", val)}
                    >
                      {userDetails &&
                        userDetails.editors.map(
                          (editorAssignment: { editor: any }) => {
                            const { editor } = editorAssignment;
                            return (
                              <Checkbox key={editor.id} value={editor.id}>
                                <div className="flex items-center gap-3">
                                  <Avatar
                                    src={editor.image || imageInputPlaceholder}
                                    className="w-7 h-7 ml-3"
                                  />
                                  <span className="mt-1">{editor.name}</span>
                                </div>
                              </Checkbox>
                            );
                          },
                        )}
                    </CheckboxGroup>
                  </div>
                )}
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
