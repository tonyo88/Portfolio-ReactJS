import "./SectionProfessionalSkills.css";

import React from "react";
import SectionTitle from "../../../../sectionTitle/SectionTitle";
import ProfessionalSkill from "./professionalSkill/ProfessionalSkill";

class SectionProfessionalSkills extends React.Component {

   state = {
      isMouseOver: false
   }

   mouseMoveOver = () => {
      this.setState({isMouseOver: true})
     };
  
    render() {
      return(
        <section id="section-professional-skills" onMouseOver={this.mouseMoveOver}>
           <div className="wrapper">
               <SectionTitle titleName={"Professional Skills"} titleColor={"#f7f7f9"} />
              <div className="professional-skills-container">

                    <ProfessionalSkill
                      skillName={"HTML5"}
                      skillValue={"90%"}
                      outerValue={"html-outer"}
                      bgInner={"html-inner"}
                      innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                    />
                
                    <ProfessionalSkill
                        skillName={"CSS3"}   
                        skillValue={"75%"}
                        outerValue={"css-outer"}
                        bgInner={"css-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"} 
                     />

                    <ProfessionalSkill
                        skillName={"SASS"}
                        skillValue={"80%"}
                        outerValue={"sass-outer"}
                        bgInner={"sass-inner"} 
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

                    <ProfessionalSkill
                          skillName={"JavaScript"}
                          skillValue={"60%"}
                          outerValue={"js-outer"}
                          bgInner={"js-inner"}
                          innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                      />

                    <ProfessionalSkill
                        skillName={"jQuery"}
                        skillValue={"65%"}
                        outerValue={"jq-outer"}
                        bgInner={"jq-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

                    <ProfessionalSkill
                        skillName={"React JS"}
                        skillValue={"70%"}
                        outerValue={"react-js-outer"}
                        bgInner={"react-js-inner"} 
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

                    <ProfessionalSkill
                        skillName={"React-Redux"}
                        skillValue={"50%"}
                        outerValue={"react-redux-outer"}
                        bgInner={"react-redux-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

                    <ProfessionalSkill
                        skillName={"React-Router"}
                        skillValue={"65%"}
                        outerValue={"react-router-outer"}
                        bgInner={"react-router-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

                    <ProfessionalSkill
                        skillName={"Git"}
                        skillValue={"70%"}
                        outerValue={"git-outer"}
                        bgInner={"git-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

                    <ProfessionalSkill
                        skillName={"Responsive-Design"}
                        skillValue={"85%"}
                        outerValue={"responsive-design-outer"}
                        bgInner={"responsive-design-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

                    <ProfessionalSkill
                        skillName={"Photoshop"}
                        skillValue={"65%"}
                        outerValue={"photoshop-outer"}
                        bgInner={"photoshop-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     /> 

                    <ProfessionalSkill
                        skillName={"Wordpress"}
                        skillValue={"50%"}
                        outerValue={"wordpress-outer"}
                        bgInner={"wordpress-inner"}
                        innerProgress={this.state.isMouseOver ? "active-inner-progress inner-progress" : "inner-progress"}
                     />

    
              </div>
           </div>
        </section>
      );
    };
};

export default SectionProfessionalSkills;