import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: `favorites`,
  initialState: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
  reducers: {
    add(state, action) {
      state?.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
