import React from "react";

const AcknowledgementInst = () => {
  return (
    <div className='w-full mx-auto my-20 font-bangla'>
      <div className='space-y-5'>
        <h3 className='text-bold text-xl'>Admission এর নির্দেশাবলীঃ</h3>
        <p>
          ১। Online এ Admission Fee Payment এর জন্য Student ID জানা আবশ্যক
          Student ID ব্যবহার করে আপনার Admission ফিস কত হয়েছে বা কত টাকা পরিশোধ
          করতে হবে তা জানতে এবং Admission ফিস এর টাকা পরিশোধ করুন।
        </p>
        <p>
          ২। Pay Slip Download করার জন্য{" "}
          <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
            এখানে ক্লিক
          </a>{" "}
          করুন এবং Student Applicant Copy Download করার জন্য{" "}
          <a href='#' className='p-1 text-white rounded bg-[#1EB3A6]'>
            এখানে ক্লিক
          </a>{" "}
          করুন।
        </p>
        <p>
          ৩। Download কৃত Pay Slip ও Applicant Copy সংশ্লিষ্ট প্রতিষ্ঠানে জমা
          দিন এবং আপনার সন্তানের ভর্তি প্রক্রিয়া সম্পূর্ণ করুন।
        </p>
      </div>
      <div className='text-center mt-20'>
        <button className='w-40 py-3 rounded px-6 bg-yellow text-white text-xl'>
          Pay now
        </button>
      </div>
    </div>
  );
};

export default AcknowledgementInst;
