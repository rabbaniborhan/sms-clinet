import Footer from "../Footer/Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
