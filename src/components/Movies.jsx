import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../api";
import "./Movies.css";

function Movies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    if (query.trim()) {
      searchMovies(query)
        .then((response) => setMovies(response.data.results))
        .catch((error) => console.error(error));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="movies">
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
