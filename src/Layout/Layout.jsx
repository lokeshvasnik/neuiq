/* eslint-disable react/prop-types */
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
