import React from "react";
import "./MovieItem.scss";
import { NavLink } from "react-router-dom";

const MovieItem = ({ movie, selectedItem, getMovie }) => {
  return (
    <NavLink
      className="myActive"
      to="#"
      onClick={() => {
        selectedItem(movie.Title);
        getMovie(movie.imdbID);
      }}
    >
      <img
        className="poster"
        src={movie.Poster === "N/A" ? "" : movie.Poster}
        alt=""
      />
      <span className="title">
        {movie.Title} ({movie.Year})
      </span>
    </NavLink>
  );
};

export default MovieItem;
