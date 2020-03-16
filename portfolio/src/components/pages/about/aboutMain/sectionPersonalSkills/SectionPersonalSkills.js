import "./SectionPersonalSkills.css";

import React from "react";
import SectionTitle from "../../../../sectionTitle/SectionTitle";
import PersonalSkill from "./personalSkill/PersonalSkill";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class SectionPersonalSkills extends React.Component{

    render() {
      return(
         <section id="personal-skills" className="background-position">
           <div className="wrapper">
            <SectionTitle titleName={"Personal Skills"} />
              <div className="personal-skills-container">

                <ScrollAnimation animateIn='fadeIn' duration={1} delay={200} animateOnce={true}>
                  <PersonalSkill
                    personalSkillValue={"100"}
                    personalSkillName={"Responsible"}
                    responsibleProgress="responsible"
                  />
                </ScrollAnimation>
      
                 <ScrollAnimation animateIn='fadeIn' duration={1} delay={300} animateOnce={true}>
                   <PersonalSkill
                  personalSkillValue={"100"}
                  personalSkillName={"Team Player"}
                  responsibleProgress="team-player"
                   />
                </ScrollAnimation>
       
                <ScrollAnimation animateIn='fadeIn' duration={1} delay={400} animateOnce={true}>
                  <PersonalSkill
                  personalSkillValue={"100"}
                  personalSkillName={"Reliable"}
                  responsibleProgress="reliable"
                  />
                </ScrollAnimation>
       
                <ScrollAnimation animateIn='fadeIn' duration={1} delay={500} animateOnce={true}>
                  <PersonalSkill
                  personalSkillValue={"100"}
                  personalSkillName={"Fast Learner"}
                  responsibleProgress="fast-learner"
                  />
                </ScrollAnimation>          
          
              </div>
           </div>
         </section>
      );
    };
};

export default SectionPersonalSkills;