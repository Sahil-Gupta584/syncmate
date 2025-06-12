"use client";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@heroui/drawer";
import { Avatar, Button, useDisclosure } from "@heroui/react";
import { backend } from "@repo/trpc/react";
import { DrawerProfileHeader } from "@repo/ui";
import { signOut, useSession, type User } from "../../../lib/authActions";

export default function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data } = useSession();
  const user = data?.user;

  const getCreatorsQuery = backend.db.getEditorCreators.useQuery(
    {
      editorId: user?.id || "",
    },
    {
      enabled: !!user,
    },
  );
  const creators =
    getCreatorsQuery.data && getCreatorsQuery.data.result?.creators;

  return (
    <>
      <Button
        onPress={onOpen}
        className="flex items-center justify-end sm:justify-center px-0 sm:px-2 gap-2 bg-transparent hover:bg-gray-500 hover:text-white transition py-1 rounded-md min-w-fit "
      >
        {user && (
          <>
            <Avatar
              className="md:h-7 md:w-7 "
              src={user.image as string}
              fallback
            />
            <span className="capitalize hidden sm:inline text-sm  mt-1">
              {user.name}
            </span>
          </>
        )}
      </Button>

      <Drawer
        className=" h-screen max-w-5xl left-0  "
        placement="left"
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="justify-between pr-10">
                <strong>Joined Creators</strong>
              </DrawerHeader>
              <DrawerBody>
                {user && (
                  <DrawerProfileHeader
                    user={user}
                    handleLogout={() =>
                      signOut({
                        fetchOptions: {
                          onSuccess() {
                            window.location.href = `${import.meta.env.VITE_EDITOR_BASE_URL}/auth`;
                          },
                        },
                      })
                    }
                  />
                )}
                {creators && creators.length === 0 && (
                  <p className="text-sm text-gray-500 text-center">
                    No Creators joined yet
                  </p>
                )}
                <div className="flex gap-4 items-center flex-wrap p-4">
                  {creators &&
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (creators as any).map(
                      ({ creator }: { creator: User }, i: number) => (
                        <div key={creator.id}>
                          <div className="flex justify-between items-center w-full ">
                            <div
                              className="flex gap-4 items-center pl-10"
                              key={creator.id}
                            >
                              <Avatar
                                className="h-20 w-20"
                                src={creator.image || undefined}
                                fallback
                              />
                              <ul>
                                <span className="capitalize text-xl">
                                  {creator.name}
                                </span>
                                <p className="text-sm text-gray-500">
                                  {creator.email}
                                </p>
                              </ul>
                            </div>
                          </div>
                          {i !== 0 && (
                            <div className="h-[1px] bg-gray-300 w-full my-4" />
                          )}
                        </div>
                      ),
                    )}
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
