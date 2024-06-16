import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./Home.jsx"));
const Movies = lazy(() => import("./Movies.jsx"));
const MovieDetails = lazy(() => import("./MovieDetails.jsx"));
const Cast = lazy(() => import("./Cast.jsx"));
const Reviews = lazy(() => import("./Reviews.jsx"));
const NotFound = lazy(() => import("./NotFound.jsx"));

function App() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "active" : "")}>
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;