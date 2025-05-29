import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '~/api/apiService';
import toast from 'react-hot-toast';

const handleFetchError = error => {
  toast.error('Failed to fetch data.');
  return error.response?.data || error.message;
};

export const fetchData = createAsyncThunk(
  'data/fetchAll',
  async (_, { getState, rejectWithValue }) => {
    const { campers } = getState().data;
    if (campers.length > 0) return [];

    try {
      const data = await fetchApi.getData();
      toast.success(
        `🚐 ${data.items.length} camper${
          data.items.length > 1 ? 's' : ''
        } available`
      );
      return data.items;
    } catch (error) {
      return rejectWithValue(handleFetchError(error));
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  'data/fetchCamperDetails',
  async (camperId, { rejectWithValue }) => {
    try {
      const camperDetails = await fetchApi.getCamperById(camperId);
      if (!camperDetails) throw new Error('Camper details not found');
      return camperDetails;
    } catch (error) {
      return rejectWithValue(handleFetchError(error));
    }
  }
);

const initialState = {
  campers: [],
  selectedCamper: null,
  isLoading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    clearSelectedCamper: state => {
      state.selectedCamper = null;
    },
  },
  extraReducers: builder => {
    const handlePending = state => {
      state.isLoading = true;
      state.error = null;
    };

    const handleFulfilled = (state, action, key) => {
      state[key] = action.payload;
      state.isLoading = false;
    };

    const handleRejected = (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'An error occurred';
    };

    builder
      .addCase(fetchData.pending, handlePending)
      .addCase(fetchData.fulfilled, (state, action) =>
        handleFulfilled(state, action, 'campers')
      )
      .addCase(fetchData.rejected, handleRejected)
      .addCase(fetchCamperDetails.pending, handlePending)
      .addCase(fetchCamperDetails.fulfilled, (state, action) =>
        handleFulfilled(state, action, 'selectedCamper')
      )
      .addCase(fetchCamperDetails.rejected, handleRejected);
  },
});

export const { clearSelectedCamper } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
