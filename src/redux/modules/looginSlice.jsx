import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  password: "",
};

const loginSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default loginSlice;
