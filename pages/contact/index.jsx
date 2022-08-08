import { useRouter } from "next/router";
import React from "react";
import { Banner } from "../../components";
import ContactDetails from "./ContactDetails";

const Contact = () => {
  const router = useRouter();
  return (
    <div>
      <Banner path={router.asPath} />
      <ContactDetails />
    </div>
  );
};

export default Contact;
