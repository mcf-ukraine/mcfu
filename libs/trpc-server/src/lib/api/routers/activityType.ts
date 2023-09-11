import { getAllActivityTypes } from "../services";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const activityTypeRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const activityTypes = await getAllActivityTypes();

    return activityTypes;
  }),
});
