import React from "react";
import { LayoutSecond } from "../../../components";
import AdmissionPaymentForm from "./AdmissionPaymentForm";
import AdmissionPaymentSlip from "./AdmissionPaymentSlip";

const AdmissionPayment = () => {
  return (
    <LayoutSecond>
      <div className='lg:w-4/5 w-auto mx-auto my-20 py-20'>
        <AdmissionPaymentSlip />
      </div>
    </LayoutSecond>
  );
};

export default AdmissionPayment;
