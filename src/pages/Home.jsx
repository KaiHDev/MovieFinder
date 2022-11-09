import React from 'react'
import { useState, useEffect } from 'react';
import { Card } from '../Card';

const API_URL = "http://www.omdbapi.com/?apikey=50c1a07a"

const Home = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      searchMovies("Avengers");
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchMovies(searchTerm);
        }
    }
  
    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      console.log(data);
      setMovies(data.Search);
    };
  
  return (
    <>
        <h1 className='headings'>Find Movies</h1>
        <div className="search">
            <input 
                placeholder="Search Movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className='searchbutton' onClick={() => searchMovies(searchTerm)}>Search</button>
        </div>
        {movies?.length > 0 ? (
            <div className='container'>
                {movies.map((movie) => (
                <Card 
                    movie={movie}
                />
                ))}
            </div>
        ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        )}
    </>
  )
}

export default Home