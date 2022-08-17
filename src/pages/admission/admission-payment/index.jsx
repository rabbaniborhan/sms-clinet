import React from "react";
import { LayoutSecond } from "../../../components";
import AdmissionPaymentForm from "./AdmissionPaymentForm";
import AdmissionPaymentSlip from "./AdmissionPaymentSlip";

const AdmissionPayment = () => {
  return (
    <LayoutSecond>
      <div className='w-4/5 mx-auto my-20 py-20'>
        <AdmissionPaymentSlip />
        <AdmissionPaymentForm />
      </div>
    </LayoutSecond>
  );
};

export default AdmissionPayment;
