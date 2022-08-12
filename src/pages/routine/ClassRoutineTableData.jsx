import React from "react";

const ClassRoutineTableData = ({ day, teacher, subject }) => {
  return (
    <tbody>
      <tr className='text-center'>
        <td className='py-4 px-3 font-semibold text-2xl border-[0.5px] border-gray-400'>
          {day}
        </td>

        {subject.map((item, i) => (
          <td className='py-4 px-3  border-[0.5px] border-gray-400'>
            <h3 className='text-xl font-semibold'>{item}</h3>
            <span>{teacher}</span>
          </td>
        ))}
      </tr>
    </tbody>
  );
};

export default ClassRoutineTableData;
