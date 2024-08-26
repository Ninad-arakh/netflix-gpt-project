import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addMovieTrailer } from "../Utils/MovieSlice";
import { useEffect } from "react";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const trailer = json?.results.filter((video) => video.type === "Trailer");
    dispatch(addMovieTrailer(trailer[0]));
    // console.log(json);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
