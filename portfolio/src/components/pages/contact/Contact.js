import React from "react";
import HeaderContact from "./conatctHeader/HeaderContact";
import MainContact from "./contactMain/MainContact";
import PageLoader from "../../pageLoader/PageLoader";

const Contact = () => {
  return (
    <React.Fragment>
      <PageLoader />
      <HeaderContact />
      <MainContact />
    </React.Fragment>
  );
};

export default Contact;
