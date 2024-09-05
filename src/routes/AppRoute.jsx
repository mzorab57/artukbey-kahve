import React from "react";
import { Route, Routes } from "react-router-dom";

import Hero from "../pages/Hero";
import About from "../pages/About";
import Services from "../pages/Services";
import Menu from "../pages/Menu";
import Choose from "../pages/Choose";
import Carousel from "../pages/Carousel";
import Numbers from "../pages/Numbers";
import Booking from "../pages/Booking";
import FeedBack from "../pages/FeedBack";
import ServicesSection from "../pages/ServicesSection";
import AllMenu from "../pages/AllMenu";

const AppRoutes = ({ setMenuOpen }) => {
  return (
    <>
      <Routes>
        <Route
          index
          path="/"
          element={
            <>
              <Hero setMenuOpen={setMenuOpen} />
              <About />
              <Services />
              <Menu />
              <Choose />
              <Carousel />
              <FeedBack />
              <Numbers />
              <Booking />
            </>
          }
        />
        <Route path="/services" element={<ServicesSection setMenuOpen={setMenuOpen} />} />
        <Route path="/menu" element={<AllMenu setMenuOpen={setMenuOpen} />} />
        <Route path="/menu/:category" element={<AllMenu />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
