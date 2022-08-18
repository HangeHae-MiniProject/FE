import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../res/contents/instance";

const initialState = {
  isLoading: false,
  error: "",
};

export const getUserResults = createAsyncThunk(
  "getUserResults",
  async (payload, thunAPI) => {
    // 성공
    try {
      const response = await instance.get("/mypage/myanswers");
      console.log(response);
      return thunAPI.fulfillWithValue(response.data);
      // 실패
    } catch (error) {
      return thunAPI.rejectWithValue(error);
    }
  }
);
const userResultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserResults.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserResults.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.results = action.payload;
    },
    [getUserResults.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userResultsSlice;
