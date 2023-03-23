import { type AppProps } from "next/app";
import Head from "next/head";
import { api } from "../utils/trpc";
import "./styles.css";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Welcome to member-panel!</title>
    </Head>
    <main className="app">
      <Component {...pageProps} />
    </main>
  </>
);

export default api.withTRPC(CustomApp);
