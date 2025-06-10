import { createTRPCReact } from "@trpc/react-query";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "../server/router";

export const backend = createTRPCReact<AppRouter>();
export type TBackendInput = inferRouterInputs<AppRouter>;
export type TBackendOutput = inferRouterOutputs<AppRouter>;
