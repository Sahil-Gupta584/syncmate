import { Header } from "@repo/ui";
import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { useSession } from "../lib/authActions";
import DrawerComponent from "./_protected/-components/drawer";

export const Route = createFileRoute("/_protected")({
  component: Home,
});

export default function Home() {
  const { data, isPending } = useSession();
  const navigate = useNavigate();
  const {
    location: { pathname },
  } = useRouterState();
  const routesToHide = ["/invite/"];

  useEffect(() => {
    if (isPending) return;
    if (!data) {
      navigate({ to: "/auth" });
      return;
    }
    if (data && pathname === "/auth") {
      navigate({ to: "/" });
      return;
    }

  }, [isPending, data, pathname]);

  return (
    <>
      <Header
        LinkComponent={Link}
        HeaderChild={DrawerComponent}
        routesToHide={routesToHide}
      />
      <Outlet />
    </>
  );
}
