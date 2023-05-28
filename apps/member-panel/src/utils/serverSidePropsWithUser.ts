import { type GetServerSideProps } from "next";
import { getAuth } from "@clerk/nextjs/server";
import { type User, getUser } from "./user";

export const serverSidePropsWithUser: GetServerSideProps<{
  user: User;
}> = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  const user = userId ? await getUser(userId) : undefined;

  return { props: { user: JSON.parse(JSON.stringify(user)) } };
};
