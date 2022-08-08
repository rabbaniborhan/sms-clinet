import Head from "next/head";
import { useRouter } from "next/router";
import images from "../assets";
import {
  Banner,
  InfoSection,
  Table,
  StatisticsSection,
  PrincipalSection,
  LatestNews,
} from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>SMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Sending url-path and banner-data as props for conditional rendering on different pages*/}
      <Banner path={router.asPath} />
      <LatestNews />
      <Table />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
    </div>
  );
};

export default Home;
