import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const displayMovie = movies[0];  
  const {original_title, overview, id} = displayMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieID={id}/>
    </div>
  );
};

export default VideoContainer;
