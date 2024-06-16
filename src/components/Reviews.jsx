import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { fetchMovieReviews } from "../api";
import "./Reviews.css";

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then((response) => setReviews(response.data.results))
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
    <div className="reviews">
      <button onClick={handleGoBack}>Go back</button>
      <h2>Reviews</h2>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </div>
  );
}

export default Reviews;
