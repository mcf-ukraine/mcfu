import {
  createPayment,
  paymentCreatedSchema,
  paymentDataSchemaTransformed,
} from "../services";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const paymentRouter = createTRPCRouter({
  create: publicProcedure
    .input(paymentDataSchemaTransformed)
    .output(paymentCreatedSchema)
    .mutation(async ({ input }) => {
      const payment = await createPayment(input);

      return payment;
    }),
});
