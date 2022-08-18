import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../res/contents/instance";
import jwt_decode from "jwt-decode";
import axios from "axios";

const initialState = {
  isLoading: true,
  token: "",
  message: "",
  statusCode: 0,
  resultId: 0,
};

//post 청크
export const sendLogin = createAsyncThunk(
  "loginSlice/sendLogin",
  async (payload) => {
    try {
      const responseData = await instance.post("/login/withsave", payload);
      const token = responseData.data.token.split(" ")[1];
      localStorage.setItem("jwtToken", token);
      setAutorizationToken(token);
      return responseData.data;
    } catch {
      alert("등록된 회원 정보가 없습니다.");
      return;
    }
  }
);

export const sendMainLogin = createAsyncThunk(
  "loginSlice/sendMainLogin",
  async (payload) => {
    try {
      const responseData = await instance.post("/login", payload);
      const token = responseData.data.token.split(" ")[1];
      localStorage.setItem("jwtToken", token);
      setAutorizationToken(token);
      console.log(responseData.data);
      return responseData.data;
    } catch {
      alert("등록된 회원 정보가 없습니다.");
      return;
    }
  }
);
// HttpRequest를 보낼 때 헤더에 포함시키기
export function setAutorizationToken(token) {
  if (token) {
    instance.defaults.headers.common["token"] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common["token"];
  }
}
const loginSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.token = action.payload;
      state.resultId = action.resultId;
      state.message = action.message;
    },
  },
  extraReducers: {
    [sendLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [sendLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const token = payload.token.split(" ")[1];
      state.token = jwt_decode(token);
      state.resultId = payload.resultId;
      state.statusCode = payload.statusCode;
      state.message = payload.message;
    },
    // [sendLogin.rejected]: (state) => {
    //   state.isLoading = false;
    // },
    [sendMainLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [sendMainLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const token = payload.token.split(" ")[1];
      state.token = jwt_decode(token);
      state.resultId = payload.resultId;
      state.statusCode = payload.statusCode;
      state.message = payload.message;
    },
    // [sendLogin.rejected]: (state) => {
    //   state.isLoading = false;
    // },
  },
});

export default loginSlice;
//리듀스 액션 수출
export const { setCurrentUser } = loginSlice.actions;
