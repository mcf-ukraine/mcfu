import Head from "next/head";
import { LoginForm } from "../components";
import { LogoAndTitle } from "../components/LogoAndTitle/LogoAndTitle";
import { getBaseUrl } from "../utils/getBaseUrl";
import { withHomeRedirect } from "../utils/withHomeRedirect";

const BASE_URL = getBaseUrl();

export const getServerSideProps = withHomeRedirect;

export const Login = () => (
  <>
    <Head>
      <title>Вхід - Кабінет ФАіСУ</title>
    </Head>
    <div className="flex min-h-full flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LogoAndTitle />
      </div>
      <LoginForm baseUrl={BASE_URL} />
    </div>
  </>
);

export default Login;
