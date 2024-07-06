import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">CareerCompass</h1>
      <nav>
        <NavLink to="/" className="text-white mr-4">
          Home
        </NavLink>
        <NavLink to="/profile" className="text-white mr-4">
          Profile
        </NavLink>
        <NavLink to="/jobs" className="text-white mr-4">
          Jobs
        </NavLink>
        <NavLink to="/mentorship" className="text-white mr-4">
          Mentorship
        </NavLink>
        <NavLink to="/resume" className="text-white mr-4">
          Resume
        </NavLink>
        <NavLink to="/interview" className="text-white">
          Interview
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
