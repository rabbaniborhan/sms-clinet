import React from "react";
import { Banner } from "../../components";
import Maps from "../../components/Maps/Maps";
import ContactDetails from "./ContactDetails";

const Contact = () => {
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
      <ContactDetails />
      <Maps />
    </div>
  );
};

export default Contact;
