import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons
import Progressbar from "../Progressbar";
import SecondStep from "./SecondStep"; // Import the SecondStep component
import ThirdStep from "./ThirdStep";
import useSignup from "../../hooks/useSignup";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const {
    formData,
    showPassword,
    togglePasswordVisibility,
    step,
    handleChange,
    handleNext,
  } = useSignup();

  const baseClass =
    "px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-1/2 text-black";

  return (
    <div className="min-h-screen p-8 flex flex-col justify-center items-center">
      <div className="text-center mb-20 flex flex-col justify-center items-center m-4">
        <img src="public/icon.jpg" alt="CareerCompass logo" width={30} />
        <h2 className="text-3xl font-bold text-sky-500 mb-2">Create Account</h2>
      </div>
      <Progressbar step={step} />
      {step === 1 && (
        <>
          <h1 className="mt-4 text-xl">Basic Info</h1>
          <form className="max-w-lg space-y-6">
            <div className="mb-4">
              <input
                type="text"
                id="firstName"
                className={baseClass}
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-teal-500 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className={baseClass}
                placeholder="Example Name"
                value={formData.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-teal-500 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={baseClass}
                value={formData.email}
                placeholder="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className={baseClass}
                placeholder="user"
                value={formData.username}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                  className={baseClass}
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-3 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => handleNext(formData)}
                className="w-64 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 justify-center"
              >
                Next
              </button>
            </div>
          </form>
        </>
      )}
      {step === 2 && <SecondStep />}
      {step === 3 && <ThirdStep />}
    </div>
  );
};

export default Signup;
