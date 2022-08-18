import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "../pages/allcourses/AllCourses";
import MyCourses from "../pages/mycourses/MyCourses";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import Footer from "../components/footer/Footer";
import Error from "../pages/error/Error";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
