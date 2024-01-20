import { useEffect } from "react";
import {
  TMDB_API_OPTIONS,
  TMDB_GET_MOVIE_VIDOE_API_URL,  
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieVideos = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const response = await fetch(
      TMDB_GET_MOVIE_VIDOE_API_URL + movieID + "/videos?language=en-US",
      TMDB_API_OPTIONS
    );
    const json = await response.json();
    
    const trailerVidoes = json?.results.filter((video) => video.type === "Trailer");
    const trailer = trailerVidoes.length ? trailerVidoes[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};
export default useMovieVideos;
