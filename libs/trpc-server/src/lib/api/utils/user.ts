import { type Prisma } from "@prisma/client";
import { prisma } from "../../db";

export const getUser = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      clerkId: userId,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      middleName: true,
      phone: true,
      birthday: true,
      separatedSubdivisionId: true,
      isMembershipActive: true,
      membershipType: true,
      fullName: true,
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
      fees: {
        select: {
          id: true,
          year: true,
          amount: true,
          paid: true,
          paymentDate: true,
        },
        orderBy: {
          year: "desc",
        },
      },
    },
  });

  return user;
};

export type User = Prisma.PromiseReturnType<typeof getUser>;
