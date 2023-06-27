import Head from "next/head";
import { CheckUserForm, LogoAndTitle } from "../../components";
import { ua } from "../../locales/ua";
import { withHomeRedirect } from "../../utils/withHomeRedirect";

export const getServerSideProps = withHomeRedirect;

const Register = () => (
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
      <CheckUserForm />
    </div>
  </>
);

export default Register;
