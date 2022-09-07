import React from "react";
import { Banner } from "../../components";
import Teachers from "./Teachers";

const StaffInfo = () => {
  return (
    <div>
      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: false,
          textAlter: true,
          imageAlter: true,
          heightAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <Teachers />
    </div>
  );
};

export default StaffInfo;
