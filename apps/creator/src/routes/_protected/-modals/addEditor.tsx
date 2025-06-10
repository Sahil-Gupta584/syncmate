import {
  addToast,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { trpcErrorHandler } from "@repo/lib/utils";
import { backend } from "@repo/trpc2/react";
import { type FormEvent } from "react";
import { MdAdd } from "react-icons/md";
import type { User } from "../../../lib/authActions";

export function AddEditor({ creator }: { creator: User }) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const sendInviteMutation = backend.action.sendInviteLink.useMutation();

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const email = (e.target as HTMLFormElement).email.value;
      const res = await sendInviteMutation.mutateAsync({
        creator,
        editorEmail: email,
      });
      if (res.ok) {
        addToast({
          description: "Invite link sent successfully",
          color: "success",
        });
        onClose();
        return;
      }

      addToast({
        description: "Unknown error occurred",
        color: "danger",
      });
    } catch (error) {
      trpcErrorHandler(error);
    }
  };

  return (
    <>
      <Button
        className=" self-end px-4"
        color="primary"
        endContent={<MdAdd />}
        size="sm"
        onPress={onOpen}
      >
        Add Editor
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="auto"
        // className="bg-[#f6f9ff]"
        isDismissable={false}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {() => (
            <>
              <form onSubmit={onSubmit}>
                <ModalHeader className="flex flex-col gap-1">
                  Add New Editor
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Editor email"
                    placeholder="Enter email here"
                    type="email"
                    variant="bordered"
                    name="email"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    isDisabled={sendInviteMutation.isPending}
                    color="danger"
                    variant="flat"
                    onPress={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    type="submit"
                    isLoading={sendInviteMutation.isPending}
                  >
                    Send Invite
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
