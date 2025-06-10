import { actionsRoutes } from "./actions/actions.ts";
import { dbActionsRoutes } from "./dbActions/dbActions.ts";
import { trpcRouter } from "./trpc.ts";

export const appRouter = trpcRouter({
  db: dbActionsRoutes,
  action: actionsRoutes,
});

export type AppRouter = typeof appRouter;
