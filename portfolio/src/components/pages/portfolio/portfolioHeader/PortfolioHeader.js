import "./PortfolioHeader.css";
import React from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";

const PortfolioHeader = () => {
  return (
    <header id="portfolio-header" className="background-position">
      <div className="portfolio-header-title middle-positioning">
        <SectionTitle titleName={"Portfolio"} titleColor={"#f7f7f9"} />
      </div>
    </header>
  );
};

export default PortfolioHeader;
