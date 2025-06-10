import { actionsZodSchema } from "./actions/schema.ts";
import { dbActionsZodSchema } from "./dbActions/schema.ts";

export const serverZodSchemas = {
  actionsZodSchema,
  dbActionsZodSchema,
};
