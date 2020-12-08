import "./HeaderContact.css";
import React from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";

class HeaderContact extends React.Component {
  render() {
    return (
      <header id="contact-header" className="background-position">
        <SectionTitle titleName={"Contact Me"} titleColor={"#f7f7f9"} />
      </header>
    );
  }
}

export default HeaderContact;
