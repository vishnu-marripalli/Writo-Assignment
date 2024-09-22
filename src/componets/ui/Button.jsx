/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = ({
  
  severity = "primary",
  size = "base",
  ...props
}) => {
  return (
    <>
      <button
        {...props}
        className={`min-w-[150px] rounded inline-flex flex-shrink-0 justify-center items-center text-center text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-sm px-4 py-2
         
          ${
            severity === "primary"
              ? " bg-[#937DC2] "
              : severity === "secondary"
              ? " bg-[#353831] "
              : severity === "danger"
          }
          ${size === "small" ? "text-sm" : "text-base"}`}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
