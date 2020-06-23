import "./AboutImage.css";
import React from "react";
import CurrentImage from "./currentImage/CurrentImage";

const AboutImage = ({ imagesArray }) => {

    const generateImages = () => (
        imagesArray.map((element, index) =>(
         <CurrentImage 
           key = {index}
           animation = {element.animation}
           duration = {element.duration}
           delay = {element.delay}
           image = {element.image}
           alt = {element.alt}
         />
        )));
    return(
        <div className="about-image-container"> 
           {generateImages()}
        </div>
    );
};

export default AboutImage;