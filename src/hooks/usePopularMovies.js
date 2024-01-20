import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { TMDB_API_OPTIONS, TMDB_POPULAR_MOVIE_API_URL } from "../utils/constants";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPupularMovies = async () => {
        const response = await fetch(TMDB_POPULAR_MOVIE_API_URL, TMDB_API_OPTIONS)
        const json = await response.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getPupularMovies();
    }, []);
}
export default usePopularMovies;