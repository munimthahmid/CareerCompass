import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Chatbot from "./Chatbot";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        {/* <Sidebar /> */}
        <main className="flex-grow p-4">{children}</main>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default MainLayout;
