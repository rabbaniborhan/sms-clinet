import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import images from "../../assets";
import { MenuIcon, ArrowDown, ArrowRight, Cross } from "../../constants/icons";
import BackdropMenu from "../BackdropMenu/BackdropMenu";

const MobileNavbar = ({ width }) => {
  const [showNav, setShowNav] = useState(false);
  const [subActive, setSubActive] = useState({ page: "", show: false });
  const router = useRouter();
  return (
    <nav className='bg-primary'>
      <div
        className={`flex justify-between items-center w-11/12 mx-auto lg:hidden`}>
        <Link href='/'>
          <a>
            <Image src={images.logo} height={68} width={80} />
          </a>
        </Link>
        <span className='flex justify-center items-center gap-10'>
          <Link href='#'>
            <a>
              <Image src={images.playStore} height={30} width={80} />
            </a>
          </Link>
          <button onClick={() => setShowNav(true)}>
            <MenuIcon className='text-3xl text-white' />
          </button>
        </span>

        <BackdropMenu className={`${showNav ? "visible" : "invisible"}`}>
          <ul
            className={`absolute top-0 bg-white h-full pb-20 w-2/3 z-[9999] transition-all duration-500 ${
              showNav ? "right-0" : "-right-full"
            }`}>
            <li className='font-semibold py-2 px-4 flex justify-between items-center bg-primary'>
              <Image src={images.logo} height={50} width={80} />
              <button onClick={() => setShowNav(false)}>
                <Cross className='text-3xl text-white' />
              </button>
            </li>
            <li
              className={`font-semibold py-4 px-6 ${
                router.asPath === "/" ? "bg-[#D1F8F4]" : ""
              }`}>
              <Link href='/'>Home</Link>
            </li>
            <li
              className={`font-semibold py-4 px-6 ${
                router.asPath === "/about-us" ? "bg-[#D1F8F4]" : ""
              }`}>
              <Link href='/about-us'>About us</Link>
            </li>
            <li
              className={`font-semibold cursor-pointer`}
              onClick={() =>
                setSubActive({ page: "academic", show: !subActive.show })
              }>
              <span
                className={`flex justify-between items-center py-4 px-6  ${
                  router.asPath.includes("/academic") ? "bg-[#D1F8F4]" : ""
                }`}>
                <span>Academic</span>{" "}
                <ArrowDown className='text-2xl text-[#5BC0B7] font-semibold' />
              </span>
              {/* //Academic Sub-Menu */}
              <ul
                className={`${
                  subActive.page === "academic" && subActive.show === true
                    ? "block"
                    : "hidden"
                }`}>
                <li
                  onClick={() => setSubActive(true)}
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/teacher-info")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/academic/teacher-info'>Teachers Info</Link>
                </li>
                <li
                  onClick={() => setSubActive(true)}
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/staff-info") ? "bg-[#F2F2F2]" : ""
                  }`}>
                  <Link href='/academic/staff-info'>Staff Info</Link>
                </li>
              </ul>
            </li>

            <li
              className={`font-semibold cursor-pointer`}
              onClick={() =>
                setSubActive({ page: "routine", show: !subActive.show })
              }>
              <span
                className={`flex justify-between items-center py-4 px-6  ${
                  router.asPath.includes("/routine") ? "bg-[#D1F8F4]" : ""
                }`}>
                <span>Routine</span>{" "}
                <ArrowDown className='text-2xl text-[#5BC0B7] font-semibold' />
              </span>
              {/* //Routine Sub-Menu */}
              <ul
                className={`${
                  subActive.page === "routine" && subActive.show === true
                    ? "block"
                    : "hidden"
                }`}>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/routine/class-routine")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/routine/class-routine'>Class Routine</Link>
                </li>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/routine/exam-routine")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/routine/exam-routine'>Exam Routine</Link>
                </li>
              </ul>
            </li>

            <li
              className={`font-semibold cursor-pointer `}
              onClick={() =>
                setSubActive({ page: "result", show: !subActive.show })
              }>
              <span
                className={`flex justify-between items-center py-4 px-6  ${
                  router.asPath.includes("/result") ? "bg-[#D1F8F4]" : ""
                }`}>
                <span>Result</span>{" "}
                <ArrowDown className='text-2xl text-[#5BC0B7] font-semibold' />
              </span>
              {/* //Result Sub-Menu */}
              <ul
                className={`${
                  subActive.page === "result" && subActive.show === true
                    ? "block"
                    : "hidden"
                }`}>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/result/admission-result")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/result/admission-result'>Admission Result</Link>
                </li>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/result/school-result")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/result/school-result'>School Result</Link>
                </li>
              </ul>
            </li>

            <li
              className={`font-semibold py-4 px-6 ${
                router.asPath.includes("/notice") ? "bg-[#D1F8F4]" : ""
              }`}>
              <Link href='/notice'>Notice</Link>
            </li>
            <li
              className={`font-semibold py-4 px-6 ${
                router.asPath.includes("/contact") ? "bg-[#D1F8F4]" : ""
              }`}>
              <Link href='/contact'>Contact</Link>
            </li>

            <li
              className={`font-semibold cursor-pointer`}
              onClick={() =>
                setSubActive({ page: "admission", show: !subActive.show })
              }>
              <span
                className={`flex justify-between items-center py-4 px-6  ${
                  router.asPath.includes("/admission/") ? "bg-[#D1F8F4]" : ""
                }`}>
                <span>Admission</span>{" "}
                <ArrowDown className='text-2xl text-[#5BC0B7] font-semibold' />
              </span>
              {/* //Admission Sub-Menu */}
              <ul
                className={`${
                  subActive.page === "admission" && subActive.show === true
                    ? "block"
                    : "hidden"
                }`}>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/admission/class-six")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/admission/class-six'>Admission Form</Link>
                </li>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/admission/admission-payment")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/admission/admission-payment'>
                    Admission Payment
                  </Link>
                </li>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/school-payment")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/school-payment'>School Payment</Link>
                </li>
                <li
                  className={`py-3 px-8 text-sm ${
                    router.asPath.includes("/admission/admission-admit-card")
                      ? "bg-[#F2F2F2]"
                      : ""
                  }`}>
                  <Link href='/admission/admission-admit-card'>
                    Admission Admit Card
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </BackdropMenu>
      </div>
    </nav>
  );
};

export default MobileNavbar;
