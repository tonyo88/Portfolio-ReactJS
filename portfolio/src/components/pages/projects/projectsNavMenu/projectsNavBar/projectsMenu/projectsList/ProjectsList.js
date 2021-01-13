import React from "react";
import { NavLink } from "react-router-dom";

const ProjectsList = (props) => {
  return (
    <li className="project-list">
      <NavLink
        exact
        to={props.prejectUrl}
        className="project-link"
        activeClassName="active-project-link"
        onClick={props.closeSideMenu}
      >
        {props.projectLinkName}
      </NavLink>
    </li>
  );
};

export default ProjectsList;
