import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addClickedTrailer } from "../Utils/MovieSlice";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { setMovieDetails } from "../Utils/MovieDetailsSlice";
import TitlePage from "./MovieDetails/TitlePage";
import useMovieDetails from "../Hooks/useMovieDetails";

const Watch = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("jbv");
  const dispatch = useDispatch();
  const key = useSelector((store) => store.movie.ClickedTrailer);

  useMovieDetails(id);

  if (!key) return null;
  //   console.log(key);
  return (
    <div className=" bg-neutral-900 m-0 p-0  w-screen xs:w-screen">
      <div className="flex justify-around w-screen">
        <iframe
            className="w-[70%]  xs:w-screen"
          height={720}
          width={980}
          src={
            "https://www.youtube.com/embed/" +
            key.key +
            "?autoplay=1&mute=1&loop=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <TitlePage />
      </div>
    </div>
  );
};

export default Watch;
