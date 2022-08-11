import React from "react";
import { Banner, Table } from "../components";

const notice = () => {
  return (
    <div>
      <Banner
        /* Sending different values for showing alternative text and hiding the button from the banner */
        path={{
          btn: false,
          textAlter: false,
          imageAlter: false,
          heightAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <Table />
    </div>
  );
};

export default notice;
