import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "../components/allcourses/AllCourses";
import MyCourses from "../components/mycourses/MyCourses";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/mycourses" element={<MyCourses />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
