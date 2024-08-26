import React from "react";
import Header from "./Header";
import { API_OPTIONS } from "../Utils/Constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMainMovie } from "../Utils/MovieSlice";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecContainer from "./SecContainer";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  const gptState = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {gptState ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
