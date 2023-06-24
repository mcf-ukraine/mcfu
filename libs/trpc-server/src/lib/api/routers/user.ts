import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { checkUser, getUser } from "../utils";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => ({
      greeting: `Hello ${input.text}`,
    })),

  check: publicProcedure
    .input(z.object({ firstName: z.string(), lastName: z.string() }))
    .query(async ({ input }) => ({
      isRegistered: await checkUser(input),
    })),

  me: protectedProcedure.query(({ ctx }) => getUser(ctx.auth.userId)),
});
