import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Card = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID}>
      <Link to={`/moviedetails/${Title}`}>
        <div>
          <p>{Year}</p>
        </div>
        <div>
          <img
            className="image"
            src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
            alt={Title}
          />
        </div>

        <div>
          <span>{Type}</span>
          <h3>{Title}</h3>
        </div>
      </Link>
    </div>
  );
};
