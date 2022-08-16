import React from "react";

const AcknowledgementTable = () => {
  return (
    <table className='w-full mx-auto my-12'>
      <thead>
        <tr>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Exam
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Roll
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Board
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Year
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            Group
          </th>
          <th className='py-1 px-2 text-center border-[0.5px] border-gray-500'>
            GPA
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            HSC/Equlv.
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            92986735
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            Rajshahi
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            2017
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            Humanities
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            Humanities
          </td>
        </tr>
        <tr>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            SSC/Equlv.
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            92986735
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            Rajshahi
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            2017
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            Humanities
          </td>
          <td className='py-2 px-3 text-center border-[0.5px] border-gray-500'>
            Humanities
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AcknowledgementTable;
