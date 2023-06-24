import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { createServerSideHelpers } from "@trpc/react-query/server";
import superjson from "superjson";
import { appRouter } from "@mcfu/trpc-server";
import { toast } from "@mcfu/ui";
import { LogoAndTitle } from "../../components/LogoAndTitle/LogoAndTitle";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { ua } from "../../locales/ua";

export const getStaticProps = async () => {
  const helpers = createServerSideHelpers({
    router: appRouter,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ctx: {},
    transformer: superjson,
  });

  await helpers.subdivision.getAll.prefetch();
  await helpers.activityType.getAll.prefetch();

  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
};

const RegisterForm = () => {
  const { query } = useRouter();

  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <>
      <Head>
        <title>{ua.pages.register.meta.title}</title>
        <meta
          name="description"
          content={ua.pages.register.meta.description}
          key="desc"
        />
      </Head>
      <div className="flex min-h-full flex-col justify-center px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <LogoAndTitle />
        </div>
        <RegistrationForm defaultValues={query} />
      </div>
    </>
  );
};

export default RegisterForm;
