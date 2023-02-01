import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import useFullPageLoader from "../hook/useFullPageLoader";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_FINDER_API_KEY}`;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const handleKeyDown = (e) => {
    if (searchTerm === "") {
    } else {
      if (e.key === "Enter") {
        searchMovies(searchTerm);
      }
    }
  };

  const searchMovies = async (title) => {
    showLoader();
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json().then(
      setTimeout(() => {
        hideLoader();
      }, [300])
    );
    setMovies(data.Search);
  };

  return (
    <>
      <h1 className="headings">Find Movies</h1>
      <div className="search">
        <input
          placeholder="Search Movies"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="searchButton"
          disabled={!searchTerm}
          onClick={() => searchMovies(searchTerm)}
        >
          Search
        </button>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Card movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2 className="subheadings">No movies found for: {searchTerm}</h2>
        </div>
      )}
      {loader}
    </>
  );
};

export default Home;
