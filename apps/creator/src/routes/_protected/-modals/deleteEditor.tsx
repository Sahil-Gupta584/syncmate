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
import { trpcErrorHandler } from "@repo/lib/utils";
import { backend } from "@repo/trpc2/react";
import { MdDelete } from "react-icons/md";
import type { User } from "../../../lib/authActions";

export function DeleteEditor({
  editor,
  creatorId,
}: {
  editor: User;
  creatorId: string;
}) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const removeEditorMutation = backend.db.removeEditor.useMutation();

  const onDelete = async () => {
    try {
      const res = await removeEditorMutation.mutateAsync({
        editorId: editor.id,
        creatorId,
      });
      if (res.ok) {
        addToast({
          description: `Editor ${editor.email} removed successfully`,
          color: "success",
        });
        onClose();
        return;
      }
      addToast({
        description: "Failed to remove editor",
        color: "danger",
      });
    } catch (error) {
      trpcErrorHandler(error);
    }
  };

  return (
    <>
      <Button
        color="danger"
        variant="flat"
        endContent={<MdDelete />}
        onPress={onOpen}
      >
        Remove
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Remove Editor</ModalHeader>
              <ModalBody>
                <p>
                  Are you sure you want to remove editor{" "}
                  <span className="font-semibold text-gray-500">
                    {" "}
                    {editor.email}
                  </span>{" "}
                  ?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  isLoading={removeEditorMutation.isPending}
                  onPress={onDelete}
                >
                  Remove
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
