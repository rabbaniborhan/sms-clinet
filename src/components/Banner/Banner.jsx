import React from "react";
import Image from "next/image";
import { Navbar, SubNav } from "../index";
import images from "../../assets";

// <---------------The parent component is index.jsx/Homepage + teacher-info.jsx + staff-info.jsx + about-us.jsx + contact.jsx---------------------->

const Banner = ({ path, navPath, subPath }) => {
  return (
    <div className='bg-primary -z-10'>
      <div className='w-4/5 mx-auto relative overflow-hidden'>
        <SubNav subPath={subPath} />
        <Navbar navPath={navPath} />

        {/* Conditionally setting the height of the banner for Homepage and also for other pages */}
        <div
          className={`flex justify-center items-center relative ${
            path.heightAlter ? `h-[60vh]` : `h-[76vh]`
          } w-full`}>
          <div className='text-white'>
            {/* Conditionally rendering the banner-texts for teacher-info and
            staff-info page or other pages */}

            {path.textAlter ? (
              <div className='space-y-6 mt-10'>
                <h4 className='font-semibold text-xl'>প্রধান অধ্যক্ষ</h4>
                <h2 className='font-bold text-4xl leading-[50px]'>
                  ড. সাবরিনা সুলতানা - <br /> পূর্ব রামপুরা স্কুল এন্ড কলেজ
                </h2>
                <p className='leading-10 w-3/5'>
                  যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                  আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি
                  যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে
                  অন্যের শেখানো বুলি আত্মস্থ করছো না, তাহলে তুমি নির্ভয়ে,
                  নিশ্চিন্তে অগ্রসর হও।
                </p>
              </div>
            ) : (
              <div className='space-y-6'>
                <h1 className='text-5xl font-bold'>
                  পূর্ব রামপুরা স্কুল এন্ড কলেজ
                </h1>
                <p className='w-3/5 leading-10'>
                  যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                  আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা তুমি
                  যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে
                </p>
              </div>
            )}

            {/* This button area is rendered conditionally as per the page url. It only renders for the Homepage */}
            {path.btn && (
              <div className='space-x-3 mt-8'>
                <button className='px-8 py-2 rounded-sm outline-none ring-1 ring-white bg-yellow'>
                  Log in
                </button>
                <a href='/'>Learn more</a>
              </div>
            )}
          </div>

          {/* Applying image width and height as per the page url passed in the props. It applies different width and height for Homepage and other pages. Also conditionally applying image for staff-info and teacher-info page */}
          <div className={`absolute ${path ? `right-16` : `right-[90px]`} `}>
            <Image
              src={path.imageAlter ? images.principalImg2 : images.headerImage}
              alt='female-student-holding-books'
              height={path.heightAlter ? 435 : 550}
              width={path.heightAlter ? 320 : 380}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;