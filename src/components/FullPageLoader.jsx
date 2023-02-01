import React from "react";
import spinner from "../assets/spinner.gif";

const FullPageLoader = () => {
  return (
    <div className="fp-container">
      <div className="fp-loader">
        <img src={spinner} alt="Loading..."></img>
        <p className="fp-loaderText">Loading...</p>
      </div>
    </div>
  );
};

export default FullPageLoader;
