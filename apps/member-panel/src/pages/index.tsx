import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import { HomePageContent, Layout } from "../components";
import { ua } from "../locales/ua";
import { api } from "../utils/trpc";

const Index = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  api.user.me.useQuery();

  return (
    <>
      <Head>
        <title>{ua.pages.home.titleTag}</title>
      </Head>
      <Layout
        pageTitle={ua.pages.home.content.title}
        user={{
          name: `${user.firstName} ${user.lastName}`,
          email: user.emailAddresses[0].emailAddress,
          imageUrl: user.imageUrl,
        }}
      >
        <HomePageContent />
      </Layout>
    </>
  );
};

export default Index;
