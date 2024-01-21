import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleGPTSearchView: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleGPTSearchView } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
