import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer.jsx';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Import local storage for persistence

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'], // Only persist the 'favorites' slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor to manage the persistence of the store
export const persistor = persistStore(store);
