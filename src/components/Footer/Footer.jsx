import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import images from "../../assets";
import {
  Clock,
  Email,
  FacebookSquare,
  Linkedin,
  Telephone,
  Twitter,
} from "../../constants/icons";

// <---------------The parent component is Layout.jsx---------------------->

const Footer = () => {
  const router = useRouter();

  return (
    <div>
      <div className='bg-[#1EB3A6] text-white py-14 relative z-10'>
        <div className='absolute -top-20 right-0 z-20'>
          <Image src={images.footerBg} />
        </div>
        <div className='lg:w-4/5 w-11/12 mx-auto flex flex-col lg:flex-row justify-between gap-3 items-center z-30 sticky'>
          <div className='lg:w-2/6 w-full space-y-4'>
            <Image src={images.logo} />
            <p className='leading-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              eget felis porttitor morbi at sed nunc mi. Volutpat porttitor duis
            </p>
            <div className='flex justify-start gap-3 items-center '>
              <FacebookSquare className='text-2xl' />
              <Linkedin className='text-2xl' />
              <Twitter className='text-2xl' />
            </div>
          </div>
          <div className='flex self-start justify-between items-center gap-24 mt-5 lg:mt-0'>
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold'>What We Do</h3>
              <div className='flex flex-col justify-start items-start gap-3 text-sm'>
                <Link href='/'>Courses</Link>
                <Link href='/'>Products</Link>
                <Link href='/'>Projects</Link>
                <Link href='/'>Services</Link>
                <Link href='/'>Laboratory</Link>
                <Link href='/'>Research</Link>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='text-xl font-bold'>Our Institute</h3>
              <div className='flex flex-col justify-start items-start gap-3 text-sm'>
                <Link href='/'>Home</Link>
                <Link href='/'>About Us</Link>
                <Link href='/'>Notice Board</Link>
                <Link href='/'>Institution</Link>
                <Link href='/'>Student</Link>
                <Link href='/'>Teacher</Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3 lg:-mt-[3rem] mt-5'>
            <h3 className='text-xl font-bold'>Our Contact</h3>
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
      </div>
      <div
        className={`py-3 px-6 flex lg:flex-row flex-col justify-between items-center text-primary-color text-sm ${
          router.asPath === "/" ? "mb-[60px]" : ""
        }`}>
        <span>Copyright by SMS</span>
        <span>Site developed & maintained by Make Real</span>
      </div>
    </div>
  );
};

export default Footer;
