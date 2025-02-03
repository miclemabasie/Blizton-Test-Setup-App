import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLands = createAsyncThunk("lands/fetchLands", async () => {
  console.log("fetching lands...");
  const response = await axios.get(
    "https://48ec-102-244-41-17.ngrok-free.app/api/lands"
  );
  return response.data;
});

const landsSlice = createSlice({
  name: "lands",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLands.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default landsSlice.reducer;
