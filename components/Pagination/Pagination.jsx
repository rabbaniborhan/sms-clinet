import React from "react";
import { ArrowLeft, ArrowRight } from "../../icons/icons";

// <---------------The parent component is Table/Table.jsx + teacher-info/Teachers.jsx---------------------->

const Pagination = () => {
  const pageArr = [1, 2, 3, 4, 5, ".", ".", ".", ".", "."];
  return (
    <div className='flex justify-center items-center py-5 my-16 text-primary-color '>
      <span className='p3'>
        <ArrowLeft className='text-2xl' />
      </span>
      <div className='flex justify-between items-center gap-3 text-base'>
        {pageArr.map((item, i) => (
          <button
            className='cursor-pointer w-5 rounded-sm hover:bg-primary hover:text-white transition delay-[0.03s] ease-in'
            key={i}>
            {item}
          </button>
        ))}
      </div>
      <span className='p3'>
        <ArrowRight className='text-2xl' />
      </span>
    </div>
  );
};

export default Pagination;
