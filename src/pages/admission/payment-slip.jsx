import React from "react";
import { LayoutSecond } from "../../components";
import AdmissionPaymentSlip from "./AdmissionPaymentSlip/AdmissionPaymentSlip";

const PaymentSlipPage = () => {
  return (
    <LayoutSecond>
      <div className='w-4/5 mx-auto my-20 py-20'>
        <AdmissionPaymentSlip />
      </div>
    </LayoutSecond>
  );
};

export default PaymentSlipPage;
