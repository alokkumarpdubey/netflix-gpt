import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-1/4">{overview}</p>
      <div className="my-2 ">
        <button className="bg-white rounded-lg p-4 px-12 m-2 text-black text-xl hover:bg-opacity-50">▶️ Play</button>
        <button className="bg-gray-500 rounded-md p-4 px-12 m-2  bg-opacity-50 text-white text-xl">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
