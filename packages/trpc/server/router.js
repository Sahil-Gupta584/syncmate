import { actionsRoutes } from "./actions/actions";
import { dbActionsRoutes } from "./dbActions/dbActions";
import { trpcRouter } from "./trpc";
export const appRouter = trpcRouter({
    db: dbActionsRoutes,
    action: actionsRoutes,
});
