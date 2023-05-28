import React from "react";
import { actors } from "../data";

const actorsToDisplay = actors.map(actor => {
  return (
    <div key={actor.name} >
      {actor.name}
      <ul>
        {actor.movies.map(movie => <li key={movie} >{movie}</li>)}
      </ul>
    </div>
  );
})

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsToDisplay}
    </div>
  );
}

export default Actors;
