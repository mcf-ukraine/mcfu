import { prisma } from "../../db";

export const getAllActivityTypes = async () => {
  const activityTypes = await prisma.activityType.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return activityTypes;
};
