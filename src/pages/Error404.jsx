import React from "react";
import { useNavigate } from "react-router-dom";
import wall_E from "../assets/wall_E.png";

const Error404 = () => {
  let navigate = useNavigate();
  return (
    <div className="detailsContainer">
      <div className="sectionLeft">
        <h1 className="error404Title">Error: 404</h1>
        <p className="error404Text">
          This page doesn't seem to exist! Please return back to the homepage.
        </p>
        <button className="searchButton" onClick={() => navigate("/")}>
          Back Home
        </button>
      </div>
      <div className="sectionRight">
        <img className="wallE404" alt="Wall-E" src={wall_E}></img>
      </div>
    </div>
  );
};

export default Error404;
