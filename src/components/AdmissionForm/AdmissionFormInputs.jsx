import React from "react";
import AdmissionFormRadioInput from "./AdmissionFormRadioInput";
import AdmissionFormSelector from "./AdmissionFormSelector";

const StudentClass = [{ name: "Class Six" }];

const AdmissionFormInputs = () => {
  return (
    <form className='text-primary-text space-y-5 flex justify-start items-start flex-col'>
      <AdmissionFormSelector data={StudentClass} />
      <input
        type='text'
        className='px-5 py-2 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter your registration number'
      />
      <input
        type='text'
        className='px-5 py-2 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter your registration number'
      />
      <input
        type='text'
        className='px-5 py-2 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter your registration number'
      />
      <input
        type='text'
        className='px-5 py-2 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter your registration number'
      />
      <input
        type='text'
        className='px-5 py-2 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter your registration number'
      />

      <div className='flex justify-between items-center gap-2 w-[600px]'>
        <input
          type='text'
          className='px-5 py-2 w-1/3 rounded ring-2 ring-gray-300 outline-none'
          placeholder='Enter your registration number'
        />
        <input
          type='text'
          className='px-5 py-2 w-1/3 rounded ring-2 ring-gray-300 outline-none'
          placeholder='Enter your registration number'
        />
        <input
          type='text'
          className='px-5 py-2 w-1/3 rounded ring-2 ring-gray-300 outline-none'
          placeholder='Enter your registration number'
        />
      </div>

      <input
        type='text'
        className='px-5 py-2 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter your registration number'
      />

      <div className='flex justify-between items-center'>
        <input
          type='text'
          className='px-5 py-2 w-1/3 rounded ring-2 ring-gray-300 outline-none'
          placeholder='Enter your registration number'
        />
        <AdmissionFormRadioInput value={"male"} name={"male"} />
      </div>
    </form>
  );
};

export default AdmissionFormInputs;
