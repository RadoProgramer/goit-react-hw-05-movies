import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchMovieCast } from "../api";
import "./Cast.css";

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieCast(movieId)
      .then((response) => setCast(response.data.cast))
      .catch((error) => console.error(error));
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state?.from) {
      navigate(location.state.from.pathname, {
        state: {
          query: location.state.from.query,
          movies: location.state.from.movies,
        },
      });
    } else {
      navigate("/");
    }
  };

  return (
    <div className="cast">
      <button onClick={handleGoBack}>Go back</button>
      <h2>Cast</h2>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${member.profile_path}`}
              alt={member.name}
            />
            <p>{member.name}</p>
            <p>Character: {member.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
