import React from "react";
import { directors } from "../data";

const directorsToDisplay = directors.map(director => {
  return (
    <div key={director.name} >
      {director.name}
      <ul>
        {director.movies.map(movie => <li key={movie} >{movie}</li>)}
      </ul>
    </div>
  );
})

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsToDisplay}
    </div>
  );
}

export default Directors;
