import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, path, type }) => {
  return (
    <Link type={type} to={path} className="btn btn-primary">
      {children}
    </Link>
  );
};

export default Button;
