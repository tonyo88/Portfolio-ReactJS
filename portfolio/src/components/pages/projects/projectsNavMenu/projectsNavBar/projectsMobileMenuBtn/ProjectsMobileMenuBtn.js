import React from "react";

const ProjectsMobileMenuBtn = (props) => {
  return (
    <button className="mobile-projects-nav-btn" onClick={props.openSideMenu}>
      <i className={`fa ${props.className}`} aria-hidden="true"></i>
    </button>
  );
};

export default ProjectsMobileMenuBtn;
