import React, { useState } from "react";

export default function Progressbar({ step }) {
  const activeClass = "bg-teal-500 text-white";
  const inactiveClass =
    "bg-white text-gray-800 border border-gray-500 text-opacity-60";

  const getClassNames = (currentStep) => {
    return currentStep === step ? activeClass : inactiveClass;
  };

  return (
    <div className="flex justify-center items-center space-x-2.4">
      <div className="flex items-center">
        <div
          className={`rounded-full h-8 w-8 text-center flex items-center justify-center font-serif text-lg ${getClassNames(1)}`}
        >
          1
        </div>
        <div
          className={`h-1 w-8 ${step > 1 ? "bg-teal-500" : "bg-gray-500"}`}
        ></div>
      </div>
      <div className="flex items-center">
        <div
          className={`rounded-full h-8 w-8 text-center flex items-center justify-center font-serif text-lg ${getClassNames(2)}`}
        >
          2
        </div>
        <div
          className={`h-1 w-8 ${step > 2 ? "bg-teal-500" : "bg-gray-500"}`}
        ></div>
      </div>
      <div
        className={`rounded-full h-8 w-8 text-center flex items-center justify-center font-serif text-lg ${getClassNames(3)}`}
      >
        3
      </div>
    </div>
  );
}
{
  /* <div className="mb-4">
  <label className="block text-gray-700 mb-2" htmlFor="interests">
    Field of Interest
  </label>
  <div className="grid grid-cols-2 gap-2">
    <select
      id="careerStatus"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={formData.careerStatus}
      onChange={handleChange}
    >
      {interests.map((interest) => (
        <option value={interest} key={interest}>
          {interest}
        </option>
      ))}
      <option value="">Select your status</option>
      <option value="student">Student</option>
      <option value="working">Working Professional</option>
      <option value="other">Other</option>
    </select>
  </div>
  {selectedInterests.length === 5 && (
    <p className="text-red-500 mt-2">You can select up to 5 interests.</p>
  )}
</div>; */
}
