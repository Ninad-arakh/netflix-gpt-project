import React, { useState } from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecContainer = () => {
  const movies = useSelector((store) => store.movie);

  if (movies === null) return null;

  return (
    <div className="bg-black md:pl-10 md:pt-2 sm:px-3 xs:px-3 xs:pt-2 ">
      <div className=" md:-mt-[13rem] z-20 relative sm:-mt-[3rem] xs:mt-[55%]">
        <MovieList title={"Now Playing"} movieList={movies.mainMovie} />
        <MovieList title={"Top Rated"} movieList={movies.TopRatedMovies} />
        <MovieList title={"Popular"} movieList={movies.PopularMovies} />
        <MovieList title={"Upcoming"} movieList={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecContainer;
