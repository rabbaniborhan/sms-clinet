import React from "react";
import { Telephone, Email, Clock } from "../../constants/icons";

const ContactDetails = () => {
  return (
    <div className='w-4/5 mx-auto my-20'>
      <div className='flex justify-center'>
        <div className='space-y-3 w-2/5'>
          <div className='flex flex-col gap-3'>
            <h3 className='text-[#0D1530CC] font-bold text-5xl'>
              Contact Details
            </h3>
            <h4 className='text-primary-color font-semibold text-lg'>
              East Rampura High School
            </h4>
            <span>SMS– 20853 – Biassono (MB) Via dei Gelsi, 41/43</span>
            <span className='flex items-center justify-start gap-2'>
              <Telephone />
              +39 039 232 4066
            </span>
            <span className='flex items-center justify-start gap-2'>
              <Email /> info@tsitalia.it
            </span>
            <span className='flex items-center justify-start gap-2'>
              <Clock /> Mon – Fri 8:30-18:30
            </span>
          </div>
        </div>

        <form
          action='/'
          className='p-10 bg-white shadow-xl flex flex-col justify-center items-center gap-5 text-gray-700 2/5 border border-gray-300'>
          <input
            className='outline-none ring-1 ring-gray-400 p-2.5 w-96 '
            type='text'
            name='name'
            placeholder='Name'
          />
          <input
            className='outline-none ring-1 ring-gray-400 p-2.5 w-96'
            type='email'
            name='name'
            placeholder='Email'
          />
          <textarea
            className='outline-none ring-1 ring-gray-400 border-gray-400 p-2 w-96 h-40'
            name='message'
            placeholder='Write your message'></textarea>
          <button className='w-96 py-2 bg-primary outline-none rounded text-white font-semibold'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactDetails;
