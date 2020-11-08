import React from "react";

const FormError = ({ children, errors, name }) => {
  const error = errors[name] || null;
  if (!error) {
    return null;
  }

  return <div></div>;
};

export default FormError;
