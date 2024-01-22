import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGPTMovieResults } from "../utils/gptSearchSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchTMDBMovie = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      TMDB_API_OPTIONS
    );
    const json = await response.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Hum saath saath hai, gadar, don, kabhi khushi kabhi ghum, sholay";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
    const gptResults = {
      choices: [
        {
          message: {
            content:
              "Hum saath saath hai, gadar, don, Koi Mil Gaya, sholay",
          },
        },
      ],
    };
    const gptMovies = gptResults.choices[0].message.content.split(", ");    
    const promiseArray = gptMovies.map((movie) => searchTMDBMovie(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addGPTMovieResults({gptMoviesNames:  gptMovies, gptMoviesResults: tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-lg"
        ></input>
        <button
          className="py-2 px-4 col-span-3 m-4 rounded-lg bg-red-700 text-white"
          onClick={handleGPTSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
