import React from "react";
import { LayoutSecond } from "../../../components";
import AdmissionAdmitCard from "./AdmissionAdmitCard";
import AdmitCardForm from "./AdmitCardForm";

const AdmissionAdmitCardPage = () => {
  return (
    <LayoutSecond>
      <div className='w-4/5 mx-auto py-20 my-20'>
        <AdmissionAdmitCard />
        <AdmitCardForm />
      </div>
    </LayoutSecond>
  );
};

export default AdmissionAdmitCardPage;
