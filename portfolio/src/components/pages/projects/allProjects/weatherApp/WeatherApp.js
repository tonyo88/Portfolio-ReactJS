import React from "react";
import ProjectContent from "../../projectContent/ProjectContent";

import weatherAppLogo from "../../../../../assets/pages/projects/weather-app/logo/weather-logo.png";
import weatherDefault from "../../../../../assets/pages/projects/weather-app/image-slider/weather-dafault.png";
import weatherSun from "../../../../../assets/pages/projects/weather-app/image-slider/weather-sun.png";
import weatherSnow from "../../../../../assets/pages/projects/weather-app/image-slider/weather-snow.png";
import weatherClouds from "../../../../../assets/pages/projects/weather-app/image-slider/weather-clouds.png";

const WeatherApp = () => {
  const imagesProjectSlider = [
    { img: `${weatherDefault}` },
    { img: `${weatherSun}` },
    { img: `${weatherSnow}` },
    { img: `${weatherClouds}` },
  ];

  const technologieSkills = [
    { skillName: "React.js" },
    { skillName: "React Libraries" },
    { skillName: "Fetch" },
    { skillName: "Webpack" },
    { skillName: "HTML5 - semantic" },
    { skillName: "CSS3 - SCSS, Grid Layout" },
    { skillName: "UI/UX Architecture" },
    { skillName: "UI/UX Animations" },
    { skillName: "Responsive Design" },
    { skillName: "Visual Studio Code" },
    { skillName: "Adobe Photoshop" },
  ];

  return (
    <ProjectContent
      id={"weather-app"}
      projectTitle={"Weather App"}
      projectLogo={weatherAppLogo}
      imageSlider={imagesProjectSlider}
      projectInfo={
        "With the Weather-Аpp, you can look up the weather by city name. By pressing `Enter` you will receive information about the meteorological conditions of the city you have chosen."
      }
      projectSkills={technologieSkills}
      projectUrl={"https://github.com/tonyo88/Weather-App-React.js"}
    />
  );
};

export default WeatherApp;
