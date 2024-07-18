// src/AddressForm.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import SelectRegions from "./SelectRegions";
import useSignup from "../../hooks/useSignup";
const ThirdStep = ({ labelClass }) => {
  const { formData, handleBack, handleSubmit, handleChange } = useSignup();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryStates, setCountryStates] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://continentl.com/api/country-list?page=1&key=sk-FB7E668f7546d881d310`
        );
        const names = response.data.map((country) => country.name);
        const countryStates = response.data.map((country) => ({
          name: country.name,
          states: country.states,
        }));
        setCountries(names);
        setCountryStates(countryStates);
        console.log(names);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleChangeAddress = (e, isValue = false) => {
    if (!isValue) {
      const { name, value } = e.target;
      const prev = formData.address;
      const newAddress = { ...prev, [name]: value };
      handleChange(newAddress, "address");
    } else handleChange(e, "address");
  };
  const handleSubmitThirdPage = (e) => {
    e?.preventDefault();
    console.log(formData);
    handleSubmit();
  };

  return (
    <>
      <h1 className="mt-4 text">Address Info</h1>
      <div className="w-full space-y-6">
        <form onSubmit={handleSubmitThirdPage} className="w-full space-y-6">
          <div className="rounded-lg p-8  flex flex-col gap-8 w-[54rem] mx-auto my-4 bg-slate-900">
            <div className="mb-4">
              <label className={`${labelClass}`}>Street:</label>
              <input
                type="text"
                name="street"
                value={formData.address.street}
                onChange={handleChangeAddress}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className={`${labelClass}`}>City:</label>
              <input
                type="text"
                name="city"
                value={formData.address.city}
                onChange={handleChangeAddress}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className={`${labelClass}`}>Zip Code:</label>
              <input
                type="text"
                name="zip"
                value={formData.address.zip}
                onChange={handleChangeAddress}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className={`${labelClass}`}>Country:</label>

              <SelectRegions
                onChange={handleChange}
                formData={formData}
                options={countries}
                setOptions={setCountries}
                setCities={setCities}
                countryStates={countryStates}
                type="country"
              />
            </div>

            <div>
              <label className={`${labelClass}`}>City:</label>

              <SelectRegions
                onChange={handleChange}
                formData={formData}
                options={cities}
                type="city"
              />
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
          </div>
        </form>
      </div>
    </>
  );
};

export default ThirdStep;
