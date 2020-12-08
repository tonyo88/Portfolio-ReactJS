import "./SectionAbout.css";
import React from "react";
import AboutInfo from "./aboutInfo/AboutInfo";
import AboutImage from "./aboutImage/AboutImage";

const SectionAbout = () => {
  return (
    <section id="section-about">
      <div className="wrapper">
        <div className="about-section-container">
          <AboutInfo />
          <AboutImage />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
