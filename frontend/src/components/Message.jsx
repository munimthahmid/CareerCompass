import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

export default function Message({
  message,
  text,
  link,
  variant,
  button,
  active,
}) {
  const [show, setShow] = useState(true);

  const delay = 10;
  let timer1;
  useEffect(() => {
    if (!active) {
      timer1 = setTimeout(() => setShow(false), delay * 1000);
    }

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <>
      {show && (
        <div
          className={`${variant == `danger` && `bg-red`} ${
            variant == `success` && `bg-green`
          }  bg-opacity-20 py-3 px-5 custom-round my-3 flex items-center justify-between`}
        >
          <h3
            className={`${variant == `danger` && `text-[#aa0909]`} ${
              variant == `success` && `text-[#13ba27]`
            }`}
          >
            {message}
          </h3>

          {button && (
            <Link to={link}>
              <Button
                text={text}
                width={true}
                widthClass={"w-[100px]"}
                brand={variant == "danger"}
              />
            </Link>
          )}
        </div>
      )}
    </>
  );
}
Message.propTypes = {
  message: PropTypes.string, // Optional message text
  text: PropTypes.string, // Optional additional text
  link: PropTypes.shape({
    // Optional link object with url and label
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  variant: PropTypes.oneOf(["success", "error", "warning", "info"]), // Variant to style the message
  button: PropTypes.shape({
    // Optional button object with onClick and label
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
  }),
  active: PropTypes.bool, // Boolean to indicate if the message is active
};

// Define default values for optional props
Message.defaultProps = {
  message: "",
  text: "",
  link: null,
  variant: null,
  button: null,
  active: true,
};
