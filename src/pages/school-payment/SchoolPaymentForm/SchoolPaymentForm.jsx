import React from "react";
import { Selector } from "../../../components";
import SchoolPaymentFormSelector from "./SchoolPaymentFormSelector";

const SchoolPaymentForm = () => {
  return (
    <div className='lg:w-[720px] w-11/12 mx-auto py-10 rounded flex flex-col justify-center items-center bg-white border border-gray-300 lg:overflow-hidden'>
      <form>
        <div className='flex justify-center items-center text-primary-text'>
          <div className='w-40 space-y-9 lg:block hidden'>
            <p className='font-semibold'>Class</p>
            <p className='font-semibold'>Roll No. </p>
            <p className='font-semibold'>Section</p>
            <p className='font-semibold'>Session</p>
            <p className='font-semibold'>Fees of the Month</p>
            <p className='font-semibold'>Payment Method</p>
          </div>
          <div className='w-10 space-y-[37px] lg:block hidden'>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
          </div>
          <div className='space-y-5'>
            <span className='mb-7 lg:mb-0 block'>
              <p className='font-semibold mb-2 lg:hidden block'>Class</p>
              <SchoolPaymentFormSelector />
            </span>
            <span className='mb-7 lg:mb-0 block'>
              <p className='font-semibold mb-2 lg:hidden block'>Roll No.</p>
              <SchoolPaymentFormSelector />
            </span>
            <span className='mb-7 lg:mb-0 block'>
              <p className='font-semibold mb-2 lg:hidden block'>Section</p>
              <SchoolPaymentFormSelector />
            </span>
            <span className='mb-7 lg:mb-0 block'>
              <p className='font-semibold mb-2 lg:hidden block'>Session</p>
              <SchoolPaymentFormSelector />
            </span>
            <span className='mb-7 lg:mb-0 block'>
              <p className='font-semibold mb-2 lg:hidden block'>
                Fees of the Month
              </p>
              <SchoolPaymentFormSelector />
            </span>
            <span className='mb-7 lg:mb-0 block'>
              <p className='font-semibold mb-2 lg:hidden block'>
                Payment Method
              </p>
              <SchoolPaymentFormSelector />
            </span>
          </div>
        </div>
        <div className='mt-10 text-right'>
          <button className='bg-primary py-3 w-36 rounded text-white'>
            Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolPaymentForm;
