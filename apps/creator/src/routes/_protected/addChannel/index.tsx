import { addToast } from "@heroui/react";
import { backend } from "@repo/trpc/react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { useSession } from "../../../lib/authActions";
export const Route = createFileRoute("/_protected/addChannel/")({
  component: Page,
  validateSearch: z.object({
    code: z.string(), // Accepts ?code=... or no param
  }),
});

function Page() {
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const navigate = useNavigate();
  const search = Route.useSearch();
  const { data, isPending } = useSession();
  const addChannelMutation = backend.db.addChannel.useMutation();
  const backendUtils = backend.useUtils();

  useEffect(() => {
    const handleChannelAdd = async () => {
      try {
        if (isPending) return;
        if (!("code" in search) || !data?.user?.id) {
          setErrorMessage("Missing code or user ID. Please try again.");
          return;
        }

        const code = search.code;
        console.log({ code });
        const res = await addChannelMutation.mutateAsync({
          code: code as string,
          userId: data.user.id,
        });

        if (res?.ok) {
          navigate({ to: "/" });
          addToast({
            description: "New Channel Added!",
            color: "danger",
          });
          backendUtils.db.getUserWithEditors.invalidate();
        } else {
          setErrorMessage("Failed to add channel. Please try again.");
        }
      } catch (error) {
        console.error("Error adding channel:", error);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    };

    handleChannelAdd();
  }, [isPending, search, data, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {addChannelMutation.isPending && <p>Verifying...</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
