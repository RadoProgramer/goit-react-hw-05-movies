import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getMovieDetails } from "../../api";

const MovieDetails = ({ movie }) => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(movie || null);

  useEffect(() => {
    if (!movie) {
      const fetchMovieDetails = async () => {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      };
      fetchMovieDetails();
    }
  }, [movie, movieId]);

  if (!movieDetails) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
  }),
};

export default MovieDetails;
