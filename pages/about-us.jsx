import { useRouter } from "next/router";
import React from "react";
import {
  Banner,
  InfoSection,
  PrincipalSection,
  StatisticsSection,
} from "../components";

const AboutUs = () => {
  const router = useRouter();

  return (
    <div>
      <Banner path={router.asPath} />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
    </div>
  );
};

export default AboutUs;
