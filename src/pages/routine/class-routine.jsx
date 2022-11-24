import React from "react";
import { LayoutSecond } from "../../components";
import ClassRoutine from "./ClassRoutine";
import RoutineSearchForm from "./RoutineSearchForm";
import { getClassRoutineData } from "../../../routineData";

const ClassRoutinePage = ({ classRoutineData }) => {
  return (
    <LayoutSecond>
      <head>
        <meta name='viewport' content='width=1180'></meta>
      </head>
      <div className='lg:w-4/5 w-11/12 mx-auto'>
        <div className=' py-20 my-20'>
          <div>
            <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
              Class Routine
            </h2>
            <div className='mb-10'>
              <div className='flex justify-center items-center'>
                <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
                <span className='w-80 py-[1px] bg-primary'></span>
                <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
              </div>
              <div className='flex justify-center items-center'>
                <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
                <span className='w-60 py-[1px] bg-primary'></span>
                <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
              </div>

              <p className='text-center capitalize'>class -</p>
            </div>
          </div>

          <ClassRoutine classRoutineData={classRoutineData} />

          <RoutineSearchForm />
        </div>
      </div>
    </LayoutSecond>
  );
};

export async function getStaticProps() {
  const classRoutineData = await getClassRoutineData();

  return {
    props: {
      classRoutineData: classRoutineData,
    },
    revalidate: 30,
  };
}

export default ClassRoutinePage;
