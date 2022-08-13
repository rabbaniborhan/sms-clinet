import React from "react";
import { Selector } from "../../components";

const classes = [{ name: "One" }, { name: "Two" }, { name: "Three" }];
const sections = [{ name: "A" }, { name: "B" }, { name: "C" }];
const groups = [{ name: "Science" }, { name: "Commerce" }, { name: "Arts" }];

const RoutineSearchForm = ({ actions }) => {
  return (
    <div className='w-3/5 mx-auto py-20  flex flex-col justify-center items-center bg-white'>
      <form className='flex flex-col justify-center items-center gap-10'>
        <div className='flex justify-center items-center w-[500px] gap-10'>
          <label
            className='font-semibold text-md text-gray-500 w-8 '
            htmlFor='class'>
            Class
          </label>
          <label
            className='font-semibold text-md text-gray-500'
            htmlFor='class'>
            :
          </label>
          {/* Custom selector for selecting class */}

          <Selector data={classes} />
        </div>
        <div className='flex justify-center items-center w-[500px] gap-10'>
          <label
            className='font-semibold text-md text-gray-500 w-8'
            htmlFor='class'>
            Section
          </label>
          <label
            className='font-semibold text-md text-gray-500'
            htmlFor='class'>
            :
          </label>
          {/* Custom selector for selecting section */}

          <Selector data={sections} />
        </div>
        <div className='flex justify-center items-center w-[500px] gap-10'>
          <label
            className='font-semibold text-md text-gray-500 w-8'
            htmlFor='class'>
            Group
          </label>
          <label
            className='font-semibold text-md text-gray-500'
            htmlFor='class'>
            :
          </label>
          {/* Custom selector for selecting group */}

          <Selector data={groups} />
        </div>
        <button
          className='-ml-32 bg-primary py-2 w-36 rounded text-white'
          onClick={() => actions.setState(true)}>
          Search
        </button>
      </form>
    </div>
  );
};

export default RoutineSearchForm;
