import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFullPageLoader from "../hooks/useFullPageLoader";
import IMDb_logo from "../assets/IMDb_Logo.png";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_FINDER_API_KEY}`;
  const { title } = useParams();
  const navigate = useNavigate();
  //Rating defined here as it is in an array which can be "undefined"
  const ratingValueIMDb = movieDetails.Ratings ?? "undefined";

  //UseRef is used to make a temporary function
  const tempRetrieval = useRef();

  //Main data retrieval
  const dataRetrieval = async () => {
    showLoader();
    const response = await fetch(`${API_URL}&t=${title}`);
    const data = await response.json().then(
      setTimeout(() => {
        hideLoader();
      }, [300])
    );
    setMovieDetails(data);
  };

  //Set the temporary function in its current state to the main function
  tempRetrieval.current = dataRetrieval;

  //Use the temporary function to call the data and remove the dependency
  useEffect(() => {
    tempRetrieval.current();
  }, []);

  return (
    <div className="detailsContainer">
      <div className="sectionLeft">
        <div className="heroSection">
          <h1 className="movieTitle">{movieDetails.Title}</h1>
          <p className="plot">{movieDetails.Plot}</p>
        </div>
        <div className="thirdPartyRatings">
          <div className="IMDbRating">
            <img className="IMDbLogo" alt="IMDBLogo" src={IMDb_logo}></img>
            {ratingValueIMDb === "undefined" ? (
              <p className="paragraphTextWhite">No rating found</p>
            ) : (
              <div>
                <p className="IMDbRatingText">{ratingValueIMDb[0].Value}</p>
                <p className="IMDBRatingSubText">
                  <span className="boldText">Out of: </span>(
                  {movieDetails.imdbVotes} votes)
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="movieTypeSection">
          <p className="movieType">
            <span className="boldText">Type:</span> {movieDetails.Type}
          </p>
          <p className="year">
            <span className="boldText">Year of release:</span>{" "}
            {movieDetails.Year}
          </p>
          <p className="genre">
            <span className="boldText">Rated:</span> {movieDetails.Rated}
          </p>
        </div>
        <div className="movieDetailsText">
          <p className="rating">
            <span className="boldText">Genre:</span> {movieDetails.Genre}
          </p>
          <p className="movieDetailsText">
            <span className="boldText">Runtime:</span> {movieDetails.Runtime}
          </p>
          <p className="movieDetailsText">
            <span className="boldText">Cast:</span> {movieDetails.Actors}
          </p>
        </div>
        <p className="movieDetailsText">
          <span className="boldText">Box Office:</span> {movieDetails.BoxOffice}
        </p>
        <p className="directors">
          <span className="boldText">Director(s):</span> {movieDetails.Director}
        </p>
        <button className="searchButton" onClick={() => navigate("/")}>
          Search again...
        </button>
      </div>
      <div className="sectionRight">
        <img
          className="poster"
          alt="Movie Poster"
          src={
            movieDetails.Poster !== "N/A"
              ? movieDetails.Poster
              : "https://via.placeholder.com/400"
          }
        ></img>
      </div>
      {loader}
    </div>
  );
};

export default MovieDetails;
