import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getMovieReviews } from "../../api";

const Reviews = ({ reviewsList }) => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(reviewsList || []);

  useEffect(() => {
    if (!reviewsList) {
      const fetchMovieReviews = async () => {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      };
      fetchMovieReviews();
    }
  }, [reviewsList, movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  reviewsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export default Reviews;
