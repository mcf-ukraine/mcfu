import { type Prisma } from "@prisma/client";
import { sql } from "@vercel/postgres";
import { prisma } from "@mcfu/trpc-server";

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
    },
  });

  return user;
};

export type User = Prisma.PromiseReturnType<typeof getUser>;

// Vercel Postgres version
export const getUserVercelPostgres = async (userId: string) => {
  const { rows } = await sql`
    SELECT
      u.id,
      u.email,
      u."firstName",
      u."lastName",
      u."middleName",
      u.phone,
      u.birthday,
      u."separatedSubdivisionId",
      u."isMembershipActive",
      u."membershipType",
      u."fullName",
      s.name AS "separatedSubdivisionName",
      array_agg(at.name) AS "activityTypes"
    FROM "user" u
    LEFT JOIN "separatedSubdivision" s ON u."separatedSubdivisionId" = s.id
    LEFT JOIN "userActivityType" uat ON u.id = uat."userId"
    LEFT JOIN "activityType" at ON uat."activityTypeId" = at.id
    WHERE u."clerkId" = ${userId}
    GROUP BY u.id, s.name
    `;

  const user = rows[0];

  return user;
};
