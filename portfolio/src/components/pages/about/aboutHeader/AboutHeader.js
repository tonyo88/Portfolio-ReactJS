import "./AboutHeader.css";
import React from "react";
import Arrow from "./Arrow/Arrow";
import { Link } from "react-scroll";

const AboutHeader = () => {
  return (
    <header id="about-header" className="background-position flex-middle">
      <Link
        className="about-btn"
        to="section-about"
        spy={true}
        smooth={true}
        duration={800}
      >
        About Me
      </Link>
      <Arrow />
    </header>
  );
};

export default AboutHeader;
