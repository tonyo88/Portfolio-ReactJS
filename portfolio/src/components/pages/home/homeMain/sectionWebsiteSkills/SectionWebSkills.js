import "./SectionWebSkills.css";
import React from "react";
import WebSkills from "./webSkills/WebSkills";

import ResponsiveSection from "./responsiveSection/ResponsiveSection";
import dynamic from "../../../../../assets/pages/home/home-main/section-website-skills/dynamic.jpg";
import fast from "../../../../../assets/pages/home/home-main/section-website-skills/fast.jpg";
import intuitive from "../../../../../assets/pages/home/home-main/section-website-skills/intuitive.jpeg";

class SectionWebSkills extends React.Component {
    
    render() {

        const webSkills = [
            {
                style: {backgroundImage: `url(${dynamic})`},
                webSkillTittle: "Dynamic",
                webSkillInfo: "Websites don't have to be static, I love making pages come to life."  
            },
            {
                style: {backgroundImage: `url(${fast})`},
                webSkillTittle: "Fast",
                webSkillInfo: "Fast load times and lag free interaction, my highest priority." 
            },
            {
                style: {backgroundImage: `url(${intuitive})`},
                webSkillTittle: "Intuitive",
                webSkillInfo: "Strong preference for easy to use, intuitive UX/UI." 
            }
        ];

        return(
            <section className="web-skills-section">
                <WebSkills webSkillsArray={webSkills} />
                <ResponsiveSection />   
            </section>
        );
    };
};

export default SectionWebSkills;

