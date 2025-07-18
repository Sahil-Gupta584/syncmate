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
              <ModalHeader className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
                Why We Ask for Permissions
              </ModalHeader>
              <ModalBody className="text-sm text-gray-700 dark:text-gray-200 space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  To give you the best content creation experience, we request
                  access to the following services:
                </p>
                <ul className="space-y-3">
                  <li>
                    ✅ <strong>YouTube Upload</strong> — to let you publish
                    videos directly from our platform to your YouTube channel.
                    <br />
                    <span className="text-xs text-gray-500">
                      (*Scope: <code>youtube.upload</code>*)
                    </span>
                  </li>
                  <li>
                    ✅ <strong>Google Drive (your files only)</strong> — to
                    store assets like thumbnails, video drafts, and documents
                    for your content.
                    <br />
                    <span className="text-xs text-gray-500">
                      (*Scope: <code>drive.file</code>*)
                    </span>
                  </li>
                  <li>
                    ✅ <strong>YouTube Channel Audit</strong> — to verify your
                    channel for analytics, auto-tagging, and performance tools.
                    <br />
                    <span className="text-xs text-gray-500">
                      (*Scope: <code>youtubepartner-channel-audit</code>*)
                    </span>
                  </li>
                </ul>

                <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-md border border-gray-200 dark:border-gray-700 text-sm">
                  <p>
                    🔒 <strong>You're always in control.</strong> You can revoke
                    access at any time via your Google account permissions.
                  </p>
                  <p>
                    ☁️ <strong>Coming soon:</strong> You’ll be able to switch to
                    our built-in cloud storage with more privacy & faster
                    uploads on our paid plan.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="light"
                  onPress={() => {
                    setIsLoading(true);
                    onClose();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    setIsLoading(true);
                    onGo();
                  }}
                  isLoading={isLoading}
                >
                  Continue with Google
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
