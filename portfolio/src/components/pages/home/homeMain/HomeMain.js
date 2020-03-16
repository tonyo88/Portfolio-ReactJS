import React from "react";
import SectionWebSkills from "./sectionWebsiteSkills/SectionWebSkills";
import SectionVideo from "./sectionVideo/SectionVideo";

class HomeMain extends React.Component {

    render() {
     return(
         <main id="home-main">

            <SectionWebSkills />
            <SectionVideo />
         </main>
     );
    };
};
export default HomeMain;