import React from "react";
import Image from "next/image";
import { Navbar, SubNav } from "../index";
import images from "../../assets";

// <---------------The parent component is index.jsx/Homepage + teacher-info.jsx + staff-info.jsx + about-us.jsx + contact.jsx---------------------->

const Banner = ({ path, navPath, subPath, setShowModal }) => {
  return (
    <div className='bg-primary -z-10'>
      <div className='w-4/5 mx-auto relative overflow-hidden'>
        <SubNav subPath={subPath} />
        <Navbar navPath={navPath} setShowModal={setShowModal} />

        {/* Conditionally setting the height of the banner for Homepage and also for other pages */}

        <div
          className={`flex justify-between items-center banner-height relative ${
            path.heightAlter ? `lg:h-[60vh]` : `lg:banner-height`
          } w-full`}>
          <div className='text-white'>
            {/* Conditionally rendering the banner-texts for teacher-info and
            staff-info page or other pages */}

            {path.textAlter ? (
              <div className='space-y-6 mt-10'>
                <h4 className='font-semibold text-xl'>প্রধান অধ্যক্ষ</h4>
                <h2 className='font-bold lg:text-4xl lg:leading-[50px] xl:text-5xl xl:leading-[70px]'>
                  ড. সাবরিনা সুলতানা - <br /> পূর্ব রামপুরা স্কুল এন্ড কলেজ
                </h2>
                <p className='w-3/5 lg:text-md lg:leading-[30px] xl:text-xl xl:leading-[40px]'>
                  যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                  আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি
                  যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে
                  অন্যের শেখানো বুলি আত্মস্থ করছো না, তাহলে তুমি নির্ভয়ে,
                  নিশ্চিন্তে অগ্রসর হও।
                </p>
              </div>
            ) : (
              <div className='space-y-6 xl:space-y-10'>
                <h1 className='lg:text-5xl font-bold xl:text-6xl'>
                  পূর্ব রামপুরা স্কুল এন্ড কলেজ
                </h1>
                <p className='w-3/5 lg:leading-[30px] xl:leading-[40px] xl:text-xl'>
                  যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                  আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা তুমি
                  যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে
                </p>
              </div>
            )}

            {/* This button area is rendered conditionally as per the page url. It only renders for the Homepage */}
            {path.btn && (
              <div className='space-x-3 mt-8'>
                <button className='px-8 py-2 rounded-sm outline-none bg-yellow'>
                  Log in
                </button>
                <a href='/'>Learn more</a>
              </div>
            )}
          </div>

          {/* Applying image width and height as per the page url passed in the props. It applies different image for Homepage and other pages. Also conditionally applying image for staff-info and teacher-info page */}
          {!path.imageAlter ? (
            <div
              className={`absolute ${
                path.heightAlter
                  ? "lg:h-[350px] lg:w-[220px] lg:-mb-20 xl:h-[550px] xl:w-[360px] xl:-mb-28 xl:right-20 lg:right-32"
                  : "lg:h-[500px] lg:w-[320px] xl:h-[800px] xl:w-[550px] xl:right-0 lg:right-16 lg:-mb-20 xl:-mb-40"
              }`}>
              <Image
                src={images.headerImage}
                alt='female-student-holding-books'
                layout='fill'
                objectFit='cover'
              />
            </div>
          ) : (
            <div
              className={`absolute ${
                path.heightAlter && "xl:h-[540px] xl:w-[450px] xl:-mb-28"
              } lg:h-[330px] lg:w-[270px] lg:-mb-24 lg:right-28 xl:right-16`}>
              <Image
                src={images.principalImg2}
                alt='female-student-holding-books'
                layout='fill'
                objectFit='cover'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
