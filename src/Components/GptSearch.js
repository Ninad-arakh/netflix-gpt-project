import React from "react";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src="https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224740-3441109.png"
          className=" fixed h-screen object-cover w-screen"
        />
      </div>
      <GptSearchBar/>
    </div>
  );
};

export default GptSearch;
