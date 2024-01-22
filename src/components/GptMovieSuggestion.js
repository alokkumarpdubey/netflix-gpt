import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestion = () => {
  const { gptMoviesNames, gptMoviesResults } = useSelector(
    (store) => store.gpt
  );
  if (!gptMoviesNames) return;
  return (
    <div className="p-4 m-4 bg-black opacity-70">
      {gptMoviesNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={gptMoviesResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
