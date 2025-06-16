import { addToast, Avatar, Button, Skeleton } from "@heroui/react";
import { backend } from "@repo/trpc/react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { signIn, useSession } from "../../../../lib/authActions";

export const Route = createFileRoute("/_protected/invite/$inviteId/")({
  component: Page,
});

function Page() {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { data, isPending } = useSession();
  const navigate = useNavigate();
  const { inviteId } = Route.useParams();
  const inviteDetailsQuery = backend.db.getInviteDetails.useQuery({ inviteId });
  const inviteDetails = inviteDetailsQuery.data;
  const handleAcceptInviteMutation =
    backend.db.handleAcceptInvite.useMutation();
  useEffect(() => {
    if (
      inviteDetails &&
      inviteDetails.result &&
      !inviteDetails.ok &&
      inviteDetails.error
    ) {
      addToast({ description: "Unknown error occurred", color: "danger" });
      setErrorMessage(inviteDetails.error);
    }
    if (inviteDetailsQuery.error) {
      setErrorMessage(inviteDetailsQuery.error.message);
    }
  }, [inviteId, isPending, inviteDetailsQuery]);

  async function handlePress() {
    try {
      setIsLoading(true);
      if (!data?.user || !data?.user.id) {
        await signIn.social({
          provider: "google",
          callbackURL: `${import.meta.env.VITE_EDITOR_BASE_URL}/invite/${inviteId}`,
        });
        return;
      }

      if (data?.user.id) {
        const res = await handleAcceptInviteMutation.mutateAsync({
          editorId: data?.user.id,
          inviteId,
        });

        if (res.ok) {
          addToast({
            description: "Invite accepted successfully!",
            color: "success",
          });
          navigate({ to: "/" });
        }

        if (!res.ok && res.error) {
          addToast({
            description: "Unknown error occurred",
            color: "danger",
          });
        }
      }
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      addToast({
        description: "Something went wrong, please try again later",
        color: "danger",
      });
    }
  }
  return (
    <>
      <section className="min-h-screen flex justify-between  flex-col items-center">
        <nav className="flex items-center justify-between p-6 w-full ">
          <p className="md:text-2xl text-xl">Syncly</p>
          <Link
            to="/"
            className="text-gray-400 text-large light:hover:text-black dark:hover:text-white transition cursor-pointer"
          >
            No Thanks
          </Link>
        </nav>
        {inviteDetails && inviteDetails.result && (
          <form className="flex flex-col items-center gap-4">
            <Avatar
              className="h-36 w-36"
              src={inviteDetails.result.creator.image || undefined}
              fallback
            />

            <p className="text-[28px] font-thin text">
              Join the the {inviteDetails.result.creator.name}'s Workspace on
              Syncly
            </p>
            <Button
              className="bg-primary text-[20px] text-white"
              isLoading={isLoading}
              onPress={handlePress}
            >
              Accept Invite
            </Button>
          </form>
        )}
        {!inviteDetails && !errorMessage && (
          <>
            <div className="flex flex-col items-center gap-6 mt-8">
              <Skeleton className="h-36 w-36 rounded-full" />
              <Skeleton className="h-10 w-[47rem] rounded-lg" />
              <Skeleton className="h-12 w-32 rounded-xl" />
            </div>
          </>
        )}
        {errorMessage && (
          <div className="flex flex-col items-center gap-6 mt-8">
            <p className="text-red-500">{errorMessage}</p>
          </div>
        )}
        <div></div>
        <div></div>
      </section>
    </>
  );
}

export default Page;
