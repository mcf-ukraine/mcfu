import { type GetServerSideProps } from "next";
import { buildClerkProps, clerkClient, getAuth } from "@clerk/nextjs/server";

export const serverSidePropsWithUser: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  return { props: { ...buildClerkProps(ctx.req, { user }) } };
};
