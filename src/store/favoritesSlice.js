import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (state, action) => {
      const cardId = action.payload;
      const isFavorite = state.includes(cardId);
      if (isFavorite) {
        return state.filter((id) => id !== cardId);
      } else {
        state.push(cardId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
