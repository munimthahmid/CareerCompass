import React from "react";
import PropTypes from "prop-types";

export default function TextInput({
  label,
  placeholder,
  type,
  data,
  setData,
  pattern,
}) {
  return (
    <div className="flex flex-col my-3 request-form-animation">
      <label className="font-bold text-primary text-[14px]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        required
        className="bg-input py-4 custom-round px-4 my-3 font-[500] text-[14px] focus:border-brand active:border-brand focus:border-[1px] active:border-[1px] outline-none"
      ></input>
    </div>
  );
}
TextInput.propTypes = {
  label: PropTypes.string, // Optional label text
  placeholder: PropTypes.string, // Optional placeholder text for the input
  type: PropTypes.oneOf(["text", "password", "email", "number", "tel", "url"]), // Restrict type to common input types
  data: PropTypes.oneOfType([
    // Value of the input, can be a string or a number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  setData: PropTypes.func.isRequired, // Function to set the data, typically a state setter
  pattern: PropTypes.string, // Optional pattern for input validation
};

// Define default values for optional props
TextInput.defaultProps = {
  label: "",
  placeholder: "",
  type: "text",
  pattern: "",
};
