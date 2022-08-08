import React from "react";
import { useRouter } from "next/router";
import { Banner, Table } from "../components";

const notice = () => {
  const router = useRouter();
  return (
    <div>
      {/* Sending url-path and banner-data as props for conditional rendering on different pages*/}
      <Banner props={router.asPath} />
      <Table />
    </div>
  );
};

export default notice;
