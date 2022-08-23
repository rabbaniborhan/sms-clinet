import React from "react";
import images from "../../../assets";
import Image from "next/image";
import AcknowledgementTable from "./AcknowledgementTable";

const AcknowledgementSlip = () => {
  return (
    <div className='w-3/4 mx-auto '>
      <div className='w-full mx-auto pt-5 pb-1 px-20 text-primary-text bg-white relative'>
        <div className='absolute lg:top-[42%] lg:left-[245px] xl:left-[350px]'>
          <Image src={images.bigLogo} height={450} width={450} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.schoolLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <p className='text-sm text-primary-text'>68, East Rampura, Dhaka</p>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Acknowledgement Slip
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
        </div>
        <div className='w-full px-5 mx-auto my-14'>
          <div className='flex justify-between items-center mt-5 mb-8'>
            <Image src={images.qr} height={100} width={100} />
            <Image src={images.studentImage} height={120} width={120} />
          </div>
          <div className='flex justify-between capitalize'>
            <div className='font-corsiva flex justify-between items-center capitalize '>
              <div className='space-y-5 font-semibold text-base'>
                <p>name</p>
                <p>father's name</p>
                <p>mother's name</p>
                <p>class</p>
                <p>roll</p>
                <p>registration</p>
                <p>Group</p>
              </div>
              <div className='mx-14 space-y-5'>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className='space-y-5 font-bangal font-bold text-md'>
                <p>Mahmudul Haque</p>
                <p>Anamul Haque</p>
                <p>Hosneara Pervin</p>
                <p>BBA</p>
                <p>117152</p>
                <p>1500918832</p>
                <p>Business studies</p>
              </div>
            </div>
            <div className=' flex justify-between capitalize'>
              <div className='font-semibold text-base space-y-5'>
                <p>date</p>
              </div>
              <div className='ml-20 mr-12 space-y-5'>
                <p>:</p>
              </div>
              <div className='font-bangla font-bold space-y-5'>
                <p>11/12/20022</p>
              </div>
            </div>
          </div>
          <AcknowledgementTable />
        </div>
      </div>

      <div className='w-full flex justify-end items-end gap-3 mx-auto my-16'>
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

export default AcknowledgementSlip;
