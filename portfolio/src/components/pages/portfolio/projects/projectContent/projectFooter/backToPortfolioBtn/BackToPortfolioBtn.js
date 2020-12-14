import "./BackToPortfolioBtn.css";
import React from "react";
import { Link } from "react-router-dom";

const BackToPortfolioBtn = () => {
  return (
    <Link to="/pages/portfolio" id="back-up-btn" title="Back to Portfolio">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </Link>
  );
};

export default BackToPortfolioBtn;
