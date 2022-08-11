import Image from "next/image";
import React from "react";
import images from "../../assets";
import { examRoutineData } from "../../dummy_data/routineData";
import ExamRoutineTableData from "./ExamRoutineTableData";

const ExamRoutine = ({ state }) => {
  return (
    <div>
      <div className='w-11/12 mx-auto py-10 px-10 bg-white text-primary-text'>
        <div className='text-center space-y-2'>
          <Image src={images.schoolLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Exam Routine - 2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
          <p>Class - {state.class}</p>
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
          {examRoutineData.map((item, i) => (
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
