import { useState } from "react";
import {
  Banner,
  InfoSection,
  Table,
  StatisticsSection,
  PrincipalSection,
  LatestNews,
  Backdrop,
  LoginPopUp,
} from "../components";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='font-bangla'>
      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: true,
        }}
        navPath={true}
        subPath={true}
        setShowModal={setShowModal}
      />
      <LatestNews />
      <Table />
      <InfoSection />
      <StatisticsSection />
      <PrincipalSection />
      {showModal && (
        <Backdrop setShowModal={setShowModal}>
          <LoginPopUp setShowModal={setShowModal} />
        </Backdrop>
      )}
    </div>
  );
};

export default Home;
