import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-lg"
        ></input>
        <button className="py-2 px-4 col-span-3 m-4 rounded-lg bg-red-700 text-white">{lang[langKey].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
