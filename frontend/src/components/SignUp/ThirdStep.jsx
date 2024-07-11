// src/AddressForm.js
import React, { useState } from "react";
import PropTypes from "prop-types";
const ThirdStep = ({ formData, handleBack, handleSubmit, handleChange }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.address.street) newErrors.street = "Street is required";
    if (!formData.address.city) newErrors.city = "City is required";
    if (!formData.address.state) newErrors.state = "State is required";
    if (!formData.address.zip) newErrors.zip = "Zip code is required";
    else if (!/^\d{5}(-\d{4})?$/.test(formData.address.zip))
      newErrors.zip = "Zip code is invalid";
    if (!formData.address.country) newErrors.country = "Country is required";
    return newErrors;
  };
  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    const prev = formData.address;
    const newAddress = { ...prev, [name]: value };
    handleChange(newAddress, "address");
  };
  const handleSubmitThirdPage = (e) => {
    e?.preventDefault();
    console.log(formData);
    handleSubmit();
    // const validationErrors = validate();
    // if (Object.keys(validationErrors).length === 0) {
    //   console.log("Address Submitted: ", formData.address);
    //   // You can add further form submission logic here
    // } else {
    //   setErrors(validationErrors);
    // }
  };

  return (
    <>
      <h1 className="mt-4 text">Address Info</h1>
      <div className="w-full max-w-lg space-y-6">
        <form
          onSubmit={handleSubmitThirdPage}
          className="w-full max-w-lg space-y-6"
        >
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Street:</label>
            <input
              type="text"
              name="street"
              value={formData.address.street}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.street && <span>{errors.street}</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Apartment:</label>
            <input
              type="text"
              name="apartment"
              value={formData.address.apartment}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">City:</label>
            <input
              type="text"
              name="city"
              value={formData.address.city}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.city && <span>{errors.city}</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">State:</label>
            <input
              type="text"
              name="state"
              value={formData.address.state}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.state && <span>{errors.state}</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Zip Code:</label>
            <input
              type="text"
              name="zip"
              value={formData.address.zip}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.zip && <span>{errors.zip}</span>}
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Country:</label>
            <input
              type="text"
              name="country"
              value={formData.address.country}
              onChange={handleChangeAddress}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.country && <span>{errors.country}</span>}
          </div>
          <div>
            <div className="flex justify-center">
              <span>
                <button
                  type="button"
                  onClick={() => handleBack(formData)}
                  className="w-64 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 m-4"
                >
                  Previous
                </button>
              </span>
              <span>
                <button
                  type="button"
                  onClick={handleSubmitThirdPage}
                  className="w-64 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-900 transition duration-200 m-4"
                >
                  Submit
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
ThirdStep.propTypes = {
  formData: PropTypes.shape({
    dob: PropTypes.date,
    careerStatus: PropTypes.string,
    username: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    careerGoals: PropTypes.array,
    address: PropTypes.Object,
    selectedInterests: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
export default ThirdStep;
