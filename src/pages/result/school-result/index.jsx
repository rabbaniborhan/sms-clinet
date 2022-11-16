import React from "react";
import { LayoutSecond } from "../../../components";
import { getReportData } from "../../../constants/reportCardData";
import MarkSheet from "./MarkSheet";
import SchoolResultSearchForm from "./SchoolResultSearchForm";

// Applying a second layout for this page

const SchoolResultPage = ({ reportData }) => {
  return (
    <LayoutSecond>
      <div className='lg:w-4/5 w-11/12 mx-auto py-32 lg:px-32'>
        <div>
          <h2 className='text-latest-news-color text-center text-4xl my-5 font-bold'>
            Search Result Marksheet
          </h2>
          <div className='mb-10'>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='w-[500px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
            <div className='flex justify-center items-center'>
              <span className='bg-primary p-2 mr-[-2px] table-polygon'></span>
              <span className='lg:w-[400px] w-[200px] py-[1px] bg-primary'></span>
              <span className='bg-primary p-2 ml-[-2px] table-polygon'></span>
            </div>
          </div>
        </div>

        <SchoolResultSearchForm />

        <MarkSheet reportData={reportData} />
      </div>
    </LayoutSecond>
  );
};

export async function getStaticProps() {
  const reportData = await getReportData();

  return {
    props: {
      reportData: reportData,
    },
    revalidate: 30,
  };
}

export default SchoolResultPage;
