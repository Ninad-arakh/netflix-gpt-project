import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  const key = useSelector((store) => store.movie.MovieTrailer);

  useMovieTrailer(id);
  return (
    <div className="w-screen  ">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          key?.key +
          "?autoplay=1&mute=1&loop=1"
        }
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
