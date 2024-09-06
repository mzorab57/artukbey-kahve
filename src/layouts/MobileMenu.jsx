import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import {  scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";




const MobileMenu = ({isOpenMenu,setOpenMenu}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const { i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); // Close the dropdown after selection
  };


  // home
  const handleHomeClick = () => {
    setOpenMenu(!isOpenMenu);

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
    setOpenMenu(!isOpenMenu);
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
     setOpenMenu(!isOpenMenu)
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
setOpenMenu(!isOpenMenu)
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
          toggled={isOpenMenu}
          toggle={setOpenMenu}
          size={28}
          duration={0.3}
          rounded
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 inset-0 bg-black transform ${
          isOpenMenu ? "translate-y-0 top-20" : "translate-y-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpenMenu(!isOpenMenu)}
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
            onClick={() => setOpenMenu(!isOpenMenu)}
            className="text-2xl hover:text-primary"
          >
            Menu
          </a>
          <a
            href="services"
            onClick={() => setOpenMenu(!isOpenMenu)}
            className="text-2xl hover:text-primary"
          >
            Services
          </a>
        
          <div
          
          onClick={ handleContactClick}
          className="text-2xl hover:text-primary"
        >
          Contacs
        </div>
         
      {/* language mobile menu */}
      <div className={`relative  block  lg:hidden`}>
      {/* Language Icon */}
      <div
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen); // Toggle dropdown visibility
        }}
        className={`cursor-pointer py-2 px-4 rounded-lg ${
          isOpen ? "text-primary" : "text-white"
        } hover:text-primary`}
      >
        <GrLanguage size={25} />
      </div>

      {/* Fixed Language Dropdown with Smooth Transition */}
      <div
  className={`fixed bottom-[13%] right-[43%] mt-14 py-2 w-28 bg-white border-2 border-primary rounded-lg shadow-xl text-black z-50 transform transition-all duration-500 ease-in-out ${
    isOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-full pointer-events-none"
  }`}
>
        {/* English */}
        <div
          className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("en"); // English
          }}
        >
          English
        </div>
        {/* Arabic */}
        <div
          className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("ar"); // Arabic
          }}
        >
          Arabic
        </div>
        {/* Kurdish */}
        <div
          className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            changeLanguage("ku"); // Kurdish
          }}
        >
          Kurdish
        </div>
      </div>
    </div>

        </nav>
      </div>
    </header>
  );
};

export default MobileMenu;
