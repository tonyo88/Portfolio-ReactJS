import React from "react";
import PortfolioHeader from "./portfolioHeader/PortfolioHeader";
import PortfolioMain from "./portfolioMain/PortfolioMain";
  

class Portfolio extends React.Component {

  render() {

    return(

      <React.Fragment>
        <PortfolioHeader />
        <PortfolioMain />
      </React.Fragment>

    );
  }
};

export default Portfolio;