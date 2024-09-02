import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";

import servicesSectionImage from "../assets/images/services-section.jpg";
import menuBg from "../assets/images/menu-Bg.jpg";

const AllMenu = () => {
  const [color, setColor] = useState(false);
  const [p, setP] = useState("");

  const location = useLocation();
  const path = location.pathname;

  const changeHeaderColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
      setP("pt-[calc(1.5rem+1px)]");
    } else {
      setP("pt-[calc(0rem+0px)]");
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <section
      className={`text-white  ${
        color
          ? `${p}  transition-all duration-1000 ease-in-out`
          : " transition-all duration-1000 ease-in-out"
      }`}
    >
      {/* Hero Section */}
      <div
        className={` relative w-full bg-black h-[600px] flex items-center justify-start`}
      >
        <img
          src={menuBg}
          alt="menu"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-white text-end w-[700px] p-4 md:p-10">
          <h1 className="text-7xl font-semibold">All Menu</h1>
        </div>
      </div>

      <Menu />
    </section>
  );
};

export default AllMenu;
