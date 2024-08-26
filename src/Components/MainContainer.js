import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const Movies = useSelector((store) => store?.movie?.mainMovie);
  let x = Math.floor(Math.random() * 20);
  if (!Movies) return null;
  const movie = Movies[x];
  
  return (
    <div className="xs:bg-black  ">
      <VideoTitle info={movie} />
      <VideoBackground id={movie.id}/>
    </div>
  );
};

export default MainContainer;
