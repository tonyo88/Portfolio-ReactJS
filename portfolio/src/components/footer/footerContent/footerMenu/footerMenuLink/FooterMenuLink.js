import "./FooterMenuLink.css";
import React from "react";
import { Link } from "react-router-dom";

const FooterMenuLink = (props) => {
  return (
    <li className="footer-list">
      <Link to={props.footerLinkUrl} className="footer-link">
        {props.footerLinkName}
      </Link>
    </li>
  );
};

export default FooterMenuLink;
