import Image from "next/image";
import React from "react";
import images from "../../assets";
import {
  Facebook,
  Instagram,
  Telephone,
  Twitter,
  Youtube,
} from "../../constants/icons";

// <---------------The parent component is Banner.jsx---------------------->

const SubNav = ({ subPath }) => {
  return (
    <div
      // <--------------------Dynamically changing the background color of the subnav as per the path got form the props-------------------->
      className={`flex justify-between items-center w-full  ${
        !subPath ? "bg-primary px-40" : "py-0"
      }`}>
      <div className='flex justify-between items-center'>
        <a href='/'>
          <Image src={images.logo} width={150} />
        </a>
      </div>
      <div className='flex justify-between items-center gap-5'>
        <a href='/'>
          <Image src={images.playStore} width={120} />
        </a>
        <div className='flex justify-around items-center gap-5'>
          <span className='flex justify-center items-center text-white font-semibold text-md gap-1'>
            <Telephone className='text-white' /> 01944054129
          </span>
          <span className='flex justify-center items-center text-white font-semibold text-md gap-1'>
            <Telephone className='text-white' /> 01844054129
          </span>
        </div>
        <div className='flex justify-center items-center gap-2'>
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full'>
            <a href='/'>
              <Facebook className='text-base text-primary-color' />
            </a>
          </span>
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full'>
            <a href='/'>
              <Instagram className='text-base text-primary-color' />
            </a>
          </span>
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full'>
            <a href='/'>
              <Twitter className='text-base text-primary-color' />
            </a>
          </span>
          <span className='flex justify-center items-center bg-white p-1.5 rounded-full'>
            <a href='/'>
              <Youtube className='text-base text-primary-color' />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
