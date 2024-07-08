import React from "react";
import PropTypes from "prop-types";

export default function Button({
  text,
  width,
  brand,
  widthClass,
  height,
  heightClass,
  textSize,
  textSizeClass,
  secondary,
  disabled,
}) {
  return (
    <button
      className={` ${
        !brand
          ? !secondary && "bg-brand primary-button"
          : !secondary && "bg-primary primary-variant"
      } ${
        secondary &&
        "border-[1px] hover:border-0 border-primary secondary-variant"
      } 'text-white'
       text-[16px]  ${width ? widthClass : "w-full"}  ${
         height ? heightClass : "h-[50px]"
       }  py-3 my-5 tracking-[-0.5px] `}
    >
      <span
        className={`font-[600] lg:font-[500] ${
          textSize ? textSizeClass : "text-[14px]"
        }`}
      >
        {text}
      </span>
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired, // Text to display on the button
  width: PropTypes.string, // Optional width as a string (e.g., '200px')
  brand: PropTypes.bool, // Optional boolean to indicate a brand button
  widthClass: PropTypes.string, // Optional Tailwind width class (e.g., 'w-1/2')
  height: PropTypes.string, // Optional height as a string (e.g., '50px')
  heightClass: PropTypes.string, // Optional Tailwind height class (e.g., 'h-12')
  textSize: PropTypes.string, // Optional font size as a string (e.g., '16px')
  textSizeClass: PropTypes.string, // Optional Tailwind text size class (e.g., 'text-xl')
  secondary: PropTypes.bool, // Optional boolean for secondary style
  disabled: PropTypes.bool, // Optional boolean to disable the button
};

// Define default values for optional props
Button.defaultProps = {
  width: undefined,
  brand: false,
  widthClass: undefined,
  height: undefined,
  heightClass: undefined,
  textSize: undefined,
  textSizeClass: undefined,
  secondary: false,
  disabled: false,
};
