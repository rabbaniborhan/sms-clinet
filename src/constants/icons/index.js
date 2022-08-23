import {
  BsFillTelephoneFill,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillClockCircle,
} from "react-icons/ai";
import {
  MdEmail,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

import { FaTimes } from "react-icons/fa";

export const Telephone = ({ className }) => {
  return <BsFillTelephoneFill className={className} />;
};

export const Facebook = ({ className }) => {
  return <FaFacebookF className={className} />;
};

export const FacebookSquare = ({ className }) => {
  return <AiFillFacebook className={className} />;
};

export const Instagram = ({ className }) => {
  return <BsInstagram className={className} />;
};

export const Twitter = ({ className }) => {
  return <BsTwitter className={className} />;
};

export const Youtube = ({ className }) => {
  return <BsYoutube className={className} />;
};

export const Linkedin = ({ className }) => {
  return <AiFillLinkedin className={className} />;
};

export const Email = ({ className }) => {
  return <MdEmail className={className} />;
};

export const Clock = ({ className }) => {
  return <AiFillClockCircle className={className} />;
};

export const ArrowLeft = ({ className }) => {
  return <MdOutlineKeyboardArrowLeft className={className} />;
};

export const ArrowRight = ({ className }) => {
  return <MdOutlineKeyboardArrowRight className={className} />;
};

export const ArrowDown = ({ className }) => {
  return <MdOutlineKeyboardArrowDown className={className} />;
};

export const Cross = ({ className }) => {
  return <FaTimes className={className} />;
};
