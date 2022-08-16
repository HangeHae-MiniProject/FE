import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getResults = createAsyncThunk(
  "getResults",
  async (payload, thunAPI) => {
    // 성공
    try {
      const response = await axios.get(
        // payload는 Result.jsx에서 dispatch를 타고 넘어오는 param의 값
        `/results/${payload}`
      );
      return thunAPI.fulfillWithValue(response.data);
      // 실패
    } catch (error) {
      return thunAPI.rejectWithValue(error);
    }
  }
);

const resultsSlice = createSlice({
  name: "results",
  initialState: { isLoading: false, error: "" },
  reducers: {},
  extraReducers: {
    [getResults.pending]: (state) => {
      state.isLoading = true;
    },
    [getResults.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    },
    [getResults.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default resultsSlice;
