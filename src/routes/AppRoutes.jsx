import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../components/auth/SignIn";
import { MainPage } from "../pages/MainPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
};
