import React from "react";
import { useRef } from "react";

const RoutineSearchForm = ({ actions }) => {
  const classRef = useRef();
  const sectionRef = useRef();
  const groupRef = useRef();

  console.log(actions);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInputData = {
      class: classRef.current.value,
      section: sectionRef.current.value,
      group: groupRef.current.value,
    };

    actions.setState({ ...searchInputData });
  };

  return (
    <div className='w-3/5 mx-auto py-20  flex flex-col justify-center items-center bg-white'>
      <form
        className='flex flex-col justify-center items-center gap-10'
        onSubmit={handleSubmit}>
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
          <select
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'
            ref={classRef}>
            <option disabled selected>
              Please Select
            </option>
            <option value='One'>Class 1</option>
            <option value='Two'>Class 2</option>
            <option value='Three'>Class 3</option>
            <option value='Four'>Class 4</option>
            <option value='Five'>Class 5</option>
            <option value='Six'>Class 6</option>
          </select>
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
          <select
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'
            ref={sectionRef}>
            <option disabled selected>
              Please Select
            </option>
            <option value='section A'>Section A</option>
            <option value='section B'>Section B</option>
            <option value='section C'>Section C</option>
            <option value='section D'>Section D</option>
            <option value='section E'>Section E</option>
            <option value='section F'>Section F</option>
          </select>
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
          <select
            className='px-1 py-2 w-96 rounded ring-2 ring-gray-300 outline-none'
            name='class'
            id='class'
            ref={groupRef}>
            <option disabled selected>
              Please Select
            </option>
            <option value='Science'>Science</option>
            <option value='Commerce'>Commerce</option>
            <option value='Arts'>Arts</option>
          </select>
        </div>
        <button className='-ml-32 bg-primary py-2 w-36 rounded text-white'>
          Search
        </button>
      </form>
    </div>
  );
};

export default RoutineSearchForm;
