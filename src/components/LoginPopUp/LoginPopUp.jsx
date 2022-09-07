import React from "react";
import { useDispatch } from "react-redux";
import { Cross } from "../../constants/icons";
import { popUpActions } from "../../store/popupSlice";

const LoginPopUp = () => {
  const dispatch = useDispatch();

  // Funciton for handling the login popUp
  const handleShowModal = () => {
    dispatch(popUpActions.togglePopUp());
  };

  return (
    <div className='bg-white p-8 w-[550px] h-[450px] relative'>
      <button onClick={handleShowModal}>
        <Cross className='absolute right-4 top-4 cursor-pointer text-gray-500' />
      </button>
      <h2 className='text-2xl font-semibold text-[#1EB3A6] text-center'>
        Log into your account
      </h2>
      <form className='w-full flex flex-col justify-center gap-7 mt-10'>
        <div>
          <label htmlFor='username' className='text-xs text-gray-500'>
            Username
          </label>
          <input
            type='text'
            name='username'
            id='username'
            className='w-full py-1 border-b-2 border-[#1EB3A6] outline-none text-gray-600'
          />
        </div>
        <div>
          <label htmlFor='password' className='text-xs text-gray-500'>
            Password
          </label>
          <input
            type='text'
            name='password'
            id='password'
            className='w-full py-1 border-b-2 border-[#1EB3A6] outline-none text-gray-600'
          />
        </div>
        <div className='flex justify-start items-start gap-1 -mt-3'>
          <input type='checkbox' name='remember' id='checkbox' />
          <label htmlFor='checkbox' className='text-xs text-gray-500 mt-[-1px]'>
            Remember password
          </label>
        </div>
        <div>
          <button className='w-full py-3 font-semibold bg-[#1EB3A6] text-white rounded'>
            Log In
          </button>
        </div>
      </form>
      <div className='text-center mt-3'>
        <a href='#' className='text-sm text-[#1EB3A6]'>
          Forgot Password? Get Help
        </a>
      </div>
    </div>
  );
};

export default LoginPopUp;
