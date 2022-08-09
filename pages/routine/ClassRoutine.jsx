import Image from "next/image";
import React from "react";
import images from "../../assets";

const ClassRoutine = ({ state }) => {
  return (
    <div>
      <div className='w-11/12 mx-auto py-10 px-10 bg-white'>
        <div className='text-center space-y-2'>
          <Image src={images.schoolLogo} />
          <h2 className='text-3xl text-bold'>
            Purba Rampura High School & College
          </h2>
          <h3 className='text-semibold text-xl flex flex-col justify-center items-center gap-1'>
            Class Routine - 2022
            <span className='bg-gray-400 py-[1px] w-52'></span>
          </h3>
          <p>Class - {state.class}</p>
        </div>
        <table className='w-full my-10 text-gray-600'>
          <thead>
            <tr>
              <th className='text-2xl border-[0.5px] border-gray-600 py-2 px-10'>
                Day
              </th>
              <th className='border-[0.5px] border-gray-600 py-2 px-3'>
                7:00 - 7:40 am
              </th>
              <th className='border-[0.5px] border-gray-600 py-2 px-3'>
                7:00 - 7:40 am
              </th>
              <th className='border-[0.5px] border-gray-600 py-2 px-3'>
                7:00 - 7:40 am
              </th>
              <th className='border-[0.5px] border-gray-600 py-2 px-3'>
                7:00 - 7:40 am
              </th>
              <th className='border-[0.5px] border-gray-600 py-2 px-3'>
                7:00 - 7:40 am
              </th>
              <th className='border-[0.5px] border-gray-600 py-2 px-3'>
                7:00 - 7:40 am
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className='py-4 px-3 font-semibold text-2xl border-[0.5px] border-gray-600'>
                Saturday
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 px-3 font-semibold text-2xl border-[0.5px] border-gray-600'>
                Saturday
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 px-3 font-semibold text-2xl border-[0.5px] border-gray-600'>
                Saturday
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 px-3 font-semibold text-2xl border-[0.5px] border-gray-600'>
                Saturday
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 px-3 font-semibold text-2xl border-[0.5px] border-gray-600'>
                Saturday
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
            </tr>
            <tr className='text-center'>
              <td className='py-4 px-3 font-semibold text-2xl border-[0.5px] border-gray-600'>
                Saturday
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
              <td className='py-4 px-3  border-[0.5px] border-gray-600'>
                <h3 className='text-xl font-semibold'>Bangla</h3>
                <span>Wade Warren</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='flex justify-end items-end gap-3 w-11/12 mx-auto my-16'>
        <button className='bg-yellow text-white py-3 w-36 rounded'>
          Print
        </button>
        <button className='bg-primary text-white py-3 w-36 rounded'>
          Download
        </button>
      </div>
    </div>
  );
};

export default ClassRoutine;
