import React from "react";
import { TMDB_IMAGE_PATH } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if(!movie.poster_path) return null
  return (
    <div className="w-48 pr-4">
      <img
        alt={movie.title}
        src={TMDB_IMAGE_PATH + movie.poster_path}
        
      />
    </div>
  );
};

export default MovieCard;
