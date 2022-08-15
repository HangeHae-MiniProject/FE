import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "../modules/signUpSlice";
import resultsSlice from "../modules/resultsSlice";

const store = configureStore({
  reducer: {
    sign: signUpSlice.reducer,
    result: resultsSlice.reducer,
  },
  // 배포 환경일때, devTools가 false가 됩니다.
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
