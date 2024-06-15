import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getTrendingMovies } from "../../api";

const Home = ({ movies }) => {
  const [trendingMovies, setTrendingMovies] = useState(movies || []);

  useEffect(() => {
    if (!movies) {
      const fetchTrendingMovies = async () => {
        const trendingMovies = await getTrendingMovies();
        setTrendingMovies(trendingMovies);
      };
      fetchTrendingMovies();
    }
  }, [movies]);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default Home;
