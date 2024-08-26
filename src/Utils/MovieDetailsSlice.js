import { createSlice } from "@reduxjs/toolkit";

const MovieDetails = createSlice({
  name: "movieDetails",
  initialState: { 
    movieD: null 
  },
  reducers: {
    setMovieDetails(state, action) {
      state.movieD = action.payload;
    },
  },
});

export const { setMovieDetails } = MovieDetails.actions;
export default MovieDetails.reducer;
