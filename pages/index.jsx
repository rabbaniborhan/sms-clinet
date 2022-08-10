import Head from "next/head";
import { useRouter } from "next/router";
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
          textAlter: false,
          imageAlter: false,
          heightAlter: false,
        }}
        navPath={true}
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
