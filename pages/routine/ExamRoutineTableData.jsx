import React from "react";

const ExamRoutineTableData = ({ data }) => {
  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-2.5 px-1  border-[0.5px] border-gray-400'>
          <p className='text-base font-semibold'>{data.date}</p>
          <span>{data.day}</span>
        </td>

        <td className='py-2.5 px-3  border-[0.5px] border-gray-400'>
          <p className='text-base font-semibold'>{data.time}</p>
        </td>

        <td className='py-2.5 px-3  border-[0.5px] border-gray-400'>
          <p className='text-base font-semibold'>{data.subject}</p>
        </td>
      </tr>
    </tbody>
  );
};

export default ExamRoutineTableData;
