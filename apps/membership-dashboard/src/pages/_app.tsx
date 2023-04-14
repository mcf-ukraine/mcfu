import { type AppProps } from "next/app";
import Head from "next/head";
import "./styles.css";

const CustomApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Welcome to membership-dashboard!</title>
    </Head>
    <main className="app">
      <Component {...pageProps} />
    </main>
  </>
);

// Axiom Web Vitals reporting
export { reportWebVitals } from "next-axiom";
export default CustomApp;
