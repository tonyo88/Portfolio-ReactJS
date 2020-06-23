import "./ResponsiveSection.css";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import phone from "../../../../../../assets/pages/home/home-main/section-website-skills/phone.png"

const ResponsiveSection = () => {

    return(

        <div className="responsive-section spacing">
            <div className="wrapper">
                <div className="responsive-design-container">
                   <ScrollAnimation className="responsive-design-image" animateIn='fadeIn' duration={1} animateOnce={true}>
                       <img  src={phone} alt="phone.png"/>
                   </ScrollAnimation>
                   <ScrollAnimation className="responsive-design-info-container" animateIn='fadeIn' delay={500} duration={1} animateOnce={true}>
                      <div className="responsive-design-info">
                        <h1 className="responsive-title">Responsive</h1>
                        <p className="responsive-info">My layouts will work on any device, big or small.</p>
                      </div>
                   </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveSection;