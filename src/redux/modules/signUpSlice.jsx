import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Action } from "history";

// signUp 값을 보내 준 후 responsData로 값을 반아온다.
export const signUpData = createAsyncThunk(
  "signup",
  async (payload) => {
    const responsData = await axios.post(
      "http://nodeapi.myspaceti.me:8002/api/signup",
      payload
    );
    console.log(payload)
    return responsData.data
  }
);

// 리턴 받은 값을 전역 스테이트에 세팅
const signUpSlice = createSlice({
  name: "data",
  initialState: {
    message: "",
    isLoading: false
  },
  reducers: {

  },

  extraReducers: {
    [signUpData.pending]: (state) => {
      state.isLoading = true
    },
    [signUpData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.message;
      return state;
    },
    [signUpData.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export default signUpSlice;