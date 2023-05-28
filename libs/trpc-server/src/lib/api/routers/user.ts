import { z } from "zod";
import { prisma } from "../../db";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => ({
      greeting: `Hello ${input.text}`,
    })),

  me: protectedProcedure.query(async ({ ctx }) => {
    const user = await prisma.user.findUnique({
      where: {
        clerkId: ctx.auth.userId,
      },
      include: {
        separatedSubdivision: {
          select: {
            name: true,
          },
        },
        activityTypes: {
          select: {
            name: true,
          },
        },
      },
    });

    return user;
  }),
});
