import "./App.css";

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import ScrollToTop from "./scrollToTop/ScrollToTop";
import PageLoader from "./pageLoader/PageLoader";

import Nav from "./navigation/Nav";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";

import PortfolioReact from "./pages/portfolio/projects/portfolioReact/PortfolioReact";
import PortfolioJs from "./pages/portfolio/projects/portfolioJS/PortfolioJs";
import LittleBarber from "./pages/portfolio/projects/littleBarber/LittleBarber";
import MemoryGame from "./pages/portfolio/projects/memoryGame/MemoryGame";

import Footer from "./footer/Footer";

class App extends React.Component {
    render() {
        return(
          
            <BrowserRouter>

                   <PageLoader />
                   
                    <Nav />

                    <ScrollToTop>
                        <Switch>
                          <Route path="/" exact component={Home} />
                        </Switch>
                    </ScrollToTop>
                    
                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/about" exact component={About} />
                        </Switch>
                    </ScrollToTop>

                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio" exact component={Portfolio} />
                        </Switch>
                    </ScrollToTop>
                    
                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/contact" exact component={Contact} />
                        </Switch>
                    </ScrollToTop>

                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio/portfolio-react" exact component={PortfolioReact} /> 
                        </Switch>
                    </ScrollToTop>

                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio/portfolio-js" exact component={PortfolioJs} /> 
                        </Switch>
                    </ScrollToTop>

                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio/little-barber" exact component={LittleBarber} /> 
                        </Switch>
                    </ScrollToTop>
                  
                    <ScrollToTop>
                        <Switch>
                          <Route path="/pages/portfolio/memory-game" exact component={MemoryGame} /> 
                        </Switch>
                    </ScrollToTop>  
                    <Footer />
              
                    <ScrollUpButton />
                                 
            </BrowserRouter>
  
        );
    };
};

export default App;