import React from "react";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
import PageLoader from "../../pageLoader/PageLoader";

const Portfolio = () => {
  return (
    <React.Fragment>
      <PageLoader />
      <PortfolioHeader />
      <PortfolioMain />
    </React.Fragment>
  );
};

export default Portfolio;
