import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"; // make sure this exists

const MyAppointments = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default MyAppointments;
