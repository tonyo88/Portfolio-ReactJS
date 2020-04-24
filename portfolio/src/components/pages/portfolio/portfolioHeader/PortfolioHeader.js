import "./PortfolioHeader.css";
import React from "react";
import SectionTitle from "../../../sectionTitle/SectionTitle";

class PortfolioHeader extends React.Component{

  render() {
      return(
          <header id="portfolio-header" className="background-position">
            <div className="portfolio-header-title">
              <SectionTitle titleName={"Portfolio"} titleColor={"#f7f7f9"} />
            </div>
          </header>
      );
  };
};

export default PortfolioHeader;