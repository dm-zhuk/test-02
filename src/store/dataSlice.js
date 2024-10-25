import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { fetchApi } from 'API/axios-service';

export const fetchData = createAsyncThunk('fetchAll', async () => {
  const data = await fetchApi.getData();
  toast.success(`Adverts retrieved successfully`);
  return data;
});

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const dataSlice = createSlice({
  name: 'data',
  initialState: { adverts: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.adverts = action.payload;
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const dataReducer = dataSlice.reducer;
