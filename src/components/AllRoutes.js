import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../components/welcome";
import Sample from "./sample";
import Login from "./Login";

export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Sample />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
