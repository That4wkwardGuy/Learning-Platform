import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  placeholder,
  name,
  autoComplete = "off",
  value,
  defaultValue,
  type,
  errorMessage,
  onChange,
  title
}) => {
  const errorStyle = {
    display: errorMessage ? "block" : "none",
    textAlign: "center"
  };
  return (
    <div className="Input">
      <label
        className="InputTitle"
        style={{ display: title ? "block" : "none" }}
      >
        {title}
      </label>
      <input
        className="Input-input"
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <div style={errorStyle} className="red error-message">
        {errorMessage}
      </div>
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
