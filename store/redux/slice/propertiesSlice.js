import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch properties from the API
export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    console.log("connecting");
    const response = await axios.get(
      "https://48ec-102-244-41-17.ngrok-free.app/api/properties"
    );
    console.log(response.data);
    return response.data;
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default propertiesSlice.reducer;
