import React from "react";
import about from "../assets/images/about_img.webp";
import artukbey_logo from "../assets/images/artukbey-logo.png";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const About = () => {
  const { t } = useTranslation(); // Destructure the translation function

  return (
    <section name="about" className="bg-black py-12">
      <div className="container max-w-[1280px] mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/3 text-white">
          <div className="kf-titles mb-6">
            <div className="text-primary uppercase mb-2">
              {t("about_us")}
            </div>
            <h3 className="text-4xl font-bold mb-4">
              {t("about_title")}
            </h3>
          </div>
          <p className="text-gray-400 mb-6">
            {t("about_description")}
          </p>
          <div className="flex items-center bg-primary font-semibold rounded-lg p-4">
            <img
              src={artukbey_logo}
              alt="quote"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-white italic">
              {t("about_quote")}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-7/12 mt-8 lg:mt-0">
          <div className="relative">
            <img
              src={about}
              alt="about"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="/images/background-flower.png"
              alt="background decoration"
              className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
