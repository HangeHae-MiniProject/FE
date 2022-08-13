import { createSlice } from "@reduxjs/toolkit";

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
      console.log(state, payload, { ...state, payload })
      return { ...state, payload }
    }
    // 동일한 이름을 가진 이름을 체크하여 비밀번호를 내가 입력한 값으로 변경
  }
})

export default signUpSlice;