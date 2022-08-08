import Image from "next/image";
import React from "react";
import images from "../../assets";

// <---------------The parent component is index/Homepage.jsx + about-us.jsx/AboutUs---------------------->

const StatisticsSection = () => {
  return (
    <div className='flex justify-between items-center h-[85vh] py-10 my-20 bg-primary rounded-tr-full rounded-br-full'>
      <div className='w-1/2 space-y-6 pl-40'>
        <h4 className='text-white font-semibold text-xl'>
          প্রাতিষ্ঠানিক স্ট্যাটিস্টিক
        </h4>
        <h2 className='text-white font-bold text-4xl'>
          পূর্ব রামপুরা স্কুল এন্ড কলেজ
        </h2>
        <p className='text-white leading-10'>
          যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো,
          তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি যদি নিশ্চিত হও যে,
          তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে অন্যের শেখানো বুলি আত্মস্থ করছো
          না, তাহলে তুমি নির্ভয়ে, নিশ্চিন্তে অগ্রসর হও। যে কথাকে কাজে লাগাতে
          চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো, তুমি কি সেই কথার
          জাদুতে আচ্ছন্ন হয়ে গেছ কিনা।
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center gap-3'>
            <Image src={images.studentSvg} alt='student_svg' />
            <div className='flex flex-col'>
              <span className='text-3xl text-white font-semibold'>৩০০০+</span>
              <p className='text-white mt-2'>শিক্ষার্থীর সংখ্যা</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <Image src={images.chairSvg} alt='blackboard_image' />
            <div className='flex flex-col justify-between'>
              <span className='text-3xl text-white font-semibold'>৫০০০+</span>
              <p className='text-white mt-2 font-base'>আসন সংখ্যা</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center gap-3'>
            <Image src={images.blackboardSvg} alt='student_svg' />
            <div className='flex flex-col'>
              <span className='text-3xl text-white font-semibold'>৫০০+</span>
              <p className='text-white mt-2'>শ্রেণীকক্ষের সংখ্যা</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3 ml-5'>
            <Image src={images.teacherSvg} alt='blackboard_image' />
            <div className='flex flex-col justify-between'>
              <span className='text-3xl text-white font-semibold'>৫০০+</span>
              <p className='text-white mt-2 font-base'>শিক্ষক/শিক্ষিকা</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-2/5 mt-1'>
        <Image src={images.studentHoldingBooks} height={900} width={900} />
      </div>
    </div>
  );
};

export default StatisticsSection;
