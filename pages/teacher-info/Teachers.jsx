import React from "react";
import Image from "next/image";
import teacherData from "../../teacherData";
import { Pagination } from "../../components";

// <---------------The parent component is teacher-info/index.jsx---------------------->

const Teachers = () => {
  return (
    <div className='w-4/5 mx-auto py20 my-32'>
      <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
        Teachers Info
      </h2>
      <div className='mb-5'>
        <div className='flex justify-center items-center'>
          <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
          <span className='w-72 py-[1px] bg-primary'></span>
          <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
        </div>
        <div className='flex justify-center items-center'>
          <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
          <span className='w-52 py-[1px] bg-primary'></span>
          <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
        </div>
      </div>
      <div className='flex justify-around items-center gap-5 flex-wrap w-4/5 mx-auto'>
        {teacherData.map((item, i) => (
          <div
            className='flex flex-col justify-center items-center space-y-2 p-6 rounded-lg shadow-2xl w-70 bg-white'
            key={i}>
            <Image src={item.image} alt={item.name} width={200} height={200} />
            <h3 className='text-primary-color font-semibold text-xl'>
              {item.name}
            </h3>
            <h4 className='text-primary-color font-semibold text-base'>
              {item.title}
            </h4>
            <div className='text-[#0D1530CC]'>
              <p>{item.number}</p>
              <p>{item.email}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Teachers;
