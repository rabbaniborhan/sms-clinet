import React from "react";
import AcknowledgementSlip from "./AcknowledgementSlip/AcknowledgementSlip";
import { LayoutSecond } from "../../components";
import AcknowledgementInst from "./AcknowledgementSlip/AcknowledgementInst";

const payment = () => {
  return (
    <LayoutSecond>
      <div className='w-4/5 mx-auto py-20 my-20'>
        <div>
          <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
            "Search Result Marksheet"
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[500px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[400px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
          </div>
        </div>
        <AcknowledgementInst />
        <AcknowledgementSlip />
      </div>
    </LayoutSecond>
  );
};

export default payment;
