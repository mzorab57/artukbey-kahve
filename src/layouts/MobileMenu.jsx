import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import {  scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";



const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  // home
  const handleHomeClick = () => {
    setOpen(!isOpen);

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

  // about
  const handleAboutClick = () => {
    setOpen(!isOpen);
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

  // contact Handel
  const handleContactClick = () => {
   
    if (path !== "/") { 
     setOpen(!isOpen)
      // If not on the root page, navigate back to the root
      navigate("/");
      // Scroll to the 'contacts' section after navigating
      scroller.scrollTo("contacts", {
        smooth: true,
        offset: -40, // Adjust the offset as needed
        duration: 500,
      });
      
    } else {
      // If already on the root page, directly scroll to the 'contacts' section
setOpen(!isOpen)
      scroller.scrollTo("contacts", {
        smooth: true,
        offset: -90,
        duration: 500,
      });
      
     
    }
  };

  return (
    <header className="lg:hidden fixed top-0 left-0 w-full h-14  text-white z-50">
      <div className="container flex justify-end p-4">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={28}
          duration={0.3}
          rounded
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 inset-0 bg-black transform ${
          isOpen ? "translate-y-0 top-20" : "translate-y-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(!isOpen)}
            className="text-3xl"
          ></button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full space-y-4">
          <div
           
            onClick={ handleHomeClick}
            className="text-2xl hover:text-primary"
          >
            Home
          </div>
          <div
          
            onClick={ handleAboutClick}
            className="text-2xl hover:text-primary"
          >
            About
          </div>
          <a
            href="menu"
            onClick={() => setOpen(!isOpen)}
            className="text-2xl hover:text-primary"
          >
            Menu
          </a>
        
          <div
          
          onClick={ handleContactClick}
          className="text-2xl hover:text-primary"
        >
          Contacs
        </div>
          
          {/* <a
            href="reservation"
            onClick={() => setOpen(!isOpen)}
            className="text-2xl hover:text-primary"
          >
            Book a Table
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default MobileMenu;
