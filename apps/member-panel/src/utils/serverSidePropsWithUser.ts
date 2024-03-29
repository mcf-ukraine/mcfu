import { type GetServerSideProps } from "next";
import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { type User, getUser } from "@mcfu/trpc-server";

export const serverSidePropsWithUser: GetServerSideProps<{
  user: User & { imageUrl?: string };
}> = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  const clerkUser = await clerkClient.users.getUser(userId);
  const dbUser = userId ? await getUser(userId) : undefined;
  const imageUrl = clerkUser?.imageUrl ?? undefined;

  return {
    props: {
      user: {
        ...JSON.parse(JSON.stringify({ ...dbUser, imageUrl })),
      },
    },
  };
};
