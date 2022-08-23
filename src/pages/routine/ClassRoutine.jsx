import Image from "next/image";
import React from "react";
import images from "../../assets";
import ClassRoutineTableData from "./ClassRoutineTableData";

const ClassRoutine = ({ classRoutineData }) => {
  return (
    <div>
      <div className='w-11/12 mx-auto py-10 px-10 text-primary-text bg-white relative'>
        <div className='absolute lg:left-[220px] xl:left-[359px] lg:top-40'>
          <Image src={images.bigLogo} />
        </div>
        <div className='text-center space-y-2'>
          <Image src={images.schoolLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Class Routine - 2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
          <p>Class -</p>
        </div>
        <table className='w-full my-10'>
          <thead>
            <tr>
              <th className='text-2xl border-[0.5px] border-gray-400 py-2 px-10'>
                Day
              </th>
              {classRoutineData?.map((item, i) => (
                <th
                  className='border-[0.5px] border-gray-400 py-2 px-3'
                  key={i}>
                  {item.time}
                </th>
              ))}
            </tr>
          </thead>

          {classRoutineData?.map((item, i) => (
            <ClassRoutineTableData
              day={item.day}
              teacher={item.teacher}
              subject={item.subject}
              key={i}
            />
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

export default ClassRoutine;
