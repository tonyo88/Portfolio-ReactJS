import "./SectionTitle.css";
import React from "react";

const SectionTitle = (props) => {
  return (
    <h1 className="section-title" style={{ color: `${props.titleColor}` }}>
      {props.titleName}
    </h1>
  );
};

export default SectionTitle;
