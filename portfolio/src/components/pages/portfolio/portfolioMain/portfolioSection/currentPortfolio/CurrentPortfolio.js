import "./CurrentPortfolio.css";
import React from "react";
import {Link} from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';

const portfolioParrentPath = "/pages/portfolio";

const CurrentPortfolio = (props) => {
   return(
      <ScrollAnimation animateIn='fadeIn' duration={1} animateOnce={true} delay={props.delay}>
      <div className="portfolio-box">
       <div className="portfolio">
          <img src={props.portfolioImgSrc} alt={props.portfolioImgAlt}></img>
          <figure>
             <figcaption>
                <h2 className="portfolio-title">
                   {props.portfolioTitle}
                   <Link className="portfolio-btn" to={`${portfolioParrentPath}/${props.portfoliotUrl}`}>view more...</Link>   
                   </h2>
                <p className="portfolio-info">
                   {props.portfolioInfo}
                </p>             
             </figcaption>
          </figure>
          
       </div>
     </div>
     </ScrollAnimation>
   );
}

export default CurrentPortfolio;