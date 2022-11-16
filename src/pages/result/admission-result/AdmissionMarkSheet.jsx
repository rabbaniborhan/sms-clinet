import React from "react";
import images from "../../../assets";
import Image from "next/image";

const AdmissionMarkSheet = () => {
  return (
    <div className='lg:w-3/4 mx-auto pt-5 pb-1 lg:px-20 px-5 text-primary-text bg-white relative border border-gray-300'>
      <div className='absolute lg:block hidden lg:top-1/2 lg:left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Image src={images.bigLogo} height={450} width={450} />
      </div>
      <div className='text-center space-y-2'>
        <Image src={images.schoolLogo} />
        <h2 className='text-3xl text-bold'>
          Purba Rampura High School & College
        </h2>
        <p className='text-sm text-primary-text'>68, East Rampura, Dhaka</p>
        <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
          Admission Test Examination - 2022
          <span className='bg-gray-400 py-[1px] w-80'></span>
        </h3>
      </div>
      <div className='w-full mx-auto my-14'>
        <div className='lg:flex justify-between capitalize'>
          <div className='font-corsiva flex justify-between items-center capitalize '>
            <div className='space-y-5 font-semibold text-base'>
              <p>name</p>
              <p>class</p>
              <p>roll</p>
              <p>Group</p>
            </div>
            <div className='mx-14 space-y-5'>
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className='space-y-5 font-bangal font-bold text-md'>
              <p>Mahmudul Haque</p>
              <p>BBA</p>
              <p>117152</p>
              <p>Business studies</p>
            </div>
          </div>
          <div className='flex justify-between capitalize mt-5 lg:mt-0'>
            <div className='font-semibold text-base space-y-5'>
              <p>date</p>
              <p>position</p>
            </div>
            <div className='lg:ml-20 lg:mr-12 -ml-[14px] space-y-5'>
              <p>:</p>
              <p>:</p>
            </div>
            <div className='font-bangla font-bold space-y-5 mr-[52px]'>
              <p>11/12/20022</p>
              <p>60</p>
            </div>
          </div>
        </div>
        {/* -----------------Admission result table----------------- */}
        <div>
          <table className='w-full mt-20'>
            <thead>
              <tr>
                <th className='py-1 px-5 border-[0.5px] border-[#0D15304D] w-1/3'></th>
                <th className='py-1 px-5 border-[0.5px] border-[#0D15304D] w-full text-left'>
                  Result
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Test score row */}
              <tr>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  Test Score
                </td>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  82.5
                </td>
              </tr>

              {/* Merit score row */}
              <tr>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  Merit Score
                </td>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  282.5
                </td>
              </tr>

              {/* Merit position row */}
              <tr>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  Merit Position
                </td>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  60
                </td>
              </tr>

              {/* Status row */}
              <tr>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  Status
                </td>
                <td className='py-1 px-5 border-[0.5px] border-[#0D15304D]'>
                  Selected
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdmissionMarkSheet;
