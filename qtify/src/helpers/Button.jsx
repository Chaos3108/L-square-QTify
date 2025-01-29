import React from "react";
import "./button.css";

const Button = ({ text }) => {
  return (
    <button className="button-container">
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
