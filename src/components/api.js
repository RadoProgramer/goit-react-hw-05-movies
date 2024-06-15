import axios from "axios";

const API_KEY = "4825590330745f1ec4328dc50e97062f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/get-trending?api_key=${API_KEY}`,
  );
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/search-movies?api_key=${API_KEY}&query=${query}`,
  );
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movies/get-movie-details?api_key=${API_KEY}&movie_id=${movieId}`,
  );
  return response.data;
};

export const getMovieCredits = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movies/get-movie-credits?api_key=${API_KEY}&movie_id=${movieId}`,
  );
  return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(
    `${BASE_URL}/movies/get-movie-reviews?api_key=${API_KEY}&movie_id=${movieId}`,
  );
  return response.data.results;
};
