import React, { useState } from "react";
import PropTypes from "prop-types";
const SelectItems = ({
  formData,
  onChange,
  options,
  setCities,
  countryStates,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filter, setFilter] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const [isFocused, setIsFocused] = useState(false);

  // const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (e) => {
    console.log(e);
    setSelectedOption(e.target.value);
  };

  function handleEnter(e) {
    if (e.key !== "Enter") return;
    console.log("enter pressed");
    handleSelectOption(filteredOptions[0]);
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase())
  );
  function handleCities(country) {
    const cities = countryStates?.find((c) => c.name === country)?.states;
    setCities(cities);
    console.log(cities);
  }
  function handleSelectOption(value) {
    console.log("Inside handle select options");
    const address = formData.address;

    const newAddress = { ...address, country: value };

    onChange(newAddress, "address");
    setFilter(value);
    setIsSelected(true);
    handleCities(value);
  }
  function handleFocus() {
    console.log("Inside handle Focus");
    setIsFocused((focus) => !focus);
  }

  return (
    <>
      {/* {warning && (
        <div className="text-center mt-4 text-red-500 font-bold">{warning}</div>
      )} */}
      <div className="w-full  p-6 bg-white rounded-lg shadow-lg">
        <label
          className="block text-gray-700 text-lg font-bold mb-2"
          htmlFor="filter"
        ></label>
        <input
          type="text"
          id="filter"
          onFocus={handleFocus}
          onBlur={handleFocus}
          placeholder="Type to filter options..."
          value={filter}
          onChange={handleFilterChange}
          onKeyDown={(e) => handleEnter(e)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {filter && isFocused && (
          <div className="relative">
            <select
              id="options"
              defaultValue={selectedOption}
              onChange={handleSelectChange}
              size={5}
              className="block w-full h-40 px-4 py-2 bg-white border border-gray-300  leading-tight focus:outline-none focus:border-indigo-500 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 rounded-lg "
            >
              {filteredOptions.map((option, index) => (
                <option
                  selected
                  key={index}
                  value={option}
                  onClick={(e) => handleSelectOption(e.target.value)}
                  className="py-2 hover:bg-red-500 rounded-ful"
                >
                  {option}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 3a1 1 0 00-.707.293l-6 6a1 1 0 101.414 1.414L10 5.414l5.293 5.293a1 1 0 001.414-1.414l-6-6A1 1 0 0010 3z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
SelectItems.propTypes = {
  maxItems: PropTypes.number,
  children: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.string,
  setOptions: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  setCities: PropTypes.func.isRequired,
  selectedItems: PropTypes.array,
  countryStates: PropTypes.object,

  formData: PropTypes.shape({
    selectedInterests: PropTypes.array,
    address: PropTypes.object,
  }),
};
export default SelectItems;
