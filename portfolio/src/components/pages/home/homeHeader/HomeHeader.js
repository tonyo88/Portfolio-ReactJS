import "./HomeHeader.css";
import React from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

const particleOpt = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 1200,
      },
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#000",
        blur: 1,
      },
    },
  },
};

class HomeHeader extends React.Component {
  render() {
    return (
      <header id="home-header" className="background-position">
        <Particles params={particleOpt} className="home-particle" />
        <div className="wrapper">
          <Link to="./pages/portfolio" className="home-btn middle-positioning">
            <span></span>
            View My Work
          </Link>
        </div>
      </header>
    );
  }
}

export default HomeHeader;
