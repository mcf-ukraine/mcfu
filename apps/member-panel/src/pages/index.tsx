import { type InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { HomePageContent, Layout } from "../components";
import { ua } from "../locales/ua";
import { serverSidePropsWithUser } from "../utils/serverSidePropsWithUser";

export const config = {
  runtime: "experimental-edge",
};

export const getServerSideProps = serverSidePropsWithUser;
type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Index = ({ user }: Props) => (
  <>
    <Head>
      <title>{ua.pages.home.titleTag}</title>
    </Head>
    <Layout
      pageTitle={ua.pages.home.content.title}
      user={{
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        imageUrl: user.imageUrl,
      }}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <HomePageContent user={user} />
    </Layout>
  </>
);

export default Index;
