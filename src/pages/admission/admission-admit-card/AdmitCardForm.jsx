import React from "react";
import { Selector } from "../../../components";

const AdmitCardForm = () => {
  const data = [
    {
      name: "Please select",
    },
  ];
  return (
    <div className='flex justify-between items-center bg-white py-10 px-10 w-[650px] mx-auto border border-gray-300'>
      <div className='flex flex-col justify-center items-start gap-[52px] -mt-16 font-semibold'>
        <label className='text-md text-primary-text'>Application ID</label>
        <label className='text-md text-primary-text'>Password</label>
        <label className='text-md text-primary-text'>Class</label>
      </div>
      <div className='flex flex-col justify-center items-start gap-[52px] -mt-16 font-semibold'>
        <span className='text-md text-primary-text'>:</span>
        <span className='text-md text-primary-text'>:</span>
        <span className='text-md text-primary-text'>:</span>
      </div>
      <form className='flex flex-col justify-center items-start gap-7'>
        <input
          className='outline-none ring-1 ring-gray-400 p-2.5 w-96'
          type='email'
          name='name'
          placeholder='Enter Application ID'
        />
        <input
          className='outline-none ring-1 ring-gray-400 p-2.5 w-96'
          type='email'
          name='name'
          placeholder='Enter Password'
        />
        {/* Admission Payment selector */}
        <Selector data={data} style={true} />

        <button className='py-1.5 px-8 bg-primary text-white text-lg rounded'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmitCardForm;
