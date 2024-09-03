import React, { useState } from "react";
import artukbey_logo from "../assets/images/artukbey-logo.jpg";
import MobileMenu from "./MobileMenu";

const Navbar = ({menuOpen, setMenuOpen}) => {
  const [color, setColor] = useState(false);
  

  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  return (
    <div   className={`kf-navbar text-white bg-black flex justify-between lg:flex-col`}>
      {/* Top Bar */}
      <div
        className={`${
          color
            ? "opacity-0 translate-y-[-100%] duration-200 ease-in transition-all"
            : "opacity-100 translate-y-0 duration-200 ease-out transition-all"
        } hidden lg:flex justify-between items-center text-sm p-4 px-6 bg-black h-full w-full border-b border-gray-700`}
      >
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <i className="las la-clock text-yellow-500"></i>
            <span>OPENING HOURS : 08:00 AM - 09:00 PM</span>
          </span>
        </div>
        <div className="flex space-x-3">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="lab la-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="lab la-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="lab la-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="lab la-youtube"></i>
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <i className="las la-map-marker-alt text-yellow-500"></i>
          <span>LOCATION : 55 MAIN STREET, NEW YORK</span>
        </div>
      </div>

      {/* ama katek nava fixed abe wa aka ka ba xeray u raqi silde ka nacheta zheriawa */}
      {color ? <div className="h-20 bg-black/90  "></div> : null}

      {/* Main Navbar */}
      <div 
        className={`flex justify-between items-center py-4 h-20 bg-black w-full px-6 lg:px-10 ${
          color && "fixed top-0 py-4 ease-in transition-all z-30 bg-black"
        }`}
      >
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src={artukbey_logo}
              alt="artkbey Logo"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Navigation Menu - Hidden on Mobile */}
        <ul className={`hidden lg:flex space-x-8 font-semibold`}>
          <li onMouseMove={()=>{setMenuOpen(false)}}>
            <a href="/" className="hover:text-yellow-500">
              HOME
            </a>
          </li>

          <li onMouseMove={()=>{setMenuOpen(false)}}>
            <a href="about" className="hover:text-yellow-500">
              ABOUT
            </a>
          </li>

        {/* Menu  */}
          <li onMouseMove={()=>{setMenuOpen(false)}} className="group relative">
            <a href="/menu" className="hover:text-yellow-500">
              MENU
              <i className="las la-angle-down ml-1"></i>
            </a>
          
          </li>

          {/* page */}
          <li onMouseMove={()=>{setMenuOpen(true)}} className="">
            <a href="#" className="hover:text-yellow-500 ">
              PAGES
              <i className="las la-angle-down ml-1"></i>
            </a>
            {/* Dropdown for Pages */}
            <ul  className={`absolute z-50 font-normal bg-black text-white p-4 space-y-2 mt-8 w-40 duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}>
              <li onClick={()=> setMenuOpen(false)}>
                <a href="/services" className="hover:text-yellow-500">
                  Services
                </a>
              </li>

              <li onClick={()=> setMenuOpen(false)}>
                <a href="history" className="hover:text-yellow-500">
                  History
                </a>
              </li>
             
              <li onClick={()=> setMenuOpen(false)}>
                <a href="gallery" className="hover:text-yellow-500">
                  Gallery
                </a>
              </li>

              <li onClick={()=> setMenuOpen(false)}>
                <a href="faq" className="hover:text-yellow-500">
                  FAQ
                </a>
              </li>
            </ul> 
          </li>

{/* contact */}
          <li onMouseMove={()=>{setMenuOpen(false)}}>
            <a href="contacts" className="hover:text-yellow-500">
              CONTACTS
            </a>
          </li>

        </ul>

        {/* Book a Table Button */}
        <div className="hidden lg:block">
          <a
            href="reservation"
            className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600"
          >
            BOOK A TABLE
          </a>
        </div>
      </div>

      {/* Mobile Menu */}    
        <MobileMenu />

    </div>
  );
};

export default Navbar;
