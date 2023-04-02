import React from "react";

const Input = ({ ...rest }) => {
  return (
    <div className="my-2">
      <input {...rest} />
    </div>
  );
};

export default Input;
