import React from "react";
import HeaderContact from "./conatctHeader/HeaderContact";
import MainContact from "./contactMain/MainContact";
import PageLoader from "../../pageLoader/PageLoader";
  

class Contact extends React.Component {
   render() {
     return(
       <React.Fragment>
         <PageLoader />
         <HeaderContact />
         <MainContact />
       </React.Fragment>
     );
   };
};

export default Contact;