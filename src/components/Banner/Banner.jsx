import React from "react";
import Image from "next/image";
import { Navbar, SubNav } from "../index";
import images from "../../assets";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../store/popUpSlice";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

// <---------------The parent component is index.jsx/Homepage + teacher-info.jsx + staff-info.jsx + about-us.jsx + contact.jsx---------------------->

const Banner = ({ path, navPath, subPath, setShowModal, paddingAlter }) => {
  const mobileWidth =
    typeof window !== "undefined" ? window.innerWidth < 769 : null;
  const dispatch = useDispatch();

  const handleShowModal = () => {
    dispatch(popUpActions.togglePopUp());
  };

  return (
    <div className='bg-primary -z-10 w-full'>
      <div className='lg:w-4/5 w-full mx-auto relative overflow-hidden'>
        <SubNav subPath={subPath} />
        <Navbar navPath={navPath} setShowModal={setShowModal} />
        <MobileNavbar />

        {/* Conditionally setting the height of the banner for Homepage and also for other pages */}

        <div
          className={`flex lg:flex-row flex-col justify-between items-end lg:pb-24 xl:pb-40 banner-height lg:relative text-center lg:text-left ${
            path.heightAlter ? `lg:h-[65vh]` : `lg:banner-height`
          } w-full`}>
          <div className='text-white'>
            {/* Conditionally rendering the banner-texts for teacher-info and
            staff-info page or other pages */}

            {path.textAlter ? (
              <div className='font-bangla w-11/12 mx-auto lg:mx-0 mt-5 lg:mt-0 lg:w-auto text-left'>
                <h4 className='font-semibold text-xl my-2'>প্রধান অধ্যক্ষ</h4>
                <h2 className='font-bold text-2xl lg:text-4xl lg:leading-[50px] xl:text-5xl xl:leading-[70px] mb-2'>
                  ড. সাবরিনা সুলতানা - <br /> পূর্ব রামপুরা স্কুল এন্ড কলেজ
                </h2>
                <p className='lg:w-3/5 w-full mx-auto lg:mx-0 lg:text-md lg:leading-[30px] xl:text-xl xl:leading-[40px]'>
                  যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                  আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা। তুমি
                  যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে
                  অন্যের শেখানো বুলি আত্মস্থ করছো না, তাহলে তুমি নির্ভয়ে,
                  নিশ্চিন্তে অগ্রসর হও।
                </p>
              </div>
            ) : (
              <div
                className={`${
                  !path.paddingAlter ? "pb-8" : "pb-4"
                } xl:space-y-10`}>
                <h1 className='lg:text-5xl text-3xl font-bold xl:text-7xl lg:mb-7 mb-4 mt-7 font-bangla'>
                  পূর্ব রামপুরা স্কুল এন্ড কলেজ
                </h1>
                <p className='lg:w-3/5 w-10/12 mx-auto lg:mx-0 lg:leading-[30px] xl:leading-[40px] xl:text-2xl font-bangla'>
                  যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার
                  আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা তুমি
                  যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে যে কথাকে কাজে
                  লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো, তুমি
                  কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা তুমি যদি নিশ্চিত হও
                  যে, তুমি কোনো মোহাচ্ছাদিত আবহে
                </p>
                {path.btn && (
                  <div className='space-x-3 lg:mt-7 mt-5 xl:text-2xl'>
                    <button
                      className='px-7 py-2 lg:px-8 lg:py-2 xl:px-16 xl:py-4 rounded-sm outline-none bg-yellow'
                      onClick={handleShowModal}>
                      Log in
                    </button>
                    <a href='/'>Learn more</a>
                  </div>
                )}
              </div>
            )}

            {/* This button area is rendered conditionally as per the page url. It only renders for the Homepage */}
          </div>

          {/* Applying image width and height as per the page url passed in the props. It applies different image for Homepage and other pages. Also conditionally applying image for staff-info and teacher-info page */}
          {!path.imageAlter ? (
            <div
              className={`lg:absolute ${
                path.heightAlter
                  ? "w-[75%] -mb-2 mx-auto lg:h-[350px] lg:w-[230px] lg:-mb-24 xl:h-[550px] xl:w-[360px] xl:-mb-40 xl:right-20 lg:right-32"
                  : "w-[63%] mx-auto lg:h-[85%] lg:w-[27%] xl:h-[700px] xl:w-[550px] xl:right-0 lg:right-16 lg:-mb-24 xl:-mb-40"
              }`}>
              <Image
                src={images.headerImage}
                alt='female-student-holding-books'
                objectFit='cover'
                layout={mobileWidth === false ? "fill" : "intrinsic"}
              />
            </div>
          ) : (
            <div
              className={`lg:absolute ${
                path.heightAlter &&
                "xl:h-[540px] xl:w-[450px] xl:-mb-28 w-[95%] mx-auto lg:mx-0"
              } lg:h-[330px] lg:w-[280px] lg:-mb-24 lg:right-28 xl:right-16`}>
              <Image
                src={images.principalImg2}
                alt='Principal_image'
                layout={mobileWidth === false ? "fill" : "responsive"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
