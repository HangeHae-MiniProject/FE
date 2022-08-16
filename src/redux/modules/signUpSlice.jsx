import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
  "signup",
  async (payload) => {
    const responsData = await axios.post(
      "http://nodeapi.myspaceti.me:8002/api/signup",
      payload
    );
    return responsData.message;
  }
);

const signUpSlice = createSlice({
  name: "data",
  initialState: {
    userid: "",
    nickname: "",
    password: "",
    confirm: "",
  },
  reducers: {
    ADD_DATA: (state, { payload }) => {
      console.log(state, payload)
      return { ...state, payload }
    }
  }
})

export default signUpSlice;