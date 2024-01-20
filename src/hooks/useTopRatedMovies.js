import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { TMDB_API_OPTIONS, TMDB_TOP_RATED_MOVIE_API_URL } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const response = await fetch(TMDB_TOP_RATED_MOVIE_API_URL, TMDB_API_OPTIONS)
        const json = await response.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}
export default useTopRatedMovies;