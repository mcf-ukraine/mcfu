import { createTRPCRouter, publicProcedure } from "../trpc";
import { getAllActivityTypes } from "../utils";

export const activityTypeRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const activityTypes = await getAllActivityTypes();

    return activityTypes;
  }),
});
