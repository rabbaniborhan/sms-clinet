import React from "react";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../store/popUpSlice";

const BackdropMenu = ({ children, className }) => {
  return (
    <div
      className={`bg-backdrop fixed inset-0 z-30 flex justify-center items-center ${className}`}
      id='backdrop'>
      {children}
    </div>
  );
};

export default BackdropMenu;
