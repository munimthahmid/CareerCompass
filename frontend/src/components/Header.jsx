import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Update this path with your actual logo path

function Header() {
  return (
    <header className="relative flex flex-col justify-center h-64 text-white">
      <div className="relative z-10 flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <img src={logo} alt="CareerCompass Logo" className="h-12 w-12 mr-3" />
          <h1 className="text-3xl font-semibold">CareerCompass</h1>
        </div>
        <nav className="text-lg">
          <NavLink to="/" className="mr-6 hover:underline">
            Home
          </NavLink>
          <NavLink to="/profile" className="mr-6 hover:underline">
            Profile
          </NavLink>
          <NavLink to="/jobs" className="mr-6 hover:underline">
            Jobs
          </NavLink>
          <NavLink to="/mentorship" className="mr-6 hover:underline">
            Mentorship
          </NavLink>
          <NavLink to="/resume" className="mr-6 hover:underline">
            Resume
          </NavLink>
          <NavLink to="/interview" className="hover:underline">
            Interview
          </NavLink>
        </nav>
      </div>
      <div className="relative z-10 flex-grow flex justify-center items-center">
        <h2 className="text-4xl font-light">Welcome to CareerCompass</h2>
      </div>
    </header>
  );
}

export default Header;
