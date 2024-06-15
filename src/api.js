import axios from "axios";

const API_KEY = "4825590330745f1ec4328dc50e97062f";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = () => {
  return axios.get(`${BASE_URL}/trending/all/day?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const searchMovies = (query) => {
  return axios.get(`${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${query}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const fetchMovieDetails = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const fetchMovieCast = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/credits?language=en-US`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

export const fetchMovieReviews = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};
