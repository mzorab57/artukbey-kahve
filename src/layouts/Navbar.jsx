import React, { useState } from "react";
import {  scroller } from "react-scroll";
import artukbey_logo from "../assets/images/artukbey-logo.jpg";
import MobileMenu from "./MobileMenu";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [color, setColor] = useState(false);

  const changeHeaderColor = () => {
    window.scrollY >= 20 ? setColor(true) : setColor(false);
  };
  window.addEventListener("scroll", changeHeaderColor);

  const handleHomeClick = () => {
    if (path !== "/") {
      // If not on the root page, navigate back to root first
      navigate("/");
      // After navigating, scroll to the hero section
      scroller.scrollTo("hero", {
        smooth: true,
        offset: -200,
        duration: 500,
      });
    } else {
      // If already on the root page, simply scroll to the hero section
      scroller.scrollTo("hero", {
        smooth: true,
        offset: -200,
        duration: 500,
      });
    }
  };

  const handleAboutClick = () => {
    if (path !== "/") {
      // If not on the root page, navigate back to the root
      navigate("/");
      // Scroll to the 'about' section after navigating to the root
      scroller.scrollTo("about", {
        smooth: true,
        offset: 40,
        duration: 500,
      });
    } else {
      // If already on the root page, directly scroll to the 'about' section
      scroller.scrollTo("about", {
        smooth: true,
        offset: 40,
        duration: 500,
      });
    }
  };

  const handleContactClick = () => {
    if (path !== "/") {
      // If not on the root page, navigate back to the root
      navigate("/");
      // Scroll to the 'contacts' section after navigating
      scroller.scrollTo("contacts", {
        smooth: true,
        offset: 40, // Adjust the offset as needed
        duration: 500,
      });
    } else {
      // If already on the root page, directly scroll to the 'contacts' section
      scroller.scrollTo("contacts", {
        smooth: true,
        offset: 40,
        duration: 500,
      });
    }
  };

  return (
    <div
      className={`kf-navbar text-white bg-black flex justify-between lg:flex-col`}
    >
      {/* Top Bar */}
      <div
        className={`${
          color
            ? "opacity-0 translate-y-[-100%] duration-200 ease-in transition-all"
            : "opacity-100 translate-y-0 duration-200 ease-out transition-all"
        } hidden lg:flex justify-between items-center text-sm p-4 px-6 bg-black h-full w-full`}
      >
        <div className="flex items-center space-x-3">
          <span className="flex items-center space-x-1">
            <i className="las la-clock text-[#b89272]"></i>
            <span className="text-[#b89272]">OPENING HOURS </span> : 08:00 AM -
            12:00 PM
          </span>
        </div>
        {/*  icon */}
        <div className="flex space-x-3">
          <a
            href="https://www.facebook.com/share/jjrJrDHLD4kejhEL/?mibextid=qi2Omg"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://www.instagram.com/artukbey.suli?igsh=d2lld3BpZDVpdW5s"
            className="text-gray-400 hover:text-white"
          >
            <AiFillInstagram size={20} />
          </a>
        </div>

        <div className="flex items-center space-x-1">
          <i className="las la-map-marker-alt text-[#b89272]"></i>
          <span className="text-[#b89272]">LOCATION </span> : Rzgari street,
          next to Firdos Market, Sulaimaniyah
        </div>
      </div>

      {/* ama katek nava fixed abe wa aka ka ba xeray u raqi silde ka nacheta zheriawa */}
      {color ? <div className="h-20 bg-gray-950  "></div> : null}

      {/* Main Navbar */}
      <div
        className={`flex justify-between items-center py-4 h-20 bg-gray-950 w-full px-6 lg:px-10 ${
          color && "fixed top-0 py-4 ease-in transition-all z-30 bg-gray-950"
        }`}
      >
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src={artukbey_logo}
              alt="artkbey Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Navigation Menu - Hidden on Mobile */}
        <ul className={`hidden lg:flex space-x-8 font-semibold`}>
          <li
            onMouseMove={() => {
              setMenuOpen(false);
            }}
          >
            <div
              onClick={handleHomeClick}
              className="hover:text-[#b89272] cursor-pointer"
            >
              HOME
            </div>
          </li>

          <li
            onMouseMove={() => {
              setMenuOpen(false);
            }}
          >
            <div
              onClick={handleAboutClick}
              className="hover:text-[#b89272] cursor-pointer"
            >
              ABOUT
            </div>
          </li>

          {/* Menu  */}
          <li
            onMouseMove={() => {
              setMenuOpen(false);
            }}
            className="group relative"
          >
            <a href="/menu" className="hover:text-[#b89272]">
              MENU
              <i className="las la-angle-down ml-1"></i>
            </a>
          </li>

          {/* page */}
          <li
            onMouseMove={() => {
              setMenuOpen(true);
            }}
            className=""
          >
            <a href="#" className="hover:text-[#b89272] flex justify-center ">
              PAGES <MdKeyboardArrowDown size={25} />
              <i className="las la-angle-down ml-1"></i>
            </a>
            {/* Dropdown for Pages */}
            <ul
              className={`absolute z-50 font-normal bg-black text-white p-4 space-y-2 mt-2 w-40 duration-300 ease-in-out ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              <li onClick={() => setMenuOpen(false)}>
                <a href="/services" className="hover:text-[#b89272]">
                  Services
                </a>
              </li>

              {/* <li onClick={() => setMenuOpen(false)}>
                <a href="about" className="hover:text-[#b89272]">
                  History
                </a>
              </li> */}
              {/* 
              <li onClick={() => setMenuOpen(false)}>
                <a href="gallery" className="hover:text-[#b89272]">
                  Gallery
                </a>
              </li> */}

              {/* <li onClick={() => setMenuOpen(false)}>
                <a href="faq" className="hover:text-[#b89272]">
                  FAQ
                </a>
              </li> */}
            </ul>
          </li>

          {/* contact */}
          <li
            onMouseMove={() => {
              setMenuOpen(false);
            }}
          >
            <div
              onClick={handleContactClick}
              className="hover:text-[#b89272] cursor-pointer"
            >
              CONTACTS
            </div>
          </li>
        </ul>

        {/* Book a Table Button */}
        <div className="hidden lg:block">
          <a
            href="/"
            className="bg-primary text-white py-2 px-4 rounded-lg "
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
