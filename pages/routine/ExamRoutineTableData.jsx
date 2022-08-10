import React from "react";

const ExamRoutineTableData = ({ date, day, time, subject }) => {
  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-2.5 px-1  border-[0.5px] border-gray-400'>
          <p className='text-base font-semibold'>{date}</p>
          <span>{day}</span>
        </td>

        <td className='py-2.5 px-3  border-[0.5px] border-gray-400'>
          <p className='text-base font-semibold'>{time}</p>
        </td>

        <td className='py-2.5 px-3  border-[0.5px] border-gray-400'>
          <p className='text-base font-semibold'>{subject}</p>
        </td>
      </tr>
    </tbody>
  );
};

export default ExamRoutineTableData;
