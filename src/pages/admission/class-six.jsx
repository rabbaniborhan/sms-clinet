import React from "react";
import { AdmissionForm, LayoutSecond } from "../../components";

const ClassSixPage = () => {
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
        <AdmissionForm studentClass={"Six"} />
      </div>
    </LayoutSecond>
  );
};

export default ClassSixPage;
