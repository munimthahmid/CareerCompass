import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectItems from "./SelectItems";
import useSignup from "../../hooks/useSignup";
const SecondStep = ({ labelClass }) => {
  const {
    formData,
    handleChange,
    fieldOfInterestOptions,
    setFieldOfInterestOptions,
    startDate,
    handleDateSelect,
    listOfJob,
    setListofJob,
    handleBack,
    handleSubmitSecondPage,
  } = useSignup();

  return (
    <>
      <h1 className="mt-4 text-xl">Additional Info</h1>
      <div className="w-full space-y-6">
        <div className="rounded-lg p-8  flex flex-col gap-8 w-[54rem] mx-auto my-4 bg-slate-900">
          <div className="mb-4">
            <label className={`${labelClass}`} htmlFor="dob">
              Date of Birth
            </label>

            <div>
              <DatePicker
                selected={startDate}
                onChange={(e) => handleDateSelect(e)}
                onSelect={(e) => handleDateSelect(e)}
                dateFormat="dd/MM/yyyy"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholderText="dd/mm/yyyy"
                popperClassName="react-datepicker-popper"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className={`${labelClass}`} htmlFor="lastName">
              Career Status
            </label>
            <div className="relative">
              <select
                id="careerStatus"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out hover:shadow-lg careercompass-bg text-black text-xl"
                value={formData.careerStatus}
                onChange={(e) => handleChange(e)}
              >
                <option value="">Select your status</option>
                <option value="student">Student</option>
                <option value="working">Working Professional</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className={`${labelClass}`} htmlFor="email">
              Field of Interest
            </label>
            <SelectItems
              onChange={handleChange}
              formData={formData}
              options={fieldOfInterestOptions}
              setOptions={setFieldOfInterestOptions}
              type="fieldOfInterest"
              selectedItems={formData.selectedInterests}
            />
          </div>
          <div className="mb-4">
            <label className={`${labelClass}`} htmlFor="email">
              Career Goal
            </label>
            <SelectItems
              onChange={handleChange}
              formData={formData}
              options={listOfJob}
              setOptions={setListofJob}
              type="careerGoal"
              selectedItems={formData.careerGoals}
            />
          </div>

          <div className="flex flex-row justify-center  ">
            <button
              type="button"
              onClick={() => handleBack(formData)}
              className="w-64 py-3 careercompass-bg text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 m-4"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleSubmitSecondPage}
              className="w-64 py-3 careercompass-bg text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 m-4"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondStep;
