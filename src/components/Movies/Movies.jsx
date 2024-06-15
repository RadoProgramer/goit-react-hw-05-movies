import React, { useState } from "react";
import PropTypes from "prop-types";
import { searchMovies } from "../../api";

const Movies = ({ initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || "");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const movies = await searchMovies(query);
    setResults(movies);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  initialQuery: PropTypes.string,
};

export default Movies;