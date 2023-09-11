import { z } from "zod";
import { checkUser, getUser } from "../services";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => ({
      greeting: `Hello ${input.text}`,
    })),

  check: publicProcedure
    .input(
      z.object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().email().optional(),
      })
    )
    .query(async ({ input }) => ({
      status: await checkUser(input),
    })),

  me: protectedProcedure.query(({ ctx }) => getUser(ctx.auth.userId)),
});
