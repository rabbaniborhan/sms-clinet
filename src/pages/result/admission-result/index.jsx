import React from "react";
import { LayoutSecond } from "../../../components";
import AdmissionMarkSheet from "./AdmissionMarkSheet";
import AdmissionTestResultSearchForm from "./AdmissionTestResultSearchForm";

const AdmissionResultPage = () => {
  return (
    <LayoutSecond>
      <div className='lg:w-4/5 w-11/12 mx-auto my-20 py-20'>
        <div>
          <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
            Admission Test Search Result
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[550px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='lg:w-[450px] w-[250px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
          </div>
        </div>
        <AdmissionTestResultSearchForm />
        <AdmissionMarkSheet />
      </div>
    </LayoutSecond>
  );
};

export default AdmissionResultPage;
