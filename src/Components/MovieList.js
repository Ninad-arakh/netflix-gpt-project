import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const { movieList, title } = props;

  return (
    <div className="md:px-2 sm:px-2 xs:px-2">
      <h1 className="md:text-2xl font-medium md:py-5 text-white relative sm:text-lg ">
        {title}
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movieList &&
            movieList.map((movie) => (
              <Link key={movie.id} to={"/watch?jbv=" + movie.id}>
                <MovieCard poster={movie} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
