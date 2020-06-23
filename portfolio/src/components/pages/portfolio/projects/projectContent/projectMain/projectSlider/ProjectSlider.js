import React from "react";
import { Zoom } from 'react-slideshow-image';

 
const ProjectSlider = ( { imagesArray } ) => {

  const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 1.6,
  arrows: true
  };
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            imagesArray.map((each, index) => <img key={index} style={{width: "100%"}} src={each.img} alt={each.img} />)
          }
        </Zoom>
      </div>
    )
}

export default ProjectSlider;
