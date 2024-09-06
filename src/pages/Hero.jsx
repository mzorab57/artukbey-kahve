import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import bg6 from "../assets/images/bg6.jpg";
import nav from "../assets/images/nav.png";
import nav2 from "../assets/images/nav2.png";
import i18n from "../i18n";  // Import your i18n instance

const Hero = ({ setMenuOpen }) => {
  const { t } = useTranslation();
  const [color, setColor] = useState(false);
  const [paddingTop, setPaddingTop] = useState('');

  // Detect RTL or LTR , away refresh krd swiper image kan pshan bat bo ar,ku
  const isRTL = i18n.language === 'ar' || i18n.language === 'ku';

  const changeHeaderColor = () => {
    if (window.scrollY >= 5) {
      setColor(true);
      setPaddingTop('pt-[calc(1.5rem+1px)]');
    } else {
      setPaddingTop('pt-[calc(0rem+0px)]');
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeHeaderColor);
    return () => {
      window.removeEventListener("scroll", changeHeaderColor);
    };
  }, []);

  const renderSlide = (backgroundImage, heading, subheading) => (
    <SwiperSlide className="swiper-slide">
      <div className="kf-started-item relative h-screen flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white mb-32 max-w-[1300px]">
          <div className="description px-5">
            <div className="subtitles text-sm md:text-lg font-semibold text-gray-300 mb-4 tracking-wider uppercase">
              ---- {t("welcome")}
            </div>
            <h2 className="name md:text-7xl lg:text-9xl text-5xl font-bebas mb-6 leading-tight">
              {t(heading)} <br />
              {t(subheading)}
            </h2>
            <div className="kf-bts space-x-4 px-3">
              <Link
                to="/"
                className="kf-btn bg-[#b89272] text-white text-sm px-3 py-2 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
              >
                <span>{t("explore_more")}</span>
              </Link>
              <Link
                to="/"
                className="kf-btn bg-gray-900 text-white text-sm px-3 py-2 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
              >
                <span>{t("get_delivery")}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <section
      name="hero"
      onMouseOut={() => setMenuOpen(false)}
      className="section kf-started-slider"
    >
      <Swiper
        key={i18n.language} // Re-initialize Swiper when language changes
        className={`swiper-container transition-all h-screen lg:h-[795px] duration-200 ease-in-out ${
          color
            ? `${paddingTop} transition-all duration-1000`
            : 'transition-all duration-1000'
        }`}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        // Enable RTL mode when the language is Arabic or Kurdish, katek refresh bkai swiperka dw bara image kan pshan aya agar ama nkai la katy gorni bo ar,ku swiper image pshan nada
        dir={isRTL ? 'rtl' : 'ltr'} // This ensures Swiper works in RTL mode
      >
        {renderSlide(bg2, "slide1_heading", "slide1_subheading")}
        {renderSlide(bg1, "slide2_heading", "slide2_subheading")}
        {renderSlide(bg3, "slide3_heading", "slide3_subheading")}
        {renderSlide(bg4, "slide4_heading", "slide4_subheading")}
        {renderSlide(bg6, "slide5_heading", "slide5_subheading")}

        <div className="custom-swiper-button-prev absolute top-[45%] transform -translate-y-1/2 left-0 z-20">
          <img
            src={nav}
            alt="Previous"
            className="lg:w-12 lg:h-28 w-7 h-14 hover:scale-110 transform transition-all duration-300 ease-in-out hover:opacity-0"
          />
          <img
            src={nav2}
            alt="Previous Hover"
            className="lg:w-12 lg:h-28 w-7 h-14 hover:scale-110 transform transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 absolute top-0"
          />
        </div>
        <div className="custom-swiper-button-next absolute top-[45%] transform -translate-y-1/2 right-0 z-20">
          <img
            src={nav}
            alt="Next"
            className="lg:w-12 lg:h-28 w-7 h-14 rotate-180 hover:scale-110 transform transition-all duration-300 ease-in-out hover:opacity-0"
          />
          <img
            src={nav2}
            alt="Next Hover"
            className="lg:w-12 lg:h-28 w-7 h-14 rotate-180 hover:scale-110 transform transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 absolute top-0"
          />
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
