import "./SectionAbout.css";
import React from "react";
import AboutInfo from "./aboutInfo/AboutInfo";

const SectionAbout = () => {
  return (
    <section id="section-about">
      <div className="wrapper">
        <div className="about-section-container">
          <AboutInfo />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
