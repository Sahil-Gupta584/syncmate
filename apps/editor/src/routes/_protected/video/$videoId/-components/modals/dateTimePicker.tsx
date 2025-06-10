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
import { backend } from "@repo/trpc2/react";
import axios from "axios";
import moment from "moment";
import { useForm } from "react-hook-form";
import { MdSchedule } from "react-icons/md";
import type { TVideoDetails } from "../..";

type TDateTimePicker = {
  isEditing: boolean;
  videoDetails: NonNullable<TVideoDetails>;
};

export function DateTimePicker({ isEditing, videoDetails }: TDateTimePicker) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useForm<{ scheduledAt: string }>({
    defaultValues: {
      scheduledAt: videoDetails.scheduledAt
        ? moment.unix(videoDetails.scheduledAt).format("YYYY-MM-DDTHH:mm")
        : "",
    },
  });

  const scheduledAt = watch("scheduledAt");
  const backendUtils = backend.useUtils();
  async function onSubmit({ scheduledAt }: { scheduledAt: string }) {
    const selectedUnix = moment(scheduledAt).unix();
    const nowUnix = moment().unix();

    if (selectedUnix < nowUnix) {
      addToast({
        color: "warning",
        title: "Oops, we’re not time travelers 🙂",
        description: "Please choose a time in the future.",
      });
      return;
    }

    const bufferMinutes = 15;
    if (selectedUnix < nowUnix + bufferMinutes * 60) {
      addToast({
        color: "warning",
        description: `Scheduled time must be at least ${bufferMinutes} minutes ahead.`,
      });
      return;
    }

    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/schedule-video/${videoDetails.id}`,
      {
        scheduleAt: selectedUnix,
        isPublishNow: false,
      }
    );
    if (res.data.ok) {
      addToast({
        color: "success",
        description: "Video Scheduled Successfully",
      });
      onClose();
    } else {
      addToast({
        color: "danger",
        description: "Unknown error occurred",
      });
    }
    backendUtils.db.getVideoDetails.invalidate();
  }

  return (
    <>
      <Button
        onPress={() => {
          // Reset input to current value on open
          if (videoDetails.scheduledAt) {
            setValue(
              "scheduledAt",
              moment.unix(videoDetails.scheduledAt).format("YYYY-MM-DDTHH:mm")
            );
          }
          onOpen();
        }}
        className="grow tracking-[1px] font-semibold text-[16px] p-6 sm:max-w-[56%]"
        startContent={<MdSchedule className="mb-1" />}
        isDisabled={
          isEditing ||
          isSubmitting ||
          videoDetails.videoStatus === "SCHEDULED" ||
          videoDetails.videoStatus === "SCHEDULING"
        }
        color="primary"
      >
        {scheduledAt ? (
          <span className="md:text-medium">
            <span className="hidden sm:inline">Scheduled at</span>&nbsp;
            {moment(scheduledAt).format("DD/MM/YYYY")} &nbsp;
            {moment(scheduledAt).format("hh:mm A")}
          </span>
        ) : (
          "Schedule"
        )}
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Choose Date and Time
              </ModalHeader>
              <ModalBody>
                <label className="block text-sm font-medium mb-1">
                  Select date and time:
                </label>
                <input
                  type="datetime-local"
                  {...register("scheduledAt", { required: true })}
                  className="w-full border rounded px-3 py-2"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit" isLoading={isSubmitting}>
                  Confirm
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
