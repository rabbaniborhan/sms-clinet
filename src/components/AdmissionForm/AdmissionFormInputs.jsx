import React from "react";
import AdmissionFormSelector from "./AdmissionFormSelector";
import classes from "./AdmissionFormInputCustom.module.css";

const StudentClass = [{ name: "Class Six" }, { name: "Class Nine" }];

const AdmissionFormInputs = () => {
  return (
    <form className='text-primary-text lg:space-y-6 xl:space-y-5 flex justify-start items-start flex-col'>
      <AdmissionFormSelector data={StudentClass} />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter J.S.C Roll No'
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter Registration No'
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder="Enter Applicant's name"
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder="Enter Applicant's Father’s name"
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder="Enter Applicant's Mother’s name"
      />

      <div className='flex justify-between items-center gap-2 w-[600px]'>
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-2 ring-gray-300 outline-none'
          placeholder='Date'
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-2 ring-gray-300 outline-none'
          placeholder='Month'
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-2 ring-gray-300 outline-none'
          placeholder='Year'
        />
      </div>

      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Entre Phone Number'
      />

      {/* Text input with radio's */}
      <div className='flex justify-between items-center w-[600px]'>
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[300px] rounded ring-2 ring-gray-300 outline-none'
          placeholder="Enter Applicant's Religion"
        />
        <div className='flex justify-center items-center gap-6 w-[300px]'>
          <span className='xl:text-lg lg:text-md font-semibold'>Gender :</span>
          <div className='flex justify-center items-center gap-2 xl:mt-1.5 lg:mt-1'>
            <input type='radio' name='gender' id='male' className='w-4 h-4' />
            <label htmlFor='male' className='text-md font-semibold'>
              Male
            </label>
          </div>

          <div className='flex justify-center items-center gap-2 xl:mt-1.5 lg:mt-1'>
            <input
              type='radio'
              name='gender'
              id='female'
              className='w-4 h-4 '
            />
            <label htmlFor='female' className='text-md font-semibold'>
              Female
            </label>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center gap-5 mt-1.5'>
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[230px] rounded ring-2 ring-gray-300 outline-none'
          placeholder="Enter Applicant's Blood Group"
        />

        <label htmlFor='' className='xl:text-xl lg:text-md text-primary-text'>
          Nationality :
        </label>
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[230px] rounded ring-2 ring-gray-300 outline-none'
          placeholder="Enter Applicant's Nationality"
        />
      </div>

      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter Present Address'
      />

      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter Permanent Address'
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder="Enter Applicant's Passing Year"
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder="Enter Applicant's Result/GPA"
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter Institution Name'
      />
      <input
        type='text'
        className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-2 ring-gray-300 outline-none'
        placeholder='Enter Board Name'
      />
      <label
        htmlFor='file'
        className={`${classes.file}  w-[600px] rounded rounded-tl-none rounded-bl-none ring-2 ring-gray-300 outline-none flex justify-start items-start gap-1`}>
        <span className='px-10 xl:py-2 lg:py-1.5 bg-[#EFEFEF]'>
          Choose File
        </span>
        <span className='px-4 xl:py-2 lg:py-1.5'>No file choosen</span>
        <input type='file' name='image' id='file' />
      </label>
    </form>
  );
};

export default AdmissionFormInputs;
