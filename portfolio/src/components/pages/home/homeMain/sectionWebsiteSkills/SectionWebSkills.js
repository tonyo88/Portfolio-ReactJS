import "./SectionWebSkills.css";
import React from "react";
import WebSkillCard from "./webSkillCard/WebSkillCard";
import dynamic from "../../../../../assets/pages/home/home-main/section-website-skills/dynamic.jpg";
import fast from "../../../../../assets/pages/home/home-main/section-website-skills/fast.jpg";
import intuitive from "../../../../../assets/pages/home/home-main/section-website-skills/intuitive.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class SectionWebSkills extends React.Component {
    
    render() {
        return(
            <section className="web-skills-section">

                <div className="wrapper">

                    <div className="container-web-skills spacing">

                        <WebSkillCard   
                         style = {{backgroundImage: `url(${dynamic})`}}
                         webSkillTittle= {"Dynamic"}
                         webSkillInfo={"Websites don't have to be static, I love making pages come to life."}
                        />

                        <WebSkillCard   
                         style = {{backgroundImage: `url(${fast})`}}
                         webSkillTittle= {"Fast"}
                         webSkillInfo={"Fast load times and lag free interaction, my highest priority."}
                         />

                        <WebSkillCard   
                        style = {{backgroundImage: `url(${intuitive})`}}
                         webSkillTittle= {"Intuitive"}
                         webSkillInfo={"Strong preference for easy to use, intuitive UX/UI."}
                         />
                        
                    </div>

                </div>

                <div className="responsive-section spacing">
                    
                  <div className="wrapper">

                    <div className="responsive-design-container">

                        <ScrollAnimation className="responsive-design-image" animateIn='fadeIn' duration={1} animateOnce={true}>     
                                <img src={require("../../../../../assets/pages/home/home-main/section-website-skills/phone.png")} alt="phone.png"></img>
                        </ScrollAnimation>
                        
                        <ScrollAnimation animateIn='tada' duration={1} animateOnce={true}>
                            <div className="responsive-design-info">
                                <h1 className="responsive-title">Responsive</h1>
                                <p className="responsive-info">My layouts will work on any device, big or small.</p>
                            </div>
                        </ScrollAnimation>

                    </div>

                  </div>

                </div>
    
            </section>
        );
    };
};

export default SectionWebSkills;

