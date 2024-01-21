import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const VideoTitle = ({ title, overview }) => {
  const langKey = useSelector((store) => store.config.language)
  return (
    <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-1/4">{overview}</p>
      <div className="my-2 ">
        <button className="bg-white rounded-lg p-4 px-12 m-2 text-black text-xl hover:bg-opacity-50">▶️ {lang[langKey].play}</button>
        <button className="bg-gray-500 rounded-md p-4 px-12 m-2  bg-opacity-50 text-white text-xl">{lang[langKey].moreInfo}</button>
      </div>
    </div>
  );
};

export default VideoTitle;
