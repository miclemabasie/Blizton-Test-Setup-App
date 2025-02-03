import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("cars/fetchCars", async () => {
  console.log("fetching cars...");
  const response = await axios.get(
    "https://48ec-102-244-41-17.ngrok-free.app/api/cars"
  );
  return response.data;
});

const CarsSlice = createSlice({
  name: "cars",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CarsSlice.reducer;
