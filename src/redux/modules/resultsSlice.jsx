import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../res/contents/instance";

const initialState = {
  isLoading: false,
  error: "",
};

export const getResults = createAsyncThunk(
  "getResults",
  async (payload, thunAPI) => {
    // 성공
    try {
      const response = await instance.get(
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
  initialState,
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
