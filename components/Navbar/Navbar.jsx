import React from "react";
import Link from "next/link";

// <---------------The parent component is Banner.jsx---------------------->

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about-us",
    },
    {
      name: "Academic",
      link: "/academic",
    },
    {
      name: "Routine",
      link: "/routine",
    },
    {
      name: "Result",
      link: "/result",
    },
    {
      name: "Notice",
      link: "/notice",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Admission",
      link: "/admission",
    },
  ];
  return (
    <div className='mx-auto w-full z-10 bg-navbar pl-2 py-2.5 h-16 rounded-tl rounded-bl flex justify-between items-center shadow-xl absolute'>
      <ul className='flex justify-around items-center list-none p-0 m-0 gap-5 text-white text-base w-full'>
        {navItems.map((item, i) => (
          <li key={i} className='hover:text-hover'>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <button className='w-48 h-16 text-primary-color bg-white text-md font-semibold outline-none border-none btn-polygon '>
        Log in
      </button>
    </div>
  );
};

export default Navbar;
