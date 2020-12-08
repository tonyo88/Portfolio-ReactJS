import "./SectionContainer.css";
import React from "react";

const SectionContainer = (props) => {
  return (
    <section className={`section-container spacing ${props.sectionClassName}`}>
      <div className="wrapper">
        <div className="info-image-container">{props.children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
