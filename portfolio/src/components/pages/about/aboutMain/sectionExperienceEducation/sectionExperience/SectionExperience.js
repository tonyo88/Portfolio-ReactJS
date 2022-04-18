import React from "react";
import SectionTitle from "../../../../sectionTitle/SectionTitle";
import ExperienceEducationContent from "../experienceEducationContent/ExperienceEducationContent";

//Logos
import dailyWireLogo from "../../../../../../assets/pages/about/about-main/experience/daily-wire.png";
import syberryLogo from "../../../../../../assets/pages/about/about-main/experience/syberry.png";
import openSourceLogo from "../../../../../../assets/pages/about/about-main/experience/open-source.png";
import iconLtdLogo from "../../../../../../assets/pages/about/about-main/experience/icon-ltd.png";

const SectionExperience = () => {
  const syberry = [
    {
      detail:
        "Utilized React to build a responsive web app to leverage the ability to write reusable components that efficiently renders on the browser via a virtual DOM for a smooth user experience with minimal delay between user interaction.",
    },
    {
      detail:
        "Constructed a modern UI using React/React Router for a seamless browsing experience on a single page web app.",
    },
    {
      detail:
        "Leveraged various AWS services to deploy a serverless progressive web app that works as a centralized telecommunication hub between an end users and multiple companies’ support services.",
    },
    {
      detail:
        "Assigned all mapping logic to React container components to modularize presentational components and minimize codebase.",
    },
    {
      detail:
        "Created an interactive data visualization UI to show user state changes and component hierarchy.",
    },
    {
      detail:
        "Utilized Material UI to deliver a consistent style for optimal user experience.",
    },
    {
      detail:
        "Applied media queries to ensure primary web platform conformed with strict cross-platform responsive standards.",
    },
    {
      detail:
        "Responsible to Style, look and feel of the web page with SASS that extends CSS with dynamic behavior such as variable, mixing, operations and functions.",
    },
    {
      detail:
        "Extensively used Git for version controlling and regularly pushed the code to GitHub.",
    },
  ];
  const dailyWire = [
    {
      detail:
        "Implemented various screens for the front end using React.js and used various predefined components from NPM (Node Package Manager) and Redux library.",
    },
    {
      detail:
        "Design, develop and test HTML5, CSS3, SCSS, JavaScript, jQuery and React.js that meets accessibility and web browser standards for website.",
    },
    {
      detail:
        "Responsible to Style, look and feel of the web page with SASS that extends CSS with dynamic behavior such as variable, mixing, operations and functions",
    },
    {
      detail:
        "Used React JS for templating for faster compilation and developing reusable components.",
    },
    {
      detail:
        "Used React-Router to turn application into Single Page Application.",
    },
    {
      detail:
        "Implemented stable React components and stand-alone functions to be added to any future pages.",
    },
    {
      detail:
        "In Phase Two, worked closely with the Back-End team to display data using the Custom Components, library Components, and Redux.",
    },
    {
      detail:
        "Extensively used Git for version controlling and regularly pushed the code to GitHub.",
    },
    {
      detail:
        "Deliver on-time, high-quality and error free work that gets results.",
    },
  ];

  const openSourceReactType = [
    {
      detail:
        "Leveraged React to enhance render speeds by taking advantage of the in-memory caching performed by the tree of React elements making a more friendly and interactive UI.",
    },
    {
      detail:
        "Managed Typescript coverage in React/Redux environment to leverage compile time checking and auto-completion with typesafe-actions to properly define the types of action creators, reducers, and state to increase development speed.",
    },
    {
      detail:
        "Constructed Redux-based architecture as top-level source of application state to obviate prop drilling, freeing presentational components from arbitrary rendering hierarchies by allowing them to subscribe to state only as needed.",
    },
  ];
  const openSourcePortfolio = [
    {
      detail:
        "Optimized a React front end to use the framework’s intuitive and dynamic rendering of reusable components, to take advantage of the virtual DOM, and allow for easy refactoring and codebase adoption.",
    },
    {
      detail:
        "Utilized React Router to implement navigational components that facilitate simple route handling between endpoints.",
    },
    {
      detail:
        "Utilized SASS’s nested CSS selectors syntax, variable declarations feature, and mixin properties to construct modular style sheets for a more organized development process.",
    },
  ];
  const openSourceRainbowRoad = [
    {
      detail:
        "Incorporated React Hooks to replace the previous codebase with cleaner, more maintainable, and extendable component code by leveraging useEffect to combine component lifecycle method logic and useState to flatten state initialization.",
    },
    {
      detail:
        "Prevented inefficient prop drilling between components by using Redux’s centralized store management & reducer system.",
    },
  ];
  const iconLTD = [
    {
      detail:
        "Built custom React Material UI interfaces, utilized HTML/CSS/JS to edit responsive sites and fluid layouts based on client requirements in Adobe Experience Manager. Tested client-side code in multiple browsers.",
    },
    {
      detail:
        "Built a state dependency tree to account for multiple useEffect scenarios and grouped relating logic together based on state, its corresponding life cycle methods, and other assigned methods.",
    },
    {
      detail:
        "Queried SQL-based supplies database to coordinate procurement scheduling and delivery products.",
    },
    {
      detail:
        "Utilized responsive viewport adaptability with media queries & mobile-specifics CSS for seamless web to mobile experience.",
    },
    {
      detail:
        "Extensively used Git for version controlling and regularly pushed the code to GitHub.",
    },
  ];
  return (
    <div className="wrapper">
      <SectionTitle titleName="Experience" />
      <section id="section-experience" className="experience-education-content">
        <ExperienceEducationContent
          refUrl="https://www.syberry.com/"
          refLogo={syberryLogo}
          position="Software Developer"
          name="Syberry"
          dateRange="Jan 2021 - Present &#183; Full-time"
          location="Austin, Texas, United States"
          detailsArray={syberry}
        />
        <ExperienceEducationContent
          refUrl="https://www.dailywire.com/"
          refLogo={dailyWireLogo}
          position="React UI Developer"
          name="The Daily Wire"
          dateRange="Nov 2019 - Dec 2020 &#183; Full-time"
          location="Los Angeles, California, United States"
          detailsArray={dailyWire}
        />
        <ExperienceEducationContent
          refUrl="https://www.linkedin.com/company/open-source-reactvt/"
          refLogo={openSourceLogo}
          position="ReacType | Software Developer | Prototyping Tool for exporting React/Typescript Applications"
          name="Open Source"
          dateRange="Jul 2020 - Nov 2020 &#183; Full-time"
          location="Los Angeles, California, United States"
          detailsArray={openSourceReactType}
        />
        <ExperienceEducationContent
          refUrl="https://www.linkedin.com/company/open-source-reactvt/"
          refLogo={openSourceLogo}
          position="Portfolio | React UI Developer | React Web Developer"
          name="Open Source"
          dateRange="Mar 2020 - Jun 2020 &#183; Full-time"
          location="Los Angeles, California, United States"
          detailsArray={openSourcePortfolio}
        />
        <ExperienceEducationContent
          refUrl="https://www.linkedin.com/company/open-source-reactvt/"
          refLogo={openSourceLogo}
          position="RainbowRoad | Software Developer | An app for veiwing lgbtq-friendly events and businesses"
          name="Open Source"
          dateRange="Aug 2019 - Feb 2020 &#183; Full-time"
          location="Los Angeles, California, United States"
          detailsArray={openSourceRainbowRoad}
        />
        <ExperienceEducationContent
          refUrl="http://www.icon.bg/"
          refLogo={iconLtdLogo}
          position="Frontend Developer"
          name="Icon LTD"
          dateRange="Oct 2018 - Oct 2019 &#183; Full-time"
          location="Sofia, Bulgaria"
          detailsArray={iconLTD}
        />
      </section>
    </div>
  );
};

export default SectionExperience;
