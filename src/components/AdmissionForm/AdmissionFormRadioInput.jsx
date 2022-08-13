import React from "react";
import classes from "./AdmissionFormRadioInput.module.css";

const AdmissionFormRadioInput = ({ value, name }) => {
  return (
    <div>
      <div
        id='custom-radio'
        class={`flex items-center mr-4 mb-4 ${classes.radio}`}>
        <input
          id='radio1'
          type='radio'
          name='radio'
          class={`hidden ${classes.custom}`}
          value={value}
        />
        <label for='radio1' class='flex items-center cursor-pointer text-xl'>
          <span class='w-5 h-5 inline-block mr-2 rounded-full border-2 border-gray-800 flex-no-shrink'></span>
          {name}
        </label>
      </div>

      <div
        id='custom-radio'
        class={`flex items-center mr-4 mb-4 ${classes.radio}`}>
        <input
          id='radio1'
          type='radio1'
          name='radio'
          class={`hidden ${classes.custom}`}
          value={value}
        />
        <label for='radio1' class='flex items-center cursor-pointer text-xl'>
          <span class='w-5 h-5 inline-block mr-2 rounded-full border-2 border-gray-800 flex-no-shrink'></span>
          {name}
        </label>
      </div>
    </div>
  );
};

export default AdmissionFormRadioInput;
