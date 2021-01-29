import React from "react";
import { image } from "./utils";
function MovieList({ poster_path, title, release_date, vote_average }) {
  return (
    <div className="card">
      <div className="movie">
        <img src={`${image}${poster_path}`} alt="" />
      </div>
      <div className="details">
        <h5>Name: {title}</h5>
        <h5> Release-Date:{release_date}</h5>
        <span>Rating:{vote_average}</span>
      </div>
    </div>
  );
}

export default MovieList;
