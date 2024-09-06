import React, { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    // Change the language using i18n
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
    
    // Set the direction based on the selected language
    if (lng === "ar" || lng === "ku") {
      document.body.dir = "rtl"; // Set to RTL for Arabic and Kurdish
    } else {
      document.body.dir = "ltr"; // Set to LTR for other languages (like English)
    }

    // Close the dropdown after selection
    setIsOpen(false);
  };

  useEffect(() => {
    // On component mount, check if there's a saved language in localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to 'en'
    changeLanguage(savedLanguage); // Apply the saved language or default
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className={`relative hidden lg:block`}>
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
        className={`fixed top-16 right-3 mt-14 py-2 w-28 bg-white border-2 border-primary rounded-lg shadow-xl text-black z-50 transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
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
  );
};

export default LanguageSwitcher;
