import { type GetServerSideProps } from "next";
import { buildClerkProps, getAuth } from "@clerk/nextjs/server";

export const withHomeRedirect: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  if (userId) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { ...buildClerkProps(ctx.req) } };
};
