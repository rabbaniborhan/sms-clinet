import React from "react";
import { LayoutSecond, Selector } from "../../../components";

const AdmissionTestResultSearchForm = () => {
  const exams = [{ name: "Mid-Semester" }];
  return (
    <div className='w-[55%] mx-auto p-10 flex flex-col justify-center items-center bg-white border border-gray-300'>
      <form className='flex flex-col justify-center items-center gap-10'>
        {/* Input for Examination */}
        <div className='flex justify-between items-center w-[550px] '>
          <label
            className='font-semibold text-md text-gray-500 w-36'
            htmlFor='class'>
            Examination
          </label>
          <label
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </label>

          {/* Selector for selecting examination */}
          <Selector data={exams} />
        </div>

        {/* Input for Exam Year */}
        <div className='flex justify-between items-center w-[550px] '>
          <label
            className='font-semibold text-md text-gray-500 w-36'
            htmlFor='class'>
            Exam Year
          </label>
          <label
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </label>

          {/* Selector for selecting examination year */}
          <Selector data={exams} />
        </div>

        {/* Input for Class */}
        <div className='flex justify-between items-center w-[550px]'>
          <label
            className='font-semibold text-md text-gray-500 w-36'
            htmlFor='class'>
            Class
          </label>
          <label
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </label>
          {/* Selector for selecting class */}
          <Selector data={exams} />
        </div>

        {/* Input for applicant */}
        <div className='flex justify-between items-center w-[550px]'>
          <label
            className='font-semibold text-md text-gray-500 w-36'
            htmlFor='class'>
            Application ID
          </label>
          <label
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </label>
          <input
            type='text'
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            placeholder='Enter your applicant id'
          />
        </div>

        {/* Input for password */}
        <div className='flex justify-between items-center w-[550px]'>
          <label
            className='font-semibold text-md text-gray-500 w-36'
            htmlFor='class'>
            Password
          </label>
          <span
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </span>
          <input
            type='text'
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            placeholder='Enter your Password'
          />
        </div>

        {/* Buttons for this page */}

        <div className='flex justify-center items-center gap-5'>
          <button
            className='bg-primary py-2 w-36 rounded text-white ml-[90px]'
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

export default AdmissionTestResultSearchForm;
