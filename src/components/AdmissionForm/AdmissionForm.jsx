import Image from "next/image";
import React from "react";
import images from "../../assets";
import AdmissionFormColons from "./AdmissionFormColons";
import AdmissionFormInputs from "./AdmissionFormInputs";
import AdmissionFormLabels from "./AdmissionFormLabels";

const AdmissionForm = ({ studentClass }) => {
  return (
    <div>
      <div className='mx-auto py-10 px- bg-white text-primary-text border border-gray-300'>
        <div className='text-center space-y-3'>
          <Image src={images.schoolLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <p className='text-sm text-primary-text'>68, East Rampura, Dhaka</p>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Admission Form -2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
          <p>Class - {studentClass}</p>
        </div>

        {/* Admission from inputs */}
        <div className='flex justify-between items-center xl:w-4/5 lg:w-11/12 mx-auto mt-16'>
          <AdmissionFormLabels />
          <AdmissionFormColons />
          <AdmissionFormInputs />
        </div>

        <div className='flex justify-start items-center w-4/5 mx-auto my-16 gap-6'>
          <input
            type='checkbox'
            name='declaration'
            id='declaration'
            className='w-4 h-4 mt-0.5'
          />
          <label
            htmlFor='declaration'
            className='xl:text-lg lg:text-sm font-semibold'>
            I declare that all the above information are correct and assure that
            I will abide by all the rules.
          </label>
        </div>
        <div className='flex w-full justify-end items-end mx-auto mt-16 mb-5 px-8'>
          <button className='bg-primary text-white py-3 w-36 rounded'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
