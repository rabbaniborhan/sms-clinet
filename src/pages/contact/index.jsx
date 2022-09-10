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
          paddingAlter: true,
        }}
        navPath={true}
        subPath={true}
      />
      <div className='mb-10'>
        <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
          Get In Touch
        </h2>
        <div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
            <span className='w-72 py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
          </div>
          <div className='flex justify-center items-center'>
            <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
            <span className='w-52 py-[1px] bg-primary'></span>
            <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
          </div>
        </div>
      </div>
      <ContactDetails />
      <Maps />
    </div>
  );
};

export default Contact;
