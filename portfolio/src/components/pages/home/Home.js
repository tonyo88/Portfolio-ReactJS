import React from "react";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeMain from "./homeMain/HomeMain";

  
class Home extends React.Component {
  render() {
    return(
      <React.Fragment>
        
            <HomeHeader /> 
            <HomeMain />

      </React.Fragment>     
    );
  };
};

export default Home;
