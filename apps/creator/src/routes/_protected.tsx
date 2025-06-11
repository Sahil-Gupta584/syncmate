import { Header } from "@repo/ui";
import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import axios from "axios";
import moment from "moment";
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
  const routesToHide = ["/auth", "/checkout"];

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

    const isTrialExpired =
      data?.user.plan === "TRIAL" &&
      Number(data.user.trialEndAt) < moment().unix();

    if (
      isTrialExpired &&
      pathname !== "/blocked/trial-expired" &&
      pathname !== "/checkout"
    ) {
      navigate({ to: "/blocked/trial-expired" });
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/isPaymentActive`, {
        userId: data?.user.id,
      })
      .then((res) => {
        if (!res.data.isPaymentActive && pathname !== "/checkout") {
          navigate({ to: "/blocked/payment-failed" });
          return;
        }
      });
  }, [isPending]);

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
