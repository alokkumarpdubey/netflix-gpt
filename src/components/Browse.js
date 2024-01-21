import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import ListingContainer from "./ListingContainer";
import VideoContainer from "./VideoContainer";

const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGPT ? (
        <GptSearch />
      ) : (
        <>
          <VideoContainer />
          <ListingContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
