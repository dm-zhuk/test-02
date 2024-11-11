import { combineReducers } from "@reduxjs/toolkit";
import { favoritesReducer } from "./favoritesSlice";
import { dataReducer } from "./dataSlice";

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  data: dataReducer,
});
