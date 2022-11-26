import React from "react";
import SchoolPaymentSlip from "./SchoolPaymentSlip";
import { LayoutSecond } from "../../components";
import SchoolPaymentForm from "./SchoolPaymentForm/SchoolPaymentForm";
import SchoolPaymentDetails from "./SchoolPaymentDetails";
import Head from "next/head";

const SchoolPaymentPage = () => {
  return (
    <LayoutSecond>
      <Head>
        <meta name='viewport' content='width=1280'></meta>
      </Head>
      <div className='lg:w-4/5 w-11/12 mx-auto my-20 py-20'>
        <div>
          <h2 className='text-latest-news-color text-center lg:text-4xl text-2xl my-5 font-bold'>
            School Payment Form
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[400px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[300px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
          </div>
        </div>
        <SchoolPaymentForm />
        <SchoolPaymentSlip />
        <SchoolPaymentDetails />
      </div>
    </LayoutSecond>
  );
};

export default SchoolPaymentPage;
