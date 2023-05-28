import React from "react";
import { movies } from "../data";

const moviesToDisplay = movies.map(movie => {
  return (
    <div key={movie.title}>
      {movie.title}
      : {movie.time} minutes
      <ul>
        {movie.genres.map(genre => <li key={genre} >{genre}</li>)}
      </ul>
    </div>
  );
})

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
        {moviesToDisplay}
    </div>
  );
}

export default Movies;
