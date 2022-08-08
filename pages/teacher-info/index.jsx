import { useRouter } from "next/router";
import React from "react";
import { Banner } from "../../components";
import Teachers from "./Teachers";

const TeacherInfo = () => {
  const router = useRouter();

  return (
    <div>
      <Banner path={router.asPath} />
      <Teachers />
    </div>
  );
};

export default TeacherInfo;
