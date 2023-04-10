import { type GetServerSideProps } from "next";
import Head from "next/head";
import { useClerk, useUser } from "@clerk/nextjs";
import { Button } from "@mcfu/ui";
import { LogoAndTitle } from "../components/LogoAndTitle/LogoAndTitle";
import { serverSidePropsWithUser } from "../utils/serverSidePropsWithUser";

export const getServerSideProps: GetServerSideProps = serverSidePropsWithUser;

const Index = () => {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <>
      <Head>
        <title>Кабінет ФАіСУ</title>
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
              <Button
                onClick={async () => {
                  await signOut();
                }}
              >
                Вихід
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
