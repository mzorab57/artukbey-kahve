import React, { useEffect, useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const MobileMenu = ({ isOpenMenu, setOpenMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
     // Set the direction based on the selected language
     if (lng === "ar" || lng === "ku") {
      document.body.dir = "rtl"; // Set to RTL for Arabic and Kurdish
    } else {
      document.body.dir = "ltr"; // Set to LTR for other languages (like English)
    }
    setIsOpen(false); // Close the dropdown after selection
  };
  
  useEffect(() => {
    // On component mount, check if there's a saved language in localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to 'en'
    changeLanguage(savedLanguage); // Apply the saved language or default
  }, []); // Empty dependency array ensures this runs only once on mount

  // home
  const handleHomeClick = () => {
    setOpenMenu(!isOpenMenu);

    if (path !== "/") {
      navigate("/");
      scroller.scrollTo("hero", {
        smooth: true,
        offset: -200,
        duration: 500,
      });
    } else {
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
      navigate("/");
      scroller.scrollTo("about", {
        smooth: true,
        offset: 40,
        duration: 500,
      });
    } else {
      scroller.scrollTo("about", {
        smooth: true,
        offset: 40,
        duration: 500,
      });
    }
  };

  // contact Handle
  const handleContactClick = () => {
    if (path !== "/") {
      setOpenMenu(!isOpenMenu);
      navigate("/");
      scroller.scrollTo("contacts", {
        smooth: true,
        offset: -40,
        duration: 500,
      });
    } else {
      setOpenMenu(!isOpenMenu);
      scroller.scrollTo("contacts", {
        smooth: true,
        offset: -90,
        duration: 500,
      });
    }
  };

  return (
    <header className="lg:hidden fixed top-0 left-0 w-full h-14 text-white z-50">
      <div className="container flex justify-end p-4">
        <Hamburger
          toggled={isOpenMenu}
          toggle={setOpenMenu}
          size={28}
          duration={0.3}
          rounded
        />
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
            onClick={handleHomeClick}
            className="text-2xl hover:text-primary"
          >
            {t("home")}
          </div>
          <div onClick={handleAboutClick} className="text-2xl hover:text-primary">
            {t("about")}
          </div>
          <a
            href="menu"
            onClick={() => setOpenMenu(!isOpenMenu)}
            className="text-2xl hover:text-primary"
          >
            {t("menu")}
          </a>
          <a
            href="services"
            onClick={() => setOpenMenu(!isOpenMenu)}
            className="text-2xl hover:text-primary"
          >
            {t("services")}
          </a>
          <div onClick={handleContactClick} className="text-2xl hover:text-primary">
            {t("contacts")}
          </div>

          {/* language mobile menu */}
          <div className={`relative text-center block lg:hidden`}>
            <div
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen); // Toggle dropdown visibility
              }}
              className={`cursor-pointer py-2 px-4 rounded-lg ${
                isOpen ? "text-primary" : "text-white"
              } hover:text-primary`}
            >
              <GrLanguage size={25} className="mx-10" />
            {/* Fixed Language Dropdown with Smooth Transition */}
            <div
              className={`  text-center mt-2 py-2 w-28 bg-white border-2 border-primary rounded-lg shadow-xl text-black z-50 transform transition-all duration-500 ease-in-out ${
                isOpen
                  ? "opacity-100 translate-y-0 "
                  : "opacity-0 translate-y-full pointer-events-none"
              }`}
            >
              <div
                className="block px-4  py-2 text-sm hover:bg-primary/30 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage("en");
                }}
              >
                English
              </div>
              <div
                className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage("ar");
                }}
              >
                Arabic
              </div>
              <div
                className="block px-4 py-2 text-sm hover:bg-primary/30 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  changeLanguage("ku");
                }}
              >
                Kurdish
              </div>
            </div>
            </div>

          </div>
        </nav>
      </div>
      </div>

    </header>
  );
};

export default MobileMenu;
