import Image from "next/image";
import React from "react";
import images from "../../assets";

// <---------------The parent component is index/Homepage.jsx---------------------->

const PrincipalSection = () => {
  return (
    <div className='lg:h-[90vh] xl:h-[60vh] lg:py-20 lg:my-20 my-10 xl:py-10 xl:mb-10 lg:flex justify-between'>
      <div className='relative lg:w-[700px] h-[300px] w-full lg:h-[600px] lg:-mt-32'>
        <Image src={images.principalImg} layout='fill' />
      </div>
      <div className='lg:w-2/4 w-11/12 mx-auto space-y-4 flex flex-col lg:pr-60 mt-10 font-bangla'>
        <h4 className='text-[#FF9900] font-semibold text-xl'>প্রধান অধ্যক্ষ</h4>
        <h2 className='text-[#0D1530CC] font-bold text-4xl leading-[60px]'>
          ড. সাবরিনা সুলতানা - <br /> পূর্ব রামপুরা স্কুল এন্ড কলেজ
        </h2>
        <p className='text-[#0D1530CC] leading-10'>
          যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো,
          তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি যদি নিশ্চিত হও যে,
          তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে অন্যের শেখানো বুলি আত্মস্থ করছো
          না, তাহলে তুমি নির্ভয়ে, নিশ্চিন্তে অগ্রসর হও।
        </p>
      </div>
    </div>
  );
};

export default PrincipalSection;
