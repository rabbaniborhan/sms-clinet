import React from "react";
import { useState } from "react";
import { LayoutSecond } from "../../components";
import MarkSheet from "./MarkSheet";
import SchoolResultSearchForm from "./SchoolResultSearchForm";

// Applying a second layout for this page

const SchoolResultPage = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <LayoutSecond>
      <div className='w-4/5 mx-auto py-32 px-32'>
        <div>
          <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
            {!isTrue ? "Search Result Marksheet" : "Student Marksheet"}
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[500px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[400px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
          </div>
        </div>

        {!isTrue ? (
          <SchoolResultSearchForm setIsTrue={setIsTrue} />
        ) : (
          <MarkSheet />
        )}
      </div>
    </LayoutSecond>
  );
};

export default SchoolResultPage;
