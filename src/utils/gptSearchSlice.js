import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptMoviesNames: null,
    gptMoviesResults: null,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResults: (state, action) => {
      const { gptMoviesNames, gptMoviesResults } = action.payload;
      state.gptMoviesNames = gptMoviesNames;
      state.gptMoviesResults = gptMoviesResults;
    },
  },
});

export const { toggleGPTSearchView, addGPTMovieResults } =
  gptSearchSlice.actions;
export default gptSearchSlice.reducer;
