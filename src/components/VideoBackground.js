import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";
import { YOUTUBE_BASE_URL } from "../utils/constants";

const VideoBackground = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieVideos(movieID);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_BASE_URL + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
