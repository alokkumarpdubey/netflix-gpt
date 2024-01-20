import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(TMDB_API_URL, TMDB_API_OPTIONS);
    const json = await response.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
