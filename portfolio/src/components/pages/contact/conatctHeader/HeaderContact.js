import "./HeaderContact.css";
import React from "react";
import SectionTitle from "../../sectionTitle/SectionTitle";

const HeaderContact = () => {
  return (
    <header id="contact-header" className="background-position flex-middle">
      <SectionTitle titleName={"Contact Me"} titleColor={"#f7f7f9"} />
    </header>
  );
};

export default HeaderContact;
