import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//결과값 초기화
const initialState = { resultId: 0 };

//등록청크
export const sendQue = createAsyncThunk(
  "questionSlice/sendQue",
  async (payload) => {
    const responsData = await axios.post(
      "http://nodeapi.myspaceti.me:8002/api/results/submit",
      payload
    );
    return responsData.data;
  }
);
//가져오기 청크

const questionSlice = createSlice({
  name: "result",
  initialState,
  reducers: {},
  extraReducers: {
    [sendQue.pending]: (state) => {
      state.isLoading = true;
    },
    [sendQue.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.resultId = payload.resultId;
    },
  },
});
export default questionSlice;
