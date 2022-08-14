import React from "react";
import classes from "./AdmissionFormRadioInput.module.css";

const AdmissionFormRadioInput = ({ value, name }) => {
  return (
    <div className={classes.radio}>
      <label htmlFor='radio'>
        Male
        <input type='radio' name='radio' id='radio' />
        <span className='w-6 h-6 border-full bg-gray-800'></span>
      </label>
      <input type='radio' name='radio' id='' />
    </div>
  );
};

export default AdmissionFormRadioInput;
