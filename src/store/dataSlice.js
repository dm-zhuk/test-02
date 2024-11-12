import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { fetchApi } from "../api/apiService";

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
  initialState: { campers: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.campers = action.payload.items;
      })
      .addMatcher((action) => action.type.endsWith("/pending"), handlePending)
      .addMatcher((action) => action.type.endsWith("/rejected"), handleRejected)
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        handleFulfilled
      );
  },
});

export const dataReducer = dataSlice.reducer;
