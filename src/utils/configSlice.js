import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
  },
  reducers: {
    setAppLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setAppLanguage } = configSlice.actions;
export default configSlice.reducer;
