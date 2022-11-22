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
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
      </head>
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
