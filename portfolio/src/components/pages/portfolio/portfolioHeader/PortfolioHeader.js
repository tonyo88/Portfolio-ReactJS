import "./PortfolioHeader.css";

import React from "react";
import Particles from 'react-particles-js';

import reactLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/react.png";
import cssLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/css.png";
import htmlLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/html5.png";
import sassLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/sass.png";
import jsLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/js.png";
import reactRouterLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/react-router.png";
import reactReduxLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/react-redux.png";
import jqueryLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/jquery.png";
import vscodeLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/vs-code.png";
import gitLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/git.png";
import photodhopLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/photoshop.png";
import atomLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/atom.png";
import wordpressLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/wordpress.png";
import bootstrapLogo from "../../../../assets/pages/portfolio/portfolio-header/code-icons/bootstrap.png";


class PortfolioHeader extends React.Component{

  render() {
      return(
          <header id="portfolio-header">
            <div className="mobile-portfolio-background">
            <img  src={require("../../../../assets/pages/portfolio/portfolio-header/background/portfolio.png")} alt="portfolio.png"></img>
            </div>
            
            <Particles
                className="portfolio-particle"
                    params={{
                      "particles": {
                          "number": {
                              "value": 10,
                              "density": {
                                  "enable": true,
                                  "value_area": 300
                              }
                          },
                          "line_linked": {
                              "enable": false
                          },
                          "move": {
                              "speed": 1,
                              "out_mode": "out"
                          },
                          "shape": {
                              "type": [
                                  "images",
                                  "circle"
                              ],
                              "images": [
                                  {
                                      "src": `${reactLogo}`,
                                      "height": 20,
                                      "width": 23
                                  },
                                  {
                                      "src": `${cssLogo}`,
                                      "height": 20,
                                      "width": 20
                                  },
                                  {
                                      "src": `${htmlLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${sassLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${jsLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${reactRouterLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${reactReduxLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${jqueryLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${vscodeLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${gitLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${photodhopLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${atomLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${wordpressLogo}`,
                                      "height": 20,
                                      "width": 20
                                    }
                                    ,
                                  {
                                      "src": `${bootstrapLogo}`,
                                      "height": 20,
                                      "width": 20
                                  }
                              ]
                          },
                          "color": {
                              "value": "#CCC"
                          },
                          "size": {
                              "value": 30,
                              "random": false,
                              "anim": {
                                  "enable": true,
                                  "speed": 30,
                                  "size_min": 15,
                                  "sync": false
                              }
                          }
                      },
                      "retina_detect": false
	            }} />
          </header>
      );
  };
};

export default PortfolioHeader;