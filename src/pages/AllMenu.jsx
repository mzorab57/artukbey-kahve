import React, { useState } from "react";
import Menu from "./Menu";

import menuBg from "../assets/images/menu-Bg.jpg";

const AllMenu = ({setMenuOpen}) => {
  const [color, setColor] = useState(false);
  const [p, setP] = useState("");

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
    onMouseOut={()=> setMenuOpen(false)}
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
        <div className="relative z-10 text-white md:text-center w-[700px] p-4 md:p-10">
          <h1 className="md:text-7xl text-4xl font-semibold">All Menu</h1>
        </div>
      </div>

      <Menu />
    </section>
  );
};

export default AllMenu;
