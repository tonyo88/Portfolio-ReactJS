import React from "react";
import HomeHeader from "./homeHeader/HomeHeader";
import HomeMain from "./homeMain/HomeMain";
import PageLoader from "../../pageLoader/PageLoader";

const Home = () => {
  return (
    <React.Fragment>
      <PageLoader />
      <HomeHeader />
      <HomeMain />
    </React.Fragment>
  );
};

export default Home;
