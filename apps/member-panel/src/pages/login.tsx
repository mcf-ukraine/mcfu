import Head from "next/head";
import { Toaster } from "@mcfu/ui";
import { LoginForm } from "../components";
import { LogoAndTitle } from "../components/LogoAndTitle/LogoAndTitle";
import { ua } from "../locales/ua";
import { withHomeRedirect } from "../utils/withHomeRedirect";

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps = withHomeRedirect;

const Login = () => (
  <>
    <Head>
      <title>{ua.pages.login.meta.title}</title>
      <meta
        name="description"
        content={ua.pages.login.meta.description}
        key="desc"
      />
    </Head>
    <div className="flex min-h-full flex-col justify-center px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LogoAndTitle />
      </div>
      <LoginForm />
    </div>
    <Toaster />
  </>
);

export default Login;
