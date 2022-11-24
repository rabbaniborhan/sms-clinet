import React from "react";
import { Selector } from "../../../components";

const exams = [{ name: "Mid-Semester" }];

const SchoolResultSearchForm = () => {
  return (
    <div className='lg:w-fit mb-20 w-full lg:mb-0 mx-auto lg:px-10 px-5 py-10 bg-white border border-gray-300'>
      <form className='flex flex-col justify-center items-center gap-10 w-full'>
        {/* Input for Examination */}

        <div className='flex justify-between items-center w-full lg:gap-5 gap-3'>
          <div className='space-y-[40px] flex flex-col'>
            <p className='text-md text-gray-500 font-semibold'>Examination</p>
            <p className='text-md text-gray-500 font-semibold'>Exam Year</p>
            <p className='text-md text-gray-500 font-semibold'>Class</p>
            <p className='text-md text-gray-500 font-semibold w-28'>
              Application ID
            </p>
            <p className='text-md text-gray-500 font-semibold'>Password</p>
          </div>
          <div className='space-y-[40px] flex flex-col'>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </div>
          <div className='space-y-5 flex flex-col'>
            <Selector data={exams} />
            <Selector data={exams} />
            <Selector data={exams} />
            <input
              type='text'
              className='px-1 py-2 lg:w-full w-48 rounded ring-1 ring-gray-300 outline-none'
              placeholder='Enter your Application ID'
            />
            <input
              type='text'
              className='px-1 py-2 lg:w-full w-48 rounded ring-1 ring-gray-300 outline-none'
              placeholder='Enter your Password'
            />
          </div>
        </div>

        {/* Buttons for this page */}

        <div className='flex justify-center items-center gap-5'>
          <button
            className='bg-primary py-2 w-36 rounded text-white lg:ml-[130px] ml-12'
            onClick={() => setIsTrue(true)}>
            Search
          </button>
          <button className='bg-yellow py-2 w-36 rounded text-white'>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolResultSearchForm;
