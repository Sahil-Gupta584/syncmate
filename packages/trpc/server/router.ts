import { actionsRoutes } from "./actions/actions.js";
import { dbActionsRoutes } from "./dbActions/dbActions.js";
import { trpcRouter } from "./trpc.js";

export const appRouter = trpcRouter({
  db: dbActionsRoutes,
  action: actionsRoutes,
});
export type AppRouter = typeof appRouter;
