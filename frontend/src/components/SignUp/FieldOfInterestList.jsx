import React, { useState } from "react";
import PropTypes from "prop-types";
const FieldOfInterest = ({
  formData,
  maxItems = 4,
  onChange,
  options,
  setOptions,
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
    e.preventDefault();
    if (filter === "") return;
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
      onChange("interests", [...selectedItems, value]);
      setFilter("");
      setOptions((options) => options.filter((option) => option != value));
    } else {
      setWarning(`You can't select more than ${maxItems} items!`);
    }
  }

  function handleDeleteSelected(value) {
    const newItems = formData.interests.filter((item) => item != value);
    onChange("interests", newItems);
    const list = [...options, value];
    list.sort();
    console.log(list);
    setOptions([...list]);
    setWarning("");
  }

  return (
    <>
      <div className="grid grid-cols-4 justify-center items-center  ">
        {selectedItems?.map((item) => (
          <span
            key={item}
            className="m-4 flex flex-wr items-center justify-center"
          >
            <div className="box-content w-full h-16 bg-slate-300  text-center text-sm rounded-lg flex justify-between items-center ">
              <p className="pl-4">{item}</p>
              <div
                onClick={(e) => handleDeleteSelected(item)}
                className="cursor-pointer pl-2 hover:text-danger"
              >
                <svg
                  className="fill-current"
                  role="button"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </span>
        ))}
      </div>
      {warning && (
        <div className="text-center mt-4 text-red-500 font-bold">{warning}</div>
      )}

      <label
        className="mb-3 block text-sm font-medium text-black dark:text-white"
        htmlFor="mentorshipFee"
      >
        Field Of Interests
      </label>
      <input
        type="text"
        id="filter"
        placeholder="Type to filter options..."
        value={filter}
        onChange={handleFilterChange}
        onKeyDown={(e) => handleEnter(e)}
        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
      />
      {filter && (
        <div className="relative">
          <select
            id="options"
            defaultValue={selectedOption}
            onChange={handleSelectChange}
            size={5}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition duration-300 ease-in-out hover:shadow-lg bg-teal-200 text-black text-xl"
          >
            {filteredOptions.map((option, index) => (
              <option
                selected
                key={index}
                value={option}
                onClick={(e) => handleSelectOption(e.target.value)}
                className="py-2 hover:bg-slate-300 rounded-ful"
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
    </>
  );
};

export default FieldOfInterest;
