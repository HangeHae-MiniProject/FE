import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import JoinPage from "../pages/JoinPage";
import LoginPage from "../pages/LoginPage";
import QuePage from "../pages/QuePage";
import ResultPage from "../pages/ResultPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/question" element={<QuePage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default Router;
