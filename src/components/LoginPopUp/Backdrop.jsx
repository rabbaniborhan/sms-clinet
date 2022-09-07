import React from "react";
import { useDispatch } from "react-redux";
import { popUpActions } from "../../store/popupSlice";

const Backdrop = ({ children }) => {
  const dispatch = useDispatch();

  const handleShowModal = (e) => {
    if (e.target.id === "backdrop") {
      dispatch(popUpActions.togglePopUp());
    }
  };
  return (
    <div
      className='bg-backdrop fixed inset-0 z-30 flex justify-center items-center'
      id='backdrop'
      onClick={handleShowModal}>
      {children}
    </div>
  );
};

export default Backdrop;
