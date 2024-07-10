import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SelectItems from "./SelectItems";
const SecondStep = ({ formData, handleChange, handleBack, handleNext }) => {
  const [interests, setInterests] = useState([
    "Science",
    "Technology",
    "Web",
    "Finance",
    "Crypto",
    "Web3",
    "Javascript",
    "Spring",
  ]);
  const [selectedInterests, setSelectedInterests] = useState([]);

  const [startDate, setStartDate] = useState("");

  //   useEffect(() => {
  //     // Fetch the fields of interest from an API
  //     const fetchInterests = async () => {
  //       try {
  //         const response = await fetch("http://localhost:8080/api/interests");
  //         const data = await response.json();
  //         setInterests(data);
  //       } catch (error) {
  //         console.error("Error fetching interests:", error);
  //       }
  //     };

  //     fetchInterests();
  //   }, []);

  function handleDateSelect(e) {
    console.log(e);
    setStartDate(e);
  }
  const handleInterestToggle = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else if (selectedInterests.length < 5) {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNext({ ...formData, selectedInterests });
  };

  return (
    <>
      <h1 className="mt-4 text">Additional Info</h1>
      <div
        className="w-full max-w-lg space-y-6"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="dob">
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
          <label className="block text-gray-700 mb-2" htmlFor="lastName">
            Career Status
          </label>
          <div className="relative">
            <select
              id="careerStatus"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out hover:shadow-lg"
              value={formData.careerStatus}
              onChange={handleChange}
            >
              <option value="">Select your status</option>
              <option value="student">Student</option>
              <option value="working">Working Professional</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Field of Interest
          </label>
          <SelectItems />
        </div>

        <div>
          <button
            type="button"
            onClick={() => handleNext(formData)}
            className="w-full py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <div className="mb-4">
  //         <label className="block text-gray-700 mb-2" htmlFor="dob">
  //           Date of Birth
  //         </label>
  //         <DatePicker
  //           selected={startDate}
  //           onChange={(e) => setStartDate(e.target.value)}
  //           dateFormat="dd/MM/yyyy"
  //           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out hover:shadow-lg"
  //           popperClassName="react-datepicker-popper"
  //         />
  //       </div>

  //       <div className="mb-4">
  //         <label className="block text-gray-700 mb-2" htmlFor="careerStatus">
  //           Current Career Status
  //         </label>
  //         <div className="relative">
  //           <select
  //             id="careerStatus"
  //             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out hover:shadow-lg"
  //             value={formData.careerStatus}
  //             onChange={handleChange}
  //           >
  //             <option value="">Select your status</option>
  //             <option value="student">Student</option>
  //             <option value="working">Working Professional</option>
  //             <option value="other">Other</option>
  //           </select>
  //           <svg
  //             className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
  //             fill="none"
  //             stroke="currentColor"
  //             viewBox="0 0 24 24"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //               strokeWidth="2"
  //               d="M19 9l-7 7-7-7"
  //             ></path>
  //           </svg>
  //         </div>
  //       </div>
  //       <div className="mb-4">
  //         <label className="block text-gray-700 mb-2" htmlFor="fieldOfInterest">
  //           Field of Interest
  //         </label>
  //         <SelectItems />
  //       </div>
  //       <div className="flex justify-between">
  //         <button
  //           type="button"
  //           onClick={handleBack}
  //           className="py-2 px-4 bg-gray-500 text-white rounded-md"
  //         >
  //           Back
  //         </button>
  //         <button
  //           type="submit"
  //           className="py-2 px-4 bg-blue-500 text-white rounded-md"
  //         >
  //           Next
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
};
SecondStep.propTypes = {
  formData: PropTypes.shape({
    dob: PropTypes.string,
    careerStatus: PropTypes.string,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    selectedInterests: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};
export default SecondStep;
