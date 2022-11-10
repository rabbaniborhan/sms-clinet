import React, { useRef } from "react";
import { useState } from "react";
import AdmissionFormSelector from "./AdmissionFormSelector";
import { Axios } from "../../core/axios";
import swal from "sweetalert";
import { useRouter } from "next/router";
import moment from "moment/moment";

const AdmissionFormInputs = () => {
  const router = useRouter();
  const [image, setImage] = useState("");
  const [className, setClassName] = useState("6");
  const jscRollRef = useRef();
  const pscRollRef = useRef();
  const regRef = useRef();
  const nameRef = useRef();
  const fatherRef = useRef();
  const motherRef = useRef();
  const dateOfBirthRef = useRef();
  const phoneRef = useRef();
  const religionRef = useRef();
  const genderRef = useRef();
  const bloodGroupRef = useRef();
  const presentAddressRef = useRef();
  const permanentAddressRef = useRef();
  const passingYearRef = useRef();
  const gpaRef = useRef();
  const institutionNameRef = useRef();
  const boardRef = useRef();
  const nationalityRef = useRef();

  const getImage = (e) => {
    setImage(e.target.files[0]);
  };

  console.log(image);

  const editStudentInfo = async (e) => {
    e.preventDefault();
    const studentData = {
      applicantsClass: className,
      applicantsName: nameRef.current.value,
      fatherName: fatherRef.current.value,
      motherName: motherRef.current.value,
      dateOfBirth: dateOfBirthRef.current.value,
      phone: phoneRef.current.value,
      religion: religionRef.current.value,
      bloodGroup: bloodGroupRef.current.value,
      presentAddress: presentAddressRef.current.value,
      permanentAddress: permanentAddressRef.current.value,
      gender: genderRef.current.value,
      jscRoll: jscRollRef.current.value,
      pscRoll: pscRollRef.current.value,
      registrationNo: regRef.current.value,
      passingYear: passingYearRef.current.value,
      gpa: gpaRef.current.value,
      institutionName: institutionNameRef.current.value,
      board: boardRef.current.value,
      nationality: nationalityRef.current.value,
      imageUrl: image,
    };

    try {
      const { data } = await Axios({
        method: "post",
        url: `/public/admission`,
        data: studentData,
      });

      swal(data.message, "Information Edited Successfully!", "success");
    } catch (error) {
      const err = error.response.data.errors[0].msg;
      console.log(error);
      swal(err, "An Error Has Occured!", "error");
    }
  };
  return (
    <form onSubmit={editStudentInfo} className='relative'>
      <div className='text-primary-text lg:space-y-6 xl:space-y-5 flex justify-start items-start flex-col'>
        <AdmissionFormSelector
          setClassName={setClassName}
          className={className}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter P.S.C Roll No'
          ref={pscRollRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter J.S.C Roll No'
          ref={jscRollRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Registration No'
          ref={regRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's name"
          ref={nameRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Father’s name"
          ref={fatherRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Mother’s name"
          ref={motherRef}
        />

        <div className='flex justify-between items-center gap-2 w-[600px]'>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder='Date Of Birth'
            ref={dateOfBirthRef}
          />
          {/* <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder='Month'
          />
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-1/3 rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder='Year'
          /> */}
        </div>

        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Entre Phone Number'
          ref={phoneRef}
        />

        {/* Text input with radio's */}
        <div className='flex justify-between items-center w-[600px]'>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-[300px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder="Enter Applicant's Religion"
            ref={religionRef}
          />
          <div className='flex justify-center items-center gap-6 w-[300px]'>
            <span className='xl:text-lg lg:text-md font-semibold'>
              Gender :
            </span>
            <div className='flex justify-center items-center gap-2 xl:mt-1.5 lg:mt-1'>
              <input
                type='radio'
                name='gender'
                id='male'
                className='w-4 h-4'
                value='male'
                ref={genderRef}
              />
              <label htmlFor='male' className='text-md font-semibold'>
                Male
              </label>
            </div>

            <div className='flex justify-center items-center gap-2 xl:mt-1.5 lg:mt-1'>
              <input
                type='radio'
                name='gender'
                id='female'
                className='w-4 h-4 '
                value='female'
                ref={genderRef}
              />
              <label htmlFor='female' className='text-md font-semibold'>
                Female
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center gap-5 mt-1.5'>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-auto rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder="Enter Applicant's Blood Group"
            ref={bloodGroupRef}
          />

          <label htmlFor='' className='xl:text-xl lg:text-md text-primary-text'>
            Nationality :
          </label>
          <input
            type='text'
            className='px-5 xl:py-2 lg:py-1.5 w-[230px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
            placeholder="Enter Applicant's Nationality"
            ref={nationalityRef}
          />
        </div>

        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Present Address'
          ref={presentAddressRef}
        />

        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Permanent Address'
          ref={permanentAddressRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Passing Year"
          ref={passingYearRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder="Enter Applicant's Result/GPA"
          ref={gpaRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Institution Name'
          ref={institutionNameRef}
        />
        <input
          type='text'
          className='px-5 xl:py-2 lg:py-1.5 w-[600px] rounded ring-1 placeholder:text-xs ring-gray-400 outline-none'
          placeholder='Enter Board Name'
          ref={boardRef}
        />
        <label
          htmlFor='file'
          className='file w-[600px] rounded rounded-tl-none rounded-bl-none ring-1 placeholder:text-xs ring-gray-400 outline-none flex justify-start items-start gap-1'>
          <span className='px-10 xl:py-2 lg:py-1.5 bg-[#EFEFEF]'>
            Choose File
          </span>
          <span className='px-4 xl:py-2 lg:py-1.5'>
            {!image ? "No file choosen" : image.name}
          </span>
          <input
            type='file'
            name='image'
            id='file'
            accept='image/*,audio/*,video/*'
            onChange={getImage}
          />
        </label>
      </div>

      <button className='py-3 px-8 bg-primary text-white rounded absolute -bottom-36 right-0'>
        Create
      </button>
    </form>
  );
};

export default AdmissionFormInputs;
