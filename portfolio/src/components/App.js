import React from "react";
import { BrowserRouter } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Routes from "./routes/Routes";
import PageLoader from "./pageLoader/PageLoader";
import Nav from "./navigation/Nav";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";

import PortfolioReact from "./pages/projects/allProjects/personalProjects/portfolioReact/PortfolioReact";
import WeatherApp from "./pages/projects/allProjects/personalProjects/weatherApp/WeatherApp";
import LittleBarber from "./pages/projects/allProjects/personalProjects/littleBarber/LittleBarber";
import MemoryGame from "./pages/projects/allProjects/personalProjects/memoryGame/MemoryGame";

import Cosmos from "./pages/projects/allProjects/workProjects/cosmos/Cosmos";
import Megz from "./pages/projects/allProjects/workProjects/megz/Megz";
import MovieInHand from "./pages/projects/allProjects/workProjects/movieInHand/MovieInHand";
import LedSvetlini from "./pages/projects/allProjects/workProjects/ledSvetlini/LedSvetlini";

import Footer from "./footer/Footer";

const App = () => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/pages/about",
      component: About,
    },
    {
      path: "/pages/portfolio",
      component: Portfolio,
    },
    {
      path: "/pages/contact",
      component: Contact,
    },
    {
      path: "/pages/portfolio/portfolio-react",
      component: PortfolioReact,
    },
    {
      path: "/pages/portfolio/weather-app",
      component: WeatherApp,
    },
    {
      path: "/pages/portfolio/little-barber",
      component: LittleBarber,
    },
    {
      path: "/pages/portfolio/memory-game",
      component: MemoryGame,
    },
    {
      path: "/pages/portfolio/cosmos",
      component: Cosmos,
    },
    {
      path: "/pages/portfolio/megz",
      component: Megz,
    },
    {
      path: "/pages/portfolio/led-svetlini",
      component: LedSvetlini,
    },
    {
      path: "/pages/portfolio/movie-in-hand",
      component: MovieInHand,
    },
  ];

  const generateRoutes = (routesArray) =>
    routesArray.map((element, index) => (
      <Routes
        key={index}
        routePath={element.path}
        routeComponent={element.component}
      />
    ));
  return (
    <BrowserRouter>
      <PageLoader />
      <Nav />
      {generateRoutes(routes)}
      <Footer />
      <ScrollUpButton />
    </BrowserRouter>
  );
};

export default App;
