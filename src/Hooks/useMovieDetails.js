import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants";
import { setMovieDetails } from "../Utils/MovieDetailsSlice";
import { addClickedTrailer } from "../Utils/MovieSlice";
import { useDispatch } from "react-redux";

const useMovieDetails = (id) => {
  const dispatch = useDispatch();
  const getKey = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json?.results.filter((video) => video.type === "Trailer");
    dispatch(addClickedTrailer(trailer[0]));
  };

  const getInfo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(setMovieDetails(json));
  };

  useEffect(() => {
    getKey();
    getInfo();
  }, []);
};

export default useMovieDetails;
