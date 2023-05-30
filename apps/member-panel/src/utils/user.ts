// import { type Prisma } from "@prisma/client";
// import { prisma } from "@mcfu/trpc-server";
import { supabase } from "./supabase";

// export const getUser = async (userId: string) => {
//   const user = await prisma.user.findUnique({
//     where: {
//       clerkId: userId,
//     },
//     select: {
//       id: true,
//       email: true,
//       firstName: true,
//       lastName: true,
//       middleName: true,
//       phone: true,
//       birthday: true,
//       separatedSubdivisionId: true,
//       isMembershipActive: true,
//       membershipType: true,
//       fullName: true,
//       separatedSubdivision: {
//         select: {
//           name: true,
//         },
//       },
//       activityTypes: {
//         select: {
//           name: true,
//         },
//       },
//     },
//   });

//   return user;
// };

// export type User = Prisma.PromiseReturnType<typeof getUser>;

type MembershipType = "FULL" | "REDUCED";
const MembershipType = {
  FULL: "FULL",
  REDUCED: "REDUCED",
};
export type User = {
  separatedSubdivision: {
    name: string;
  };
  activityTypes: {
    name: string;
  }[];
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  birthday: Date;
  separatedSubdivisionId: number;
  isMembershipActive: boolean;
  membershipType: MembershipType;
  fullName: string;
};

export const getUserSupabase = async (userId: string) => {
  const { data: user } = await supabase
    .from("users")
    .select(
      `
    id,
    email,
    firstName,
    lastName,
    middleName,
    phone,
    birthday,
    separatedSubdivisionId,
    isMembershipActive,
    membershipType,
    fullName,
    separatedSubdivision (
      name
    ),
    activityTypes (
      name
    )
  `
    )
    .eq("clerkId", userId)
    .returns<User>();

  console.log(user);

  return user;
};
