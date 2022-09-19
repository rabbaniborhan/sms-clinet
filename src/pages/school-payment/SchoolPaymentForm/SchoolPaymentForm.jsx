import React from "react";
import { Selector } from "../../../components";
import SchoolPaymentFormSelector from "./SchoolPaymentFormSelector";

const SchoolPaymentForm = () => {
  const classes = [{ name: "One" }, { name: "Two" }, { name: "Three" }];
  const sections = [{ name: "A" }, { name: "B" }, { name: "C" }];
  const groups = [{ name: "Science" }, { name: "Commerce" }, { name: "Arts" }];
  return (
    <div className='w-[720px] mx-auto py-10 rounded flex flex-col justify-center items-center bg-white border border-gray-300 overflow-hidden'>
      <form>
        <div className='flex justify-center items-center text-primary-text'>
          <div className='w-40 space-y-9'>
            <p className='font-semibold'>Class</p>
            <p className='font-semibold'>Roll No. </p>
            <p className='font-semibold'>Section</p>
            <p className='font-semibold'>Session</p>
            <p className='font-semibold'>Fees of the Month</p>
            <p className='font-semibold'>Payment Method</p>
          </div>
          <div className='w-10 space-y-[37px]'>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
            <p className='font-semibold'>:</p>
          </div>
          <div className='space-y-5'>
            <SchoolPaymentFormSelector data={classes} />
            <SchoolPaymentFormSelector data={classes} />
            <SchoolPaymentFormSelector data={classes} />
            <SchoolPaymentFormSelector data={classes} />
            <SchoolPaymentFormSelector data={classes} />
            <SchoolPaymentFormSelector data={classes} />
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
