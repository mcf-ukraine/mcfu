import { prisma } from "../../db";

export const getAllSubdivisions = async () => {
  const subdivisions = await prisma.separatedSubdivision.findMany({
    select: {
      id: true,
      name: true,
      feeAmount: true,
    },
    where: {
      acceptsOnlinePayments: true,
    },
  });

  return subdivisions;
};
