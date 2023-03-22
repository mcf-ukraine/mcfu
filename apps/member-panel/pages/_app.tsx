import { AppProps } from "next/app";
import Head from "next/head";
import { api } from "../utils/trpc";
import "./styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to member-panel!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default api.withTRPC(CustomApp);
