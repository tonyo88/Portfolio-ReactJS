import "./AboutHeader.css";
import React from "react";
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

				<div className="arrow">
					<span></span>
					<span></span>
					<span></span>
				</div>

            </header>
        );
    }
};

export default AboutHeader;