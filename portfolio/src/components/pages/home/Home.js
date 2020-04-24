import React from "react";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeMain from "./homeMain/HomeMain";
import PageLoader from "../../pageLoader/PageLoader";

  
class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
          <PageLoader />
          <HomeHeader /> 
          <HomeMain />
      </React.Fragment>     
    );
  };
};

export default Home;
