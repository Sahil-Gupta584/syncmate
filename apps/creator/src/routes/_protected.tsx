import { axiosInstance } from "@repo/lib/utils";
import { Header } from "@repo/ui";
import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import moment from "moment";
import { useEffect } from "react";
import z from "zod";
import { useSession } from "../lib/authActions";
import DrawerComponent from "./_protected/-components/drawer";

export const Route = createFileRoute("/_protected")({
  component: Home,
  validateSearch: z.object({
    redirectTo: z.string().optional(),
  }),
});

export default function Home() {
  const { data, isPending } = useSession();
  const navigate = useNavigate();
  const search = Route.useSearch();

  const {
    location: { pathname },
  } = useRouterState();
  const routesToHide = ["/auth", "/checkout"];

  // 1. Redirect to login if not authenticated
  useEffect(() => {
    if (search.redirectTo) {
      navigate({ to: search.redirectTo });
    }
    if (isPending) return;

    if (!data) {
      navigate({ to: "/auth" });
    } else if (data && pathname === "/auth") {
      navigate({ to: "/" });
    }
  }, [isPending, data, pathname, navigate]);

  // 2. Redirect if trial expired
  useEffect(() => {
    if (!data || isPending) return;

    const isTrialExpired =
      data.user.plan === "TRIAL" &&
      Number(data.user.trialEndAt) < moment().unix();

    if (
      isTrialExpired &&
      pathname !== "/blocked/trial-expired" &&
      pathname !== "/checkout"
    ) {
      navigate({ to: "/blocked/trial-expired" });
    }
  }, [data, isPending, pathname, navigate]);

  // 3. Redirect if payment inactive (only after trial check passes)
  useEffect(() => {
    if (!data || isPending) return;

    const isTrialExpired =
      data.user.plan === "TRIAL" &&
      Number(data.user.trialEndAt) < moment().unix();

    // ✅ Only call if trial is NOT expired
    if (!isTrialExpired) {
      axiosInstance
        .post(`/isPaymentActive`, { userId: data.user.id })
        .then((res) => {
          if (!res.data.isPaymentActive && pathname !== "/checkout") {
            navigate({ to: "/blocked/payment-failed" });
          }
        });
    }
  }, [data, isPending, pathname, navigate]);

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
