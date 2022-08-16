import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userId: "",
  password: "",
};

//post 청크
export const sendLogin = createAsyncThunk(
  "loginSlice/sendLogin",
  async (payload) => {
    console.log(payload);
    const responseData = await axios.post(
      "http://nodeapi.myspaceti.me:8002/api/login",
      payload,
      { withCredentials: true }
    );
    console.log(axios.defaults.headers);
    console.log(responseData);
    return responseData.data;
  }
);

const loginSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [sendLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [sendLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userId = payload.userId;
      state.password = payload.password;
    },
    [sendLogin.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default loginSlice;
