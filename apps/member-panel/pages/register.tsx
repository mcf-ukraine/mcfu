import Head from "next/head";
import { ua } from "../locales/ua";
import { withHomeRedirect } from "../utils/withHomeRedirect";

export const getServerSideProps = withHomeRedirect;

const Register = () => (
  <>
    <Head>
      <title>{ua.pages.register.titleTag}</title>
    </Head>
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1>{ua.pages.register.content.title}</h1>
    </div>
  </>
);

export default Register;
