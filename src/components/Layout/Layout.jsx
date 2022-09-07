import Footer from "../Footer/Footer";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { popUpActions } from "../../store/popupSlice";
import Backdrop from "../LoginPopUp/Backdrop";
import LoginPopUp from "../LoginPopUp/LoginPopUp";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.popUp.show);

  return (
    <>
      <Head>
        <title>SMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{children}</main>
      {show && (
        <Backdrop>
          <LoginPopUp />
        </Backdrop>
      )}
      <Footer />
    </>
  );
};

export default Layout;
