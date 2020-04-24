import "./Footer.css";
import React from "react";
import {Link} from "react-router-dom";
import FooterMenu from "./footerMenu/FooterMenu";
import FooterContact from "./footerContact/FooterContact";


const Footer = () => {

    return (
        <footer id="main-footer">
            <div className="wrapper">
                <div className="footer-logo ">
                    <Link to="/">
                        <img src={require("../../assets/logo/logo-portfolio.png")} alt="logo-portfolio.png"></img>
                    </Link>
                </div>

                <div className="footer-grid-container">
                    <FooterMenu />
                    <FooterContact />
                </div>

                <p className="copyright"><i className="fa fa-copyright" aria-hidden="true"></i> 2020 Tonyo Vanov</p>
            </div>
        </footer>
    );

};

export default Footer;


