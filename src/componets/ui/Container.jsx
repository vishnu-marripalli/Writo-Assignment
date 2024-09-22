/* eslint-disable react/prop-types */
import React from "react";

const Container = ({
  ...props
}) => {
  return (
    <>
      <section
        {...props}
        className={`max-w[70%] flex justify-center items-center border-[1px] rounded-lg shadow-lg border-gray-200 p-3`}
      >
        {props.children}
      </section>
    </>
  );
};

export default Container;
