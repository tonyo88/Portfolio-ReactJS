import "./SectionAbout.css";
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const SectionAbout = () =>{
  
    return(
       <section id="section-about">
           <div className="about-section-container">
              <div className="about-info-container">
                  <h1 className="about-title">Who am I?</h1>
                  <p>
                    Motivated, quick learning, energetic person with
                    ambition to work and learn from the best in
                    field. Person with great interest in IT world with
                    bright vision in future and motivated to cover
                    different targets.
                  </p>
                  <p>
                    To work for a growing up company that will
                    provide me with the possibility of growing within
                    it and will allow the development my abilities
                    and skills in favor of the company’s mission
                    and my environment.
                  </p>

              </div>
              <div className="about-image-container">
                  
                  < ScrollAnimation animateIn='rotateInDownRight' duration={0.8} animateOnce={true} className="first-page" >
                  <img src={require("../../../../../assets/pages/about/about-main/about-section/page-1.png")} alt=" page-1.png"></img>
                  </ScrollAnimation>             
                
                  < ScrollAnimation animateIn='fadeIn' duration={1} delay={1000} animateOnce={true} className="second-page">
                  <img src={require("../../../../../assets/pages/about/about-main/about-section/page-2.png")} alt="page-2.png"></img>
                  </ScrollAnimation>
                  
                  < ScrollAnimation animateIn='fadeIn' duration={1} delay={2000} animateOnce={true} className="third-page" >
                  <img src={require("../../../../../assets/pages/about/about-main/about-section/page-3.png")} alt="page-3.png"></img>
                  </ScrollAnimation>
                  
                  
         
             </div>
           </div>
       </section>
    );
};

export default SectionAbout; 