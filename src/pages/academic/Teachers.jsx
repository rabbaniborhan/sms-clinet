import React from "react";
import Image from "next/image";
import teacherData from "../../constants/teacherData";

// <---------------The parent component is teacher-info/index.jsx---------------------->

const Teachers = ({ alterText }) => {
  return (
    <div className='w-11/12 mx-auto py-20 mb-10'>
      <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
        {alterText ? "Staff Info" : "Teacher Info"}
      </h2>
      <div className='mb-5 xl:mb-10'>
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
      <div className='flex justify-around items-center gap-y-10 xl:gap-x-12 xl:gap-y-20 lg:gap-x-10 lg:gap-y-20 flex-wrap w-4/5 mx-auto mt-12'>
        {teacherData.map((item, i) => (
          <div
            className='flex flex-col justify-center items-center space-y-2 lg:p-6 xl:p-8 rounded-2xl shadow-md w-70 bg-white'
            key={i}>
            <Image src={item.image} alt={item.name} height={250} width={250} />
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
    </div>
  );
};

export default Teachers;
