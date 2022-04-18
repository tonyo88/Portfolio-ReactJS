import "./ExperienceEducationContent.css";
import React from "react";
import Details from "./details/Details";

const ExperienceEducationContent = (props) => {
  const generateDetails = (detailsArray) =>
    detailsArray.map((element, index) => (
      <Details key={index} detail={element.detail} />
    ));
  return (
    <div className="experience-education-container">
      <a
        href={props.refUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="details"
      >
        <div className="ref-logo">
          <img src={props.refLogo} alt={props.refLogo} className="ref-img" />
        </div>
        <div className="info">
          <div>
            <h3 className="position">{props.position}</h3>
            <h4 className="name">{props.name}</h4>
            <p className="date-range">{props.dateRange}</p>
            <p className="location">{props.location}</p>
          </div>
        </div>
      </a>
      <ul className="experience-education-details">
        {generateDetails(props.detailsArray)}
      </ul>
    </div>
  );
};

export default ExperienceEducationContent;
