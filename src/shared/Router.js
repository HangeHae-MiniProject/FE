import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import QuePage from "../pages/QuePage";
import ResultPage from "../pages/ResultPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/question" element={<QuePage />} />
      <Route path="/results/:resultId" element={<ResultPage />} />
    </Routes>
  );
};

export default Router;
