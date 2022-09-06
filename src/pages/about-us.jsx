import React from "react";
import {
  Banner,
  InfoSection,
  PrincipalSection,
  StatisticsSection,
} from "../components";

const AboutUs = () => {
  return (
    <div>
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
