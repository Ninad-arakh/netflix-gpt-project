import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleButton: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleButton } = GptSlice.actions;
export default GptSlice.reducer;
