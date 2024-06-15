import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../api";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => setMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <a href={`/movies/${movie.id}`}>{movie.title || movie.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
