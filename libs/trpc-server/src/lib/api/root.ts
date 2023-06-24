import { activityTypeRouter } from "./routers/activityType";
import { subdivisionRouter } from "./routers/subdivision";
import { userRouter } from "./routers/user";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  subdivision: subdivisionRouter,
  activityType: activityTypeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
