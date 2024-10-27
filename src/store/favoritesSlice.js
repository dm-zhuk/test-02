import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorites(state, action) {
      const isExists = state.find(
        (element) => element._id === action.payload._id
      );
      if (!isExists) {
        state.push(action.payload);
      } else {
        return state.filter((element) => element._id !== action.payload._id);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
