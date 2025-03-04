import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "../api//apiService";
import toast from "react-hot-toast";

export const fetchData = createAsyncThunk(
  "data/fetchAll",
  async (_, { getState, rejectWithValue }) => {
    const { campers } = getState().data;
    if (campers.length > 0) return [];

    try {
      const data = await fetchApi.getData();
      toast.success(`🚐 ${data.items.length} camper${data.items.length > 1 ? "s" : ""} available`);
      return data.items;
    } catch {
      toast.error("Failed to fetch campers data.");
      return rejectWithValue("Failed to fetch campers data.");
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  "data/fetchCamperDetails",
  async (camperId, { rejectWithValue }) => {
    try {
      const camperDetails = await fetchApi.getCamperById(camperId);
      if (!camperDetails) throw new Error("Camper details not found");
      return camperDetails;
    } catch (error) {
      toast.error("Failed to fetch camper details.");
      return rejectWithValue(error.response?.data || error.message);
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
  name: "data",
  initialState,
  reducers: {
    clearSelectedCamper: (state) => {
      state.selectedCamper = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
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
      });
  },
});

export const { clearSelectedCamper } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;