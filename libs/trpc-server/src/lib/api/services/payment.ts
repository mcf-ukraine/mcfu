import { z } from "zod";
import { env } from "../../env";

export const paymentDataSchema = z.object({
  orderNumber: z.string(),
  description: z.string(),
  amount: z.number(),
  returnUrl: z.string(),
});

export const paymentDataSchemaTransformed = paymentDataSchema.transform(
  (data) => ({
    ...data,
    amount: `${data.amount * 100}`,
  })
);

type PaymentDataTransformed = typeof paymentDataSchemaTransformed._type;

export const paymentCreatedSchema = z.object({
  orderId: z.string(),
  formUrl: z.string().url(),
});

export const createPayment = async (data: PaymentDataTransformed) => {
  const body = {
    userName: env.PAYMENT_GATEWAY_API_USER,
    password: env.PAYMENT_GATEWAY_API_PASSWORD,
    ...data,
  };
  const encodedBody = new URLSearchParams(body).toString();

  const response = await fetch(`${env.PAYMENT_GATEWAY_URL}/register.do`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encodedBody,
  });
  const result = await response.json();

  return result;
};
