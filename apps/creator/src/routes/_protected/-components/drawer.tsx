"use client";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from "@heroui/drawer";
import {
  Accordion,
  AccordionItem,
  addToast,
  Avatar,
  Button,
  Card,
  Divider,
  Skeleton,
  useDisclosure,
} from "@heroui/react";
import { axiosInstance } from "@repo/lib/utils";
import { backend, type TBackendOutput } from "@repo/trpc/react";
import { DrawerProfileHeader } from "@repo/ui";
import { imageInputPlaceholder } from "@repo/ui/assets";
import { FaCaretLeft } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { AddEditor } from "../-modals/addEditor";
import { DeleteEditor } from "../-modals/deleteEditor";
import { signOut, useSession } from "../../../lib/authActions";

export default function DrawerComponent() {
  const { data } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = data?.user;

  const userDetailsQuery = backend.db.getUserWithEditors.useQuery(
    {
      userId: user?.id || "",
    },
    {
      enabled: !!user,
    },
  );
  type TData = TBackendOutput["db"]["getUserWithEditors"]["result"];
  const userDetails: TData = userDetailsQuery.data?.result;
  async function handleAddChannel() {
    try {
      const res = await axiosInstance.get(`/getAuthUrl`);
      const authUrl = res.data.authUrl;
      if (!authUrl) {
        addToast({
          description: "Failed to add channel",
          color: "danger",
        });
        return;
      }
      window.open(authUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.log("Error adding channel:", error);
      addToast({
        description: "Error adding channel",
        color: "danger",
      });
    }
  }
  if (!user) {
    return;
  }
  return (
    <>
      <Button
        onPress={onOpen}
        className="flex items-center justify-end sm:justify-center px-0 sm:px-2 gap-2 bg-transparent hover:bg-gray-500 hover:text-white transition py-1 rounded-md min-w-fit"
      >
        <Avatar className="md:h-7 md:w-7" src={user.image as string} fallback />
        <span className="capitalize hidden sm:inline text-sm mt-1">
          {user.name}
        </span>
      </Button>

      <Drawer
        className="h-screen max-w-5xl left-0"
        placement="left"
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="justify-between pr-10">
                <strong>Workspace</strong>
              </DrawerHeader>
              <DrawerBody>
                {user ? (
                  <>
                    <DrawerProfileHeader
                      user={user}
                      handleLogout={() =>
                        signOut({
                          fetchOptions: {
                            onSuccess() {
                              window.location.href = `${import.meta.env.VITE_CREATOR_BASE_URL}/auth`;
                            },
                          },
                        })
                      }
                    />

                    <Accordion selectionMode="multiple">
                      <AccordionItem
                        aria-label="Accordion 1"
                        title="Editors"
                        className="birder-4 border-t-0 border-l-0 border-r-0 border-b-2 border-black dark:border-white"
                        classNames={{
                          title: ["text-[26px] font-semibold"],
                        }}
                        indicator={<FaCaretLeft fill="currentColor" />}
                      >
                        <div className="flex items-center justify-between px-5">
                          <div></div>
                          {userDetails && userDetails.editors.length === 0 && (
                            <p className="text-sm text-gray-500">
                              No editors added yet
                            </p>
                          )}

                          {user.id && <AddEditor creator={user} />}
                        </div>
                        <div className="flex gap-4 items-center flex-wrap p-4">
                          {userDetails &&
                            userDetails.editors.map(
                              (editorObj: { editor: any }) => {
                                const editor = editorObj.editor;
                                return (
                                  <div
                                    className="flex justify-between items-center w-full"
                                    key={editor.id}
                                  >
                                    <div
                                      className="flex gap-4 items-center pl-10"
                                      key={editor.id}
                                    >
                                      <Avatar
                                        className="h-20 w-20"
                                        src={
                                          editor.image || imageInputPlaceholder
                                        }
                                        fallback
                                      />
                                      <ul>
                                        <span className="capitalize text-xl">
                                          {editor.name}
                                        </span>
                                        <p className="text-sm text-gray-500">
                                          {editor.email}
                                        </p>
                                      </ul>
                                    </div>
                                    <DeleteEditor
                                      editorEmail={editor.email}
                                      editorId={editor.id}
                                      creatorId={user.id}
                                    />
                                  </div>
                                );
                              },
                            )}
                        </div>
                      </AccordionItem>
                      <AccordionItem
                        key="channels"
                        aria-label="Accordion 2"
                        title="Channels"
                        className="birder-4 border-t-0 border-l-0 border-r-0 border-b-2 border-black dark:border-white"
                        classNames={{
                          title: ["text-[26px] font-semibold"],
                        }}
                        indicator={<FaCaretLeft fill="currentColor" />}
                      >
                        <div className="flex items-center justify-end px-5">
                          <Button
                            className=" self-end"
                            endContent={<MdAdd />}
                            size="sm"
                            color="primary"
                            onPress={handleAddChannel}
                          >
                            Add Channel
                          </Button>
                        </div>
                        <div className="flex gap-4 items-center flex-wrap p-4">
                          {userDetails &&
                            userDetails.channels.map((channel) => (
                              <a
                                href={`https://www.youtube.com/channel/${channel.ytChannelId}`}
                                className="flex gap-4 items-center pl-10"
                                key={channel.id}
                              >
                                <Avatar
                                  className="h-14 w-14"
                                  src={channel.logoUrl}
                                  fallback
                                />
                                <span className="capitalize text-[22px]">
                                  {channel?.name}
                                </span>
                              </a>
                            ))}
                        </div>
                      </AccordionItem>
                    </Accordion>
                  </>
                ) : (
                  <>
                    <Card className="p-4 mb-6 bg-[#111]">
                      <div className="flex items-center gap-4">
                        <Skeleton className="rounded-full w-12 h-12" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-3/4 rounded-md" />
                          <Skeleton className="h-3 w-1/2 rounded-md" />
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Skeleton className="h-4 w-20 rounded-md" />
                      </div>
                    </Card>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Skeleton className="h-4 w-20 rounded-md" />
                        <Skeleton className="h-4 w-4 rounded-md" />
                      </div>
                      <Divider className="bg-gray-700" />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Skeleton className="h-4 w-20 rounded-md" />
                        <Skeleton className="h-4 w-4 rounded-md" />
                      </div>
                      <Divider className="bg-gray-700" />
                    </div>
                  </>
                )}
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
