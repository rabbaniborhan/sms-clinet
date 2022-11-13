import React from "react";
import { SubNav, Navbar } from "../index";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const LayoutSecond = ({ children, className }) => {
  return (
    <div className={`w-full ${className}`}>
      <SubNav subPath={false} />
      <div className='w-4/5 mx-auto relative'>
        <Navbar navPath={false} />
      </div>
      <MobileNavbar width='full' />
      {children}
    </div>
  );
};

export default LayoutSecond;
