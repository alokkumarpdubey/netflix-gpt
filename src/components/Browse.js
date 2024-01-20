import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import ListingContainer from "./ListingContainer";
import VideoContainer from "./VideoContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <VideoContainer/>
      <ListingContainer/>
    </div>
  );
};

export default Browse;
