import Head from "next/head";
import {
  Banner,
  InfoSection,
  Table,
  StatisticsSection,
  PrincipalSection,
  LatestNews,
} from "../components";

const Home = () => {
  return (
    <div>
      <Head>
        <title>SMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: true,
        }}
        navPath={true}
        subPath={true}
      />
      <LatestNews />
      <Table />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
    </div>
  );
};

export default Home;
