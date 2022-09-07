import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "../../constants/icons";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../store/popupSlice";

// <---------------The parent component is Banner.jsx + class-routine.jsx---------------------->

const Navbar = ({ navPath, setShowModal }) => {
  // State for admission's submenu
  const [show, setShow] = useState(false);
  const router = useRouter();

  const dispatch = useDispatch();

  // Funciton for handling the login popUp
  const handleShowModal = () => {
    dispatch(popUpActions.togglePopUp());
  };

  return (
    // <--------------------Dynamically changing the background color of the navbar as per the path got form the props-------------------->
    <div
      className={`mx-auto w-4/5 z-10 bg-navbar ${
        navPath ? " text-white" : `text-primary-color my-6 bg-navbar-2`
      }  pl-2 py-2.5 h-16 rounded-tl rounded-bl flex justify-between items-center shadow-xl absolute w-full`}>
      <ul className='flex justify-around items-center list-none p-0 m-0  text-base w-full'>
        <li
          className={`hover:text-hover px-1 ${
            router.asPath === "/" ? "text-hover" : ""
          }`}>
          <Link href='/'>Home</Link>
        </li>
        <li
          className={`hover:text-hover px-1 ${
            router.asPath === "/about-us" ? "text-hover" : ""
          }`}>
          <Link href='/about-us'>
            <a className='hover:text-hover'>About Us</a>
          </Link>
        </li>

        {/* ------------------------------------------------Academic with submenu Start-------------------------------------------- */}
        <li
          className={`hover:text-hover px-1 relative group ${
            router.asPath.includes("/academic") ? "text-hover" : ""
          }`}>
          <span className='cursor-pointer flex justify-center items-center gap-1 hover:text-hover py-5'>
            Academic <ArrowDown className='text-2xl mt-0.5' />
          </span>

          {/* -------------------------Submenu--------------------------- */}
          <ul className=' w-32 bg-white text-primary-color flex flex-col justify-start items-start absolute invisible group-hover:visible top-16 left-0 transition-all'>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/academic/teacher-info" ? "text-hover" : ""
              }`}>
              <Link href='/academic/teacher-info'>Teacher Info</Link>
            </li>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/academic/staff-info" ? "text-hover" : ""
              }`}>
              <Link href='/academic/staff-info'>Staff Info</Link>
            </li>
          </ul>
        </li>
        {/* ------------------------------------------------Academic with submenu End-------------------------------------------- */}

        {/* ------------------------------------------------Routine with submenu Start-------------------------------------------- */}
        <li className='hover:text-hover group px-1 relative'>
          <span
            className={` cursor-pointer flex justify-center items-center gap-1 py-5 ${
              router.asPath.includes("/routine") ? "text-hover" : ""
            }`}>
            Routine <ArrowDown className='text-2xl mt-0.5' />
          </span>

          {/* -------------------------Submenu--------------------------- */}
          <ul className=' w-32 bg-white text-primary-color flex flex-col justify-start items-start absolute invisible group-hover:visible top-16 left-0 transition-all'>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/routine/class-routine" ? "text-hover" : ""
              }`}>
              <Link href='/routine/class-routine'>Class Routine</Link>
            </li>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/routine/exam-routine" ? "text-hover" : ""
              }`}>
              <Link href='/routine/exam-routine'>Exam Routine</Link>
            </li>
          </ul>
        </li>
        {/* ------------------------------------------------Routine with submenu End-------------------------------------------- */}

        {/* ------------------------------------------------Result with submenu Start-------------------------------------------- */}
        <li className='group px-1 relative'>
          <span
            className={` cursor-pointer hover:text-hover flex justify-center items-center gap-1 py-5 ${
              router.asPath.includes("/result") ? "text-hover" : ""
            }`}>
            Result <ArrowDown className='text-2xl mt-0.5' />
          </span>

          {/* -------------------------Submenu--------------------------- */}
          <ul className=' w-40 bg-white text-primary-color flex flex-col justify-start items-start absolute invisible group-hover:visible top-16 left-0 transition-all'>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/result/admission-result" ? "text-hover" : ""
              }`}>
              <Link href='/result/admission-result'>Admission Result</Link>
            </li>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/result/school-result" ? "text-hover" : ""
              }`}>
              <Link href='/result/school-result'>School Result</Link>
            </li>
          </ul>
        </li>
        {/* ------------------------------------------------Result with submenu End-------------------------------------------- */}

        <li
          className={` hover:text-hover py-5 ${
            router.asPath === "/notice" ? "text-hover" : ""
          }`}>
          <Link href='/notice'>
            <a className='hover:text-hover'>Notice</a>
          </Link>
        </li>
        <li
          className={` hover:text-hover py-5 ${
            router.asPath === "/contact" ? "text-hover" : ""
          }`}>
          <Link href='/contact'>
            <a className='hover:text-hover'>Contact</a>
          </Link>
        </li>

        {/* ------------------------------------------------Admission with submenu Start-------------------------------------------- */}
        <li className='group px-1 relative'>
          <span
            className={` cursor-pointer hover:text-hover flex justify-center gap-1 items-center py-5 ${
              router.asPath.includes("/admission") ? "text-hover" : ""
            }`}>
            Admission <ArrowDown className='text-2xl mt-0.5' />
          </span>

          {/* -------------------------Submenu--------------------------- */}
          <ul className=' w-48 bg-white text-primary-color flex flex-col justify-start items-start absolute invisible group-hover:visible top-16 right-0 transition-all'>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full group relative ${
                router.asPath.includes("/admission") ? "text-hover" : ""
              }`}
              onMouseOver={() => setShow(true)}
              onMouseLeave={() => setShow(false)}>
              <div className='flex justify-between items-center gap-2'>
                <Link href='#'>Admission Form</Link>
                <ArrowRight className='text-xl mt-1' />
              </div>

              {/* -------------------------Submenu's submenu--------------------- */}
              <ul
                className={`w-32 bg-white text-primary-color flex flex-col justify-start items-start absolute top-0 -right-[129px] transition-all  ${
                  show ? "visible" : "invisible"
                } `}>
                <li
                  className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                    router.asPath === "/admission/class-six" ? "text-hover" : ""
                  }`}>
                  <Link href='/admission/class-six'>Class - Six</Link>
                </li>
                <li
                  className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                    router.asPath === "/admission/class-nine"
                      ? "text-hover"
                      : ""
                  }`}>
                  <Link href='/admission/class-nine'>Class - Nine</Link>
                </li>
              </ul>
            </li>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/admission/admission-payment"
                  ? "text-hover"
                  : ""
              }`}>
              <Link href='/admission/admission-payment'>Admission Payment</Link>
            </li>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/school-payment" ? "text-hover" : ""
              }`}>
              <Link href='/school-payment'>School Payment</Link>
            </li>
            <li
              className={` border-b-[1px] py-2 px-3 hover:text-hover w-full ${
                router.asPath === "/admission/admission-admit-card"
                  ? "text-hover"
                  : ""
              }`}>
              <Link href='/admission/admission-admit-card'>
                Admission Admit Card
              </Link>
            </li>
          </ul>
        </li>
        {/* ------------------------------------------------Admission with submenu End-------------------------------------------- */}
      </ul>

      <button
        // <--------------------Dynamically changing the background color of the button as per the path got form the props-------------------->
        className={`w-48 h-16  ${
          navPath ? "bg-white text-primary-color" : "bg-primary text-white"
        } text-md font-semibold outline-none border-none btn-polygon`}
        onClick={handleShowModal}>
        Log in
      </button>
    </div>
  );
};

export default Navbar;
