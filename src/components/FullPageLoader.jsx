import React from "react";
import spinnerLoader from "../assets/spinnerLoader.gif";

const FullPageLoader = () => {
  return (
    <div className="fp-container">
      <div className="fp-loader">
        <img src={spinnerLoader} alt="Loading..."></img>
        <p className="fp-loaderText">Loading...</p>
      </div>
    </div>
  );
};

export default FullPageLoader;
