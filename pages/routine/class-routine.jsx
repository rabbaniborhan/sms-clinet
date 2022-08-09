import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Navbar, SubNav } from "../../components";
import ClassRoutine from "./ClassRoutine";
import RoutineSearchForm from "./RoutineSearchForm";

const ClassRoutinePage = () => {
  const router = useRouter();
  const [searchData, setSearchData] = useState({});

  return (
    <div>
      <SubNav path={router.asPath} />
      <div className='w-4/5 mx-auto relative'>
        <Navbar path={router.asPath} />
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

              {searchData.class && (
                <p className='text-center capitalize'>
                  class - {searchData.class}
                </p>
              )}
            </div>
          </div>

          {searchData.class ? (
            <ClassRoutine state={searchData} />
          ) : (
            <RoutineSearchForm
              actions={{ state: searchData, setState: setSearchData }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassRoutinePage;