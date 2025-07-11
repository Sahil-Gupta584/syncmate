import { createFileRoute } from "@tanstack/react-router";

import { AuthPage } from "@repo/ui";
import { signIn } from "../lib/authActions";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

export default function RouteComponent() {
  return (
    <AuthPage
      role="CREATOR"
      onClick={async () => {
        await signIn.social({
          provider: "google",
          callbackURL: import.meta.env.VITE_CREATOR_BASE_URL,
        });
      }}
    />
  );
}
