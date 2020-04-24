import "./AboutHeader.css";
import React from "react";
import Arrow from "../../../Arrow/Arrow";
import { Link } from "react-scroll";


class AboutHeader extends React.Component {
    render(){
        return(
            <header id="about-header" className="background-position">

					<Link
						className="about-btn"
						to="section-about"
						spy={true}
						smooth={true}					 
						duration= {800}
					  >
						About Me
					</Link>
					<Arrow />
            </header>
        );
    }
};

export default AboutHeader;