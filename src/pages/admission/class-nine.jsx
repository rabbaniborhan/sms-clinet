import Link from "next/link";
import React from "react";
import { LayoutSecond, AdmissionForm } from "../../components";

const ClassNinePage = () => {
  return (
    <LayoutSecond>
      <div className='w-4/5 mx-auto my-20 py-20'>
        <div>
          <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
            Admission Form
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[350px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[250px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
          </div>
        </div>
        <div className='w-4/5 mx-auto'>
          <div className='w-full flex justify-end items-end mb-10'>
            <a className='py-2 px-5 bg-[#1EB3A6] text-white rounded'>
              <Link href='/admission/admission-instructions'>View details</Link>
            </a>
          </div>
          <AdmissionForm studentClass={"Nine"} />
        </div>
      </div>
    </LayoutSecond>
  );
};

export default ClassNinePage;
