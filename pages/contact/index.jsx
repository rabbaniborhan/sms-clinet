import React from "react";
import { Banner } from "../../components";
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
      />
      <ContactDetails />
    </div>
  );
};

export default Contact;
