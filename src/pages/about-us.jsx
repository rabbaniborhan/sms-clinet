import React from "react";
import {
  Banner,
  InfoSection,
  PrincipalSection,
  StatisticsSection,
} from "../components";
import Head from "next/head";

const AboutUs = () => {
  return (
    <div>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
      </Head>
      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: false,
          imageAlter: false,
          heightAlter: true,
          paddingAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
    </div>
  );
};

export default AboutUs;
