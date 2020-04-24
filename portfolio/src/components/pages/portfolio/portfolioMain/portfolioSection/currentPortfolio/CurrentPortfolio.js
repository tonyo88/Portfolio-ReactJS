import "./CurrentPortfolio.css";
import React from "react";
import {Link} from "react-router-dom";

const CurrentPortfolio = (props) => {
   return(
      <div className="portfolio-box">
       <div className="portfolio">
          <img src={props.portfolioImgSrc} alt={props.portfolioImgAlt}></img>
          <figure>
             <figcaption>
                <h2 className="portfolio-title">
                   {props.portfolioTitle}
                   <Link className="portfolio-btn" to={`/pages/portfolio/${props.portfoliotUrl}`}>view more...</Link>   
                   </h2>
                <p className="portfolio-info">
                   {props.portfolioInfo}
                </p>             
             </figcaption>
          </figure>
          
       </div>
     </div>
   );
}

export default CurrentPortfolio;