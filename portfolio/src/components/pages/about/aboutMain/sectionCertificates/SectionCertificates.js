import "./SectionCertificates.css";

import React from "react";
import Certificate from "./certificate/Certificate";
import SectionTitle from "../../../../sectionTitle/SectionTitle";

import microsoft from "../../../../../assets/pages/about/about-main/certificates/microsoft.jpeg";
import frontEnd from "../../../../../assets/pages/about/about-main/certificates/front-end.png";
import uiUX from "../../../../../assets/pages/about/about-main/certificates/ui-ux-design.png";


class SectionCertificates extends React.Component {
    render() {
        return(
            <section id="section-certificates" className="background-position">
                <div className="wrapper">
                    <SectionTitle  titleName={"Certificates"}/>
                   <div className="certificates-container">

                       <Certificate
                        style = {{backgroundImage: `url(${microsoft})`}}
                        date={"07/2019"}
                        titleCertificate={"Microsoft"}
                        discipline={"Programming in HTML5 with JavaScript and CSS3"}
                        infoCertificate={"HTML5, CSS3, JavaScript, Data Security, Data Validation, Object-based Programing"}
                        certificateUrl={"https://www.youracclaim.com/badges/50bed4f8-3ced-4969-ba18-baef88cc05d3/linked_in_profile"}
                       />
                        <Certificate
                        style = {{backgroundImage: `url(${frontEnd})`}}
                        date={"11/2018"}
                        titleCertificate={"Telerik Academy"}
                        discipline={"Front End Development"}
                        infoCertificate={"HTML5, CSS3, SASS, JavaScript, jQuery, React Js, React Redux, React-Router, Axios, JSON, Ajax, Responsive Design "}
                        certificateUrl={"https://www.telerikacademy.com/"}
                       />
                        <Certificate
                        style = {{backgroundImage: `url(${uiUX})`}}
                        date={"11/2018"}
                        titleCertificate={"Telerik Academy"}
                        discipline={"UI / UX Design"}
                        infoCertificate={"Adobe-Photoshop, User Interface Design, Typography Design, Responsive Design, Colors, Gradients, Positioning"}
                        certificateUrl={"https://www.telerikacademy.com/"}
                       />

                   </div>
                </div>

            </section>
        );
    };
};

export default SectionCertificates;