import React from "react";
import Image from "next/image";
import images from "../../assets";

// <---------------The parent component is index/Homepage.jsx---------------------->

const InfoSection = () => {
  return (
    <div className='flex justify-around items-center w-4/5 h-[80vh] py-20 mt-20 lg:mb-32 xl:mb-0 mx-auto'>
      <div className='relative w-2/5 h-2/3'>
        <div className='absolute w-[440px] h-[390px] bg-[#5BC0B7] rounded-[20px]'></div>
        <div className='absolute mt-[-35%] ml-[-10%]'>
          <Image src={images.infoImage1} width={350} height={450} />
        </div>
        <div className='absolute mt-[40%] -right-5'>
          <Image src={images.infoImage2} width={350} height={250} />
        </div>
      </div>
      <div className='w-2/5 space-y-6 flex flex-col justify-start font-bangla'>
        <h4 className='text-[#FF9900] font-semibold text-xl'>
          প্রাতিষ্ঠানিক তথ্য
        </h4>
        <h2 className='text-[#0D1530CC] font-bold text-4xl'>
          পূর্ব রামপুরা স্কুল এন্ড কলেজ
        </h2>
        <p className='text-[#0D1530CC] leading-10'>
          যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো,
          তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি যদি নিশ্চিত হও যে,
          তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে অন্যের শেখানো বুলি আত্মস্থ করছো
          না, তাহলে তুমি নির্ভয়ে, নিশ্চিন্তে অগ্রসর হও। যে কথাকে কাজে লাগাতে
          চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো, তুমি কি সেই কথার
          জাদুতে আচ্ছন্ন হয়ে গেছ কিনা।
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex justify-center items-center gap-3'>
            <Image src={images.studentPng} alt='student_svg' />
            <div className='flex flex-col'>
              <span className='text-3xl text-[#1EB3A6] font-semibold'>
                ৩০০০+
              </span>
              <p className='text-[#0D1530CC] mt-2'>শিক্ষার্থীর সংখ্যা</p>
            </div>
          </div>
          <div className='flex justify-between items-center gap-3'>
            <Image src={images.blackboardPng} alt='blackboard_image' />
            <div className='flex flex-col justify-between'>
              <span className='text-3xl text-[#1EB3A6] font-semibold'>
                ৫০০+
              </span>
              <p className='text-[#0D1530CC] mt-2 font-base'>
                শ্রেণীকক্ষের সংখ্যা
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
