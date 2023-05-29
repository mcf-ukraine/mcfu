import { type Prisma } from "@prisma/client";
import { sql } from "@vercel/postgres";
import { prisma } from "@mcfu/trpc-server";

export const getUser = async (userId: string) => {
  const start = performance.now();

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

  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);

  return user;
};

export type User = Prisma.PromiseReturnType<typeof getUser>;

// Vercel Postgres version
export const getUserVercelPostgres = async (userId: string) => {
  const start = performance.now();

  const { rows } = await sql<User>`
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
      json_build_object('name', ss.name) AS "separatedSubdivision",
      json_agg(json_build_object('name', at.name)) AS "activityTypes"
    FROM "User" u
    LEFT JOIN "SeparatedSubdivision" ss ON u."separatedSubdivisionId" = ss.id
    LEFT JOIN "_ActivityTypeToUser" uat ON u.id = uat."B"
    LEFT JOIN "ActivityType" at ON uat."A" = at.id
    WHERE u."clerkId" = ${userId}
    GROUP BY u.id, ss.name
  `;

  const end = performance.now();
  console.log(`Execution time: ${end - start} ms`);

  const user = {
    ...rows[0],
  };

  return user;
};
