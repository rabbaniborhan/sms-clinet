import React from "react";
import { Banner, LatestNews, Table } from "../components";

const notice = () => {
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
          btn: false,
          textAlter: false,
          imageAlter: false,
          heightAlter: true,
          paddingAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <LatestNews />

      <Table />
    </div>
  );
};

export default notice;
