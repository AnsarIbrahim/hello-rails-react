import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk("fetch/greeting", async () => {
  const response = await axios.get("http://127.0.0.1:3000/api/greetings");
  return response.data;
});

const greetingSlice = createSlice({
  name: "greetings",
  initialState: {
    greeting: "",
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload.message;
        state.loading = false;
      })

      .addCase(fetchGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingSlice.reducer;
