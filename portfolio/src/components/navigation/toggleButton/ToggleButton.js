import "./ToggleButton.css";
import React from "react";

const ToggleButton = (props) => {
  return (
    <div className="toggle-btn" onClick={props.openClickHandler}>
      <span className={props.className}></span>
      <span className={props.className}></span>
      <span className={props.className}></span>
    </div>
  );
};

export default ToggleButton;
