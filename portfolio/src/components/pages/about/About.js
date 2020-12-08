import React from "react";
import AboutHeader from "./aboutHeader/AboutHeader";
import AboutMain from "./aboutMain/AboutMain";
import PageLoader from "../../pageLoader/PageLoader";

const About = () => {
  return (
    <React.Fragment>
      <PageLoader />
      <AboutHeader />
      <AboutMain />
    </React.Fragment>
  );
};

export default About;
