import { type AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@mcfu/ui";
import { RedirectToHome } from "../components";
import { publicRoutes } from "../constants/publicRoutes";
import { api } from "../utils/trpc";
import "../styles/styles.css";

// Axiom Web Vitals reporting
export { reportWebVitals } from "next-axiom";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
});

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter();
  const isPublicPage = publicRoutes.includes(pathname);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ClerkProvider {...pageProps}>
        <ThemeProvider attribute="class" enableSystem>
          <main className={`${inter.variable} font-sans`}>
            {isPublicPage ? (
              <>
                <SignedIn>
                  {pathname === "/login" || pathname === "/register" ? (
                    <RedirectToHome />
                  ) : (
                    <Component {...pageProps} />
                  )}
                </SignedIn>
                <SignedOut>
                  <Component {...pageProps} />
                </SignedOut>
              </>
            ) : (
              <>
                <SignedIn>
                  <Component {...pageProps} />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            )}
            <Toaster />
          </main>
        </ThemeProvider>
      </ClerkProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(CustomApp);
