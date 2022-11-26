import Head from "next/head";
import React from "react";
import { LayoutSecond } from "../../../components";
import AdmissionAdmitCard from "./AdmissionAdmitCard";
import AdmitCardForm from "./AdmitCardForm";

const AdmissionAdmitCardPage = () => {
  return (
    <LayoutSecond>
      <Head>
        <meta name='viewport' content='width=1280'></meta>
      </Head>
      <div className='w-4/5 mx-auto py-20 my-20'>
        <div className='mb-10'>
          <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
            Admission Test Admit Card
          </h2>
          <div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[600px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[500px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
          </div>
        </div>
        <AdmissionAdmitCard />
        <AdmitCardForm />
      </div>
    </LayoutSecond>
  );
};

export default AdmissionAdmitCardPage;
