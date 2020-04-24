import React from "react";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
import PageLoader from "../../pageLoader/PageLoader";
  

class Portfolio extends React.Component {

  render() {

    return(

      <React.Fragment>
        <PageLoader />
        <PortfolioHeader />
        <PortfolioMain />
      </React.Fragment>

    );
  }
};

export default Portfolio;