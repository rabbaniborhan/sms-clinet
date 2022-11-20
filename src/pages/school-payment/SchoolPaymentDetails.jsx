import React from "react";

const SchoolPaymentDetails = () => {
  return (
    <div>
      <div className='lg:w-3/4 w-11/12 mx-auto bg-white border border-gray-300 lg:p-10 p-5'>
        <div className='lg:flex justify-between capitalize'>
          <div className='font-corsiva flex lg:justify-between items-center capitalize'>
            <div className='space-y-4 font-semibold text-base'>
              <p>Student name</p>
              <p>class</p>
              <p>roll no</p>
            </div>
            <div className='lg:mx-14 ml-4 lg:ml-0 lg:mr-0 mr-12 space-y-4'>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className='space-y-4 text-md'>
              <p>Shanto Kumar</p>
              <p>Ten</p>
              <p>9120</p>
            </div>
          </div>
          <div className='flex justify-between capitalize'>
            <div className='lg:w-1/5 font-semibold text-base space-y-4 lg:-mr-10 -ml-4 lg:ml-0'>
              <p className='w-16'>Section</p>
              <p className='w-16'>Session</p>
              <p className='w-16'>Phone</p>
            </div>
            <div className='lg:ml-24 lg:mr-10 space-y-4'>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div className='text-md space-y-4'>
              <p>Session</p>
              <p>2022</p>
              <p>01647622755</p>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto lg:overscroll-x-none'>
          <table className='w-full mx-auto mt-10'>
            <thead>
              <tr className='bg-[#97F4EC]'>
                <th className='py-3 px-5 font-bold border-x-[0.5px] border-gray-300 text-left'>
                  Sl
                </th>
                <th className='py-3 px-5 font-bold border-x-[0.5px] border-gray-300 text-left'>
                  Description
                </th>
                <th className='py-3 px-5 font-bold border-x-[0.5px] border-gray-300 text-left'>
                  Month
                </th>
                <th className='py-3 px-5 w-60 font-bold border-x-[0.5px] border-gray-300 text-right'>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className='text-gray-500 border-[0.5px] border-gray-300'>
              {/* ------------------------Admission fee row---------------------- */}
              <tr className='border-x-[0.5px] border-gray-300 bg-[#FFFFFF]'>
                <td className='py-3 px-5 text-left font-semibold'>1</td>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  Admission fee
                </td>
                <td className='py-3 px-5 text-left font-semibold'>
                  Jan - June
                </td>
                <td className='py-3 px-5 text-right font-semibold border-x-[0.5px] border-gray-300'>
                  500
                </td>
              </tr>

              {/* -------------------------Tution fee row--------------------------  */}
              <tr className='border-x-[0.5px] border-gray-300 bg-[#F0F0F0]'>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  2
                </td>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  Tution fee
                </td>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  -
                </td>
                <td className='py-3 px-5 text-right font-semibold border-x-[0.5px] border-gray-300'>
                  3000
                </td>
              </tr>

              {/* ---------------------------Exam fee row--------------------------- */}
              <tr className='border-x-[0.5px] border-gray-300 bg-[#ffffff]'>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  3
                </td>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  Exam fee
                </td>
                <td className='py-3 px-5 text-left font-semibold'>-</td>
                <td className='py-3 px-5 text-right font-semibold border-x-[0.5px] border-gray-300'>
                  500
                </td>
              </tr>

              {/* -------------------------Registration fee row--------------------- */}
              <tr className='border-x-[0.5px] border-gray-300 bg-[#F0F0F0]'>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  3
                </td>
                <td className='py-3 px-5 text-left font-semibold border-x-[0.5px] border-gray-300'>
                  Registration fee
                </td>
                <td className='py-3 px-5 text-left font-semibold'>-</td>
                <td className='py-3 px-5 text-right font-semibold border-x-[0.5px] border-gray-300'>
                  2000
                </td>
              </tr>

              {/* ------------------------Total fees row----------------------------- */}
            </tbody>
          </table>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex-1'>
            <div className='flex gap-3 mt-14'>
              <p className='w-32 font-semibold'>Payment Method</p>
              <p>:</p>
              <p>Bkash</p>
            </div>
            <div className='mt-5'>
              <input
                type='checkbox'
                name='paymentCheck'
                id='payment'
                className='w-3 h-3 mr-2'
              />
              <label className='text-gray-500' htmlFor='payment'>
                I have checked the payment details Properly and want to procced.
              </label>
            </div>
          </div>
          <div className='w-2/5 flex justify-end items-end gap-11'>
            <span>
              <p>Total Payable</p>
              <p>Paid</p>
              <p className='text-red-500'>Due</p>
            </span>
            <span>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </span>
            <span className='text-right mr-4'>
              <p>2000</p>
              <p>1500</p>
              <p className='text-red-500'>500</p>
            </span>
          </div>
        </div>
      </div>

      <div className='w-3/4 flex justify-end items-end gap-3 mx-auto mt-16'>
        <button className='ring-1 ring-[#5BC0B7] text-[#5BC0B7] py-3 w-36 rounded-md'>
          Back
        </button>
        <button className='bg-primary text-white py-3 w-36 rounded-md'>
          Download
        </button>
      </div>
    </div>
  );
};

export default SchoolPaymentDetails;
