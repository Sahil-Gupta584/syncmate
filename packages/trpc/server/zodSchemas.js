import { actionsZodSchema } from "./actions/schema";
import { dbActionsZodSchema } from "./dbActions/schema";
export const serverZodSchemas = {
    actionsZodSchema,
    dbActionsZodSchema,
};
