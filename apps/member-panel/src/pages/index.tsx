import { type GetServerSideProps } from "next";
import Head from "next/head";
import { useClerk, useUser } from "@clerk/nextjs";
import { Button } from "@mcfu/ui";
import { LogoAndTitle } from "../components/LogoAndTitle/LogoAndTitle";
import { ua } from "../locales/ua";
import { serverSidePropsWithUser } from "../utils/serverSidePropsWithUser";
import { api } from "../utils/trpc";

export const getServerSideProps: GetServerSideProps = serverSidePropsWithUser;

const Index = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  const handleClick = () => {
    signOut();
  };

  const me = api.user.me.useQuery();
  console.log(me);

  return (
    <>
      <Head>
        <title>{ua.pages.home.titleTag}</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center dark:text-white">
        <LogoAndTitle />

        {user && (
          <div className="mt-4">
            <div>
              Ви увійшли як{" "}
              <strong>{user.emailAddresses[0].emailAddress}</strong>
            </div>
            <div className="mt-3 text-center">
              <Button onClick={handleClick}>Вихід</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
