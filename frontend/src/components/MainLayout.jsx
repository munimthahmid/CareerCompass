import React from "react";
import NavBar from "./PageNav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Chatbot from "./Chatbot/Chatbot";
import PropTypes from "prop-types";
import Logo from "./ui/Logo";
const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row justify-between  ">
        <Logo />
        <NavBar />
      </div>
      <div className="flex flex-grow">
        {/* <Sidebar /> */}
        <main className="flex-grow p-4">{children}</main>
      </div>
      {/* <Footer /> */}
      {/* <Chatbot /> */}
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
