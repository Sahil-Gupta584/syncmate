"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import type { TRole } from "@repo/lib/constants";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

type TAuthPageProps = { role: TRole; onClick: () => void };

export default function AuthPage({ onClick, role }: TAuthPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-md p-8 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-6">
          Login as{" "}
          <span className="text-indigo-600 dark:text-indigo-400">{role}</span>
        </h1>

        <AuthConfirmationModal onGo={onClick} role={role} />

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Secure login powered by Google OAuth
        </p>

        <div className="m-2 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {role === "EDITOR" ? "CREATOR" : "EDITOR"}? &nbsp;
            <a
              href={`${
                role === "CREATOR"
                  ? import.meta.env.VITE_EDITOR_BASE_URL
                  : import.meta.env.VITE_CREATOR_BASE_URL
              }/auth`}
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
            >
              Come here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function AuthConfirmationModal({
  onGo,
  role,
}: {
  onGo: () => void;
  role: TRole;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (role !== "CREATOR") {
    // No modal for EDITOR; direct login
    return (
      <Button
        variant="bordered"
        className="flex items-center gap-3 px-6 py-3 text-lg font-medium text-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200 ease-in-out"
        onPress={onGo}
      >
        <FcGoogle className="text-2xl" />
        Sign in with Google
      </Button>
    );
  }

  return (
    <>
      <Button
        variant="bordered"
        className="flex items-center gap-3 px-6 py-3 text-lg font-medium text-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200 ease-in-out"
        onPress={onOpen}
      >
        <FcGoogle className="text-2xl" />
        Sign in with Google
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center gap-2 text-green-600 dark:text-green-400">
                Permissions Required
              </ModalHeader>
              <ModalBody className="text-sm text-gray-800 dark:text-gray-200 space-y-3">
                <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-md border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-yellow-800 dark:text-green-300 mb-2">
                    Please review the following before proceeding:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      Grant access to{" "}
                      <span className="font-medium">Google Drive</span> and{" "}
                      <span className="font-medium">YouTube</span>.
                    </li>
                    <li>
                      You can{" "}
                      <span className="text-danger-600 dark:text-danger-400 font-medium">
                        revoke permissions
                      </span>{" "}
                      anytime from your account settings.
                    </li>
                    <li>
                      Drive storage can be switched to our cloud storage once
                      you’re on a{" "}
                      <span className="text-primary-600 dark:text-green-400 font-semibold">
                        paid plan
                      </span>
                      .
                    </li>
                  </ul>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setIsLoading(true);
                    onClose();
                  }}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    setIsLoading(true);
                    onGo();
                  }}
                  isLoading={isLoading}
                >
                  Go
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
