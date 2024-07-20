import React, { useState } from "react";
import PropTypes from "prop-types";
const SelectItems = ({
  formData,
  maxItems = 4,
  onChange,
  options,
  setOptions,
  type,
  selectedItems,
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filter, setFilter] = useState("");

  const [warning, setWarning] = useState("");
  // const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (e) => {
    console.log(e);
    setSelectedOption(e.target.value);
  };

  function handleEnter(e) {
    if (e.key !== "Enter") return;
    handleSelectOption(filteredOptions[0]);
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  function handleSelectOption(value) {
    if (selectedItems.length < maxItems) {
      onChange([...selectedItems, value], type);
      setFilter("");
      setOptions((options) => options.filter((option) => option != value));
    } else {
      setWarning(`You can't select more than ${maxItems} items!`);
    }
  }

  function handleDeleteSelected(value) {
    const newItems = formData.selectedInterests.filter((item) => item != value);
    onChange(newItems, type);
    const list = [...options, value];
    list.sort();
    console.log(list);
    setOptions([...list]);
    setWarning("");
  }

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2  justify-center items-center  ">
        {selectedItems.map((item) => (
          <span key={item} className="m-4 flex flex-wr justify-center">
            <div className="box-content w-64 h-96 bg-teal-500 p-4 text-center rounded-lg ">
              {item}
            </div>
            <button onClick={(e) => handleDeleteSelected(item)}>❌</button>
          </span>
        ))}
      </div>
      {warning && (
        <div className="text-center mt-4 text-red-500 font-bold">{warning}</div>
      )}
      <div className="w-full  p-6 bg-white rounded-lg shadow-lg">
        <label
          className="block text-gray-700 text-lg font-bold mb-2"
          htmlFor="filter"
        ></label>
        <input
          type="text"
          id="filter"
          placeholder="Type to filter options..."
          value={filter}
          onChange={handleFilterChange}
          onKeyDown={(e) => handleEnter(e)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {filter && (
          <div className="relative">
            <select
              id="options"
              defaultValue={selectedOption}
              onChange={handleSelectChange}
              size={5}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out hover:shadow-lg bg-teal-500 text-black text-xl"
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

export default SelectItems;
