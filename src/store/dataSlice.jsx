import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { fetchApi } from "../api/apiService";

// Thunk to fetch all campers
export const fetchData = createAsyncThunk(
  "fetchAll",
  async (_, { getState }) => {
    const state = getState();
    if (state.data.campers.length === 0) {
      try {
        const data = await fetchApi.getData();
        const matchesCount = data.items.length;
        toast.success(
          `🚐 ${matchesCount} match${matchesCount > 1 ? "es" : ""} retrieved`
        );
        return data;
      } catch (error) {
        toast.error("Failed to fetch campers data.");
        throw error;
      }
    }
    return [];
  }
);

export const fetchCamperDetails = createAsyncThunk(
  "fetchCamperDetails",
  async (camperId, { rejectWithValue }) => {
    try {
      const camperDetails = await fetchApi.getCamperById(camperId);
      if (!camperDetails) {
        throw new Error("Camper details not found");
      }
      return camperDetails;
    } catch (error) {
      toast.error("Failed to fetch camper details.");
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};
const handleFulfilled = (state) => {
  state.isLoading = false;
};

const dataSlice = createSlice({
  name: "data",
  initialState: {
    campers: [],
    selectedCamper: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    clearSelectedCamper: (state) => {
      state.selectedCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.campers = action.payload.items;
      })
      .addCase(fetchCamperDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selectedCamper = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.error = action.payload || "Failed to load camper details";
        state.isLoading = false;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const { clearSelectedCamper } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
