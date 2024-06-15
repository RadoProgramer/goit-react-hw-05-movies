import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getMovieCredits } from "../../api";

const Cast = ({ castList }) => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(castList || []);

  useEffect(() => {
    if (!castList) {
      const fetchMovieCredits = async () => {
        const movieCredits = await getMovieCredits(movieId);
        setCast(movieCredits);
      };
      fetchMovieCredits();
    }
  }, [castList, movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  castList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Cast;
