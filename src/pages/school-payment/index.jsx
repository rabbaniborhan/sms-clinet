import React from "react";
import SchoolPaymentSlip from "./SchoolPaymentSlip";
import { LayoutSecond } from "../../components";

const SchoolPaymentPage = () => {
  return (
    <LayoutSecond>
      <div className='w-4/5 mx-auto my-20 py-20'>
        <SchoolPaymentSlip />
      </div>
    </LayoutSecond>
  );
};

export default SchoolPaymentPage;
