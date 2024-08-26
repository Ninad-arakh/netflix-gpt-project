import React from "react";
import { CDN_URL } from "../Utils/Constants";

const MovieCard = ({ poster }) => {
  const handleClicked =()=>{
    // console.log(poster.id)
  }
  return (
    <div className="md:w-40 md:mr-2 sm:w-28 sm:mr-2 xs:w-28 xs:pt-2 ">
      <img
        className="rounded-xl h-[90%] w-[95%] cursor-pointer sm: "
        alt="Movie Poster"
        src={CDN_URL + poster?.poster_path}
        onClick={handleClicked}
      />
    </div>
  );
};

export default MovieCard;
