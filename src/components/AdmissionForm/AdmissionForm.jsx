import Image from "next/image";
import React from "react";
import images from "../../assets";
import AdmissionFormColons from "./AdmissionFormColons";
import AdmissionFormInputs from "./AdmissionFormInputs";
import AdmissionFormLabels from "./AdmissionFormLabels";

const AdmissionForm = ({ state }) => {
  return (
    <div>
      <div className='w-4/5 mx-auto py-10 px-10 bg-white text-primary-text'>
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
          <p>Class - Six</p>
        </div>

        {/* Admission from inputs */}
        <div className='flex justify-between items-center w-4/5 mx-auto'>
          <AdmissionFormLabels />
          <AdmissionFormColons />
          <AdmissionFormInputs />
        </div>
      </div>

      <div className='flex justify-end items-end gap-3 w-11/12 mx-auto my-16'>
        <button className='bg-yellow text-white py-3 w-36 rounded'>
          Print
        </button>
        <button className='bg-primary text-white py-3 w-36 rounded'>
          Download
        </button>
      </div>
    </div>
  );
};

export default AdmissionForm;
