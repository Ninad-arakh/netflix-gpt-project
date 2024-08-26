import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    mainMovie: null,
    MovieTrailer: null,
    UpcomingMovies: null,
    TopRatedMovies: null,
    PopularMovies: null,
    ClickedTrailer: null,
  },
  reducers: {
    addMainMovie: (state, action) => {
      state.mainMovie = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.MovieTrailer = action.payload;
    },
    addClickedTrailer: (state, action) => {
      state.ClickedTrailer = action.payload;
    },
  },
});

export const {
  addMainMovie,
  addMovieTrailer,
  addUpcomingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addClickedTrailer,
} = MovieSlice.actions;
export default MovieSlice.reducer;
