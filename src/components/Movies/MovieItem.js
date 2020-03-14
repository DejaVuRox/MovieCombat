import React from "react";
import "./MovieItem.scss";
import { NavLink } from "react-router-dom";

const MovieItem = ({ movie, selectedItem }) => {

  return (
    <NavLink className="dropdown-item" to="#" onClick={selectedItem(movie.Title)}>
      <img
        className="poster"
        src={movie.Poster === "N/A" ? "" : movie.Poster}
        alt=""
      />
      <span className="title">{movie.Title}</span>
    </NavLink>
  );
};

export default MovieItem;

// create function on each el that sets the value of input to title
