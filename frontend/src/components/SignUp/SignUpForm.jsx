import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the icons
import Progressbar from "../Progressbar";
import SecondStep from "./SecondStep"; // Import the SecondStep component
import ThirdStep from "./ThirdStep";
const Signup = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    dob: null,
    careerStatus: "",
    selectedInterests: [],
    careerGoals: [],
    address: {},
  });

  const [showPassword, setShowPassword] = useState(false);
  function togglePasswordVisibility() {
    setShowPassword((showPassword) => !showPassword);
  }
  function test() {
    return formData.selectedInterests;
  }
  function handleChange(e, type = "") {
    console.log("type: " + type);
    if (type === "address") {
      setFormData((prev) => ({ ...prev, address: e }));
    } else if (Array.isArray(e)) {
      if (type == "fieldOfInterest")
        setFormData((prev) => ({ ...prev, selectedInterests: e }));
      if (type === "careerGoal")
        setFormData((prev) => ({ ...prev, careerGoals: e }));
    } else if (e instanceof Date) {
      setFormData((prev) => ({ ...prev, dob: e }));
    } else {
      e.preventDefault();
      const targetName = e.target.id;
      const value = e.target.value;
      console.log(targetName);

      setFormData((prev) => ({ ...prev, [targetName]: value }));
    }
  }

  const handleNext = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  async function handleSubmit(e) {
    e?.preventDefault();
    if (step !== 3) return;
    console.log(formData);

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col justify-center items-center">
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Register to CareerCompass!
        </h2>
      </div>
      <Progressbar step={step} />
      {step === 1 && (
        <>
          <h1 className="mt-4 text">Basic Info</h1>
          <form
            className="w-full max-w-lg space-y-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Example Name"
                value={formData.firstName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Example Name"
                value={formData.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@gmail.com"
                value={formData.email}
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div className=" flex justify-center">
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
      {step === 2 && (
        <SecondStep
          formData={formData}
          handleChange={handleChange}
          handleBack={handleBack}
          handleNext={handleNext}
          handleSubmit={handleSubmit}
        />
      )}

      {step === 3 && (
        <ThirdStep
          formData={formData}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default Signup;

// {step === 3 && (
//   <div className="text-center">
//     <h1 className="text-2xl font-bold">Review and Submit</h1>
//     <p className="mb-4">
//       Please review your information before submitting.
//     </p>
//     <pre className="text-left p-4 bg-gray-200 rounded-md">
//       {JSON.stringify(formData, null, 2)}
//     </pre>
//     <button
//       type="button"
//       onClick={handleSubmit}
//       className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md"
//     >
//       Submit
//     </button>
//   </div>
// )}
