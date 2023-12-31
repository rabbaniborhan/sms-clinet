import Image from "next/image";
import React from "react";
import images from "../../assets";
import ExamRoutineTableData from "./ExamRoutineTableData";

const ExamRoutine = ({ tableData }) => {
  return (
    <div>
      <div className='lg:w-9/12 mx-auto py-10 lg:px-10 px-5 bg-white text-primary-text relative border border-gray-300'>
        <div className='absolute lg:top-1/2 lg:left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <Image src={images.bigLogo} height={600} width={600} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.schoolLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Exam Routine - 2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
          <p>Class - </p>
        </div>
        <table className='border-collapse w-full my-10 text-gray-600 '>
          <thead>
            <tr>
              <th className='border-[0.5px] border-gray-400 py-2 px-3'>Date</th>
              <th className='border-[0.5px] border-gray-400 py-2 px-3'>Time</th>
              <th className='border-[0.5px] border-gray-400 py-2 px-3'>
                Subject
              </th>
            </tr>
          </thead>
          {tableData?.map((item, i) => (
            <ExamRoutineTableData key={i} data={item} />
          ))}
        </table>
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

export default ExamRoutine;
