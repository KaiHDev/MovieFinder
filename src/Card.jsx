import React from 'react'
import './App.css'

export const Card = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
      <div className="movie" key={imdbID}>
        <div>
            <p>{Year}</p>
        </div>
        <div>
            <img className="image" src={Poster !== "N/A" ? Poster: "https://via.placeholder.com/400"} alt={Title}/>
        </div>

        <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
        </div>
      </div>
  );
}
