import React from "react";

const SchoolResultSearchForm = ({ setIsTrue }) => {
  return (
    <div className='w-[70%] mx-auto p-10 flex flex-col justify-center items-center bg-white'>
      <form className='flex flex-col justify-center items-center gap-10'>
        {/* Input for Examination */}
        <div className='flex justify-between items-center w-[550px] '>
          <label
            className='font-semibold text-md text-gray-500 w-18'
            htmlFor='class'>
            Examination
          </label>
          <label
            className='font-semibold text-md text-gray-500 w-14'
            htmlFor='class'>
            :
          </label>
          <select
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'>
            <option disabled selected>
              Please Select
            </option>
          </select>
        </div>

        {/* Input for Exam Year */}
        <div className='flex justify-between items-center w-[550px] '>
          <label
            className='font-semibold text-md text-gray-500 w-18'
            htmlFor='class'>
            Exam Year
          </label>
          <label
            className='font-semibold text-md text-gray-500 -ml-10'
            htmlFor='class'>
            :
          </label>
          <select
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'>
            <option disabled selected>
              Please Select
            </option>
          </select>
        </div>

        {/* Input for Class */}
        <div className='flex justify-between items-center w-[550px] gap-10'>
          <label
            className='font-semibold text-md text-gray-500 w-[55px]'
            htmlFor='class'>
            Class
          </label>
          <label
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </label>
          <select
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'>
            <option disabled selected>
              Please Select
            </option>
          </select>
        </div>

        {/* Input for Roll */}
        <div className='flex justify-between items-center w-[550px] gap-10'>
          <label
            className='font-semibold text-md text-gray-500 w-14'
            htmlFor='class'>
            Roll
          </label>
          <label
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </label>
          <input
            type='text'
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'
          />
        </div>

        {/* Input for Registration */}
        <div className='flex justify-between items-center w-[550px] gap-10'>
          <label
            className='font-semibold text-md text-gray-500 w-14'
            htmlFor='class'>
            Registration
          </label>
          <span
            className='font-semibold text-md text-gray-500 w-5'
            htmlFor='class'>
            :
          </span>
          <input
            type='text'
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'
          />
        </div>

        {/* Buttons for this page */}

        <div className='flex justify-center items-center gap-5'>
          <button
            className=' bg-primary py-2 w-36 rounded text-white ml-[90px]'
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
