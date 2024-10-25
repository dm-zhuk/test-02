import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './dataSlice';
import { favoritesReducer } from './favoritesSlice';

export const rootReducer = combineReducers({
  data: dataReducer,
  favorites: favoritesReducer,
});
