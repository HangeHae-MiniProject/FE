import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwt_decode from "jwt-decode";

const initialState = {
  token: "",
  message: "",
  statusCode: 0,
};

//post 청크
export const sendLogin = createAsyncThunk(
  "loginSlice/sendLogin",
  async (payload) => {
    try {
      const responseData = await axios.post(
        "http://nodeapi.myspaceti.me:8002/api/login",
        payload
      );
      const token = responseData.data.token.split(" ")[1];
      localStorage.setItem("jwtToken", token);
      setAutorizationToken(token);
      return responseData.data;
    } catch {}
  }
);
// HttpRequest를 보낼 때 헤더에 포함시키기
export function setAutorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
const loginSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.tocken = action.payload;
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
      state.statusCode = payload.statusCode;
      state.message = payload.message;
    },
    [sendLogin.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default loginSlice;
export const { setCurrentUser } = loginSlice.actions;
