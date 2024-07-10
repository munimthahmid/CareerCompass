import React, { useState } from "react";
import PropTypes from "prop-types";
const SelectItems = ({ maxItems = 4 }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filter, setFilter] = useState("");
  const [options, setOptions] = useState([
    "Accounting",
    "Advertising",
    "Aerospace Engineering",
    "Agriculture",
    "Anthropology",
    "Architecture",
    "Artificial Intelligence",
    "Astronomy",
    "Automotive Technology",
    "Banking",
    "Biochemistry",
    "Biomedical Engineering",
    "Biotechnology",
    "Business Administration",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Communications",
    "Computer Science",
    "Construction Management",
    "Counseling",
    "Criminal Justice",
    "Cybersecurity",
    "Data Analysis",
    "Data Science",
    "Dentistry",
    "Design",
    "Digital Marketing",
    "Ecology",
    "Economics",
    "Education",
    "Electrical Engineering",
    "Environmental Science",
    "Event Planning",
    "Fashion Design",
    "Finance",
    "Food Science",
    "Forensic Science",
    "Game Development",
    "Genetics",
    "Geology",
    "Graphic Design",
    "Healthcare Administration",
    "Hospitality Management",
    "Human Resources",
    "Information Technology",
    "Interior Design",
    "Journalism",
    "Law",
    "Library Science",
    "Logistics",
    "Machine Learning",
    "Marine Biology",
    "Marketing",
    "Mechanical Engineering",
    "Media Production",
    "Medical Technology",
    "Medicine",
    "Microbiology",
    "Music Production",
    "Nanotechnology",
    "Network Administration",
    "Nursing",
    "Nutrition",
    "Occupational Therapy",
    "Oceanography",
    "Operations Management",
    "Optometry",
    "Pharmaceuticals",
    "Pharmacy",
    "Philosophy",
    "Photography",
    "Physical Therapy",
    "Physics",
    "Political Science",
    "Project Management",
    "Psychiatry",
    "Psychology",
    "Public Health",
    "Public Relations",
    "Publishing",
    "Real Estate",
    "Renewable Energy",
    "Robotics",
    "Social Work",
    "Software Engineering",
    "Speech Therapy",
    "Sports Management",
    "Statistics",
    "Supply Chain Management",
    "Teaching",
    "Tourism",
    "Translation Services",
    "Urban Planning",
    "Veterinary Medicine",
    "Video Production",
    "Web Development",
    "Wildlife Conservation",
    "Writing",
    "Zoology",
  ]);
  const [warning, setWarning] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  function handleSelectOption(e) {
    if (selectedItems.length < maxItems) {
      setSelectedItems([...selectedItems, e.target.value]);
      setFilter("");
      setOptions((options) =>
        options.filter((option) => option != e.target.value)
      );
    } else {
      setWarning(`You can't select more than ${maxItems} items!`);
    }
  }

  function handleDeleteSelected(value) {
    console.log(value);
    setSelectedItems((selected) => selected.filter((item) => item != value));
    const list = [...options, value];
    list.sort();
    console.log(list);
    setOptions([...list]);
    setWarning("");
  }

  return (
    <>
      <div className="grid grid-rows-2 gap-2 grid-cols-2 items-center ">
        {selectedItems.map((item) => (
          <span key={item} className="  mx-4 flex flex-wr">
            <div className="box-content h-96 w-64 bg-teal-500 p-2 text-center rounded-lg ">
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
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {filter && (
          <div className="relative">
            <select
              id="options"
              value={selectedOption}
              onChange={handleSelectChange}
              size={5}
              className="block w-full h-40 px-4 py-2 bg-white border border-gray-300  leading-tight focus:outline-none focus:border-indigo-500 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-200 rounded-lg "
            >
              {filteredOptions.map((option, index) => (
                <option
                  selected
                  key={index}
                  value={option}
                  onClick={handleSelectOption}
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
  children: PropTypes.string.isRequired,
};
export default SelectItems;
