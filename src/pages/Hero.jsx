import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import nav from "../assets/images/nav.png";
import nav2 from "../assets/images/nav2.png";



const Hero = ({setMenuOpen}) => {

  const [color, setColor] = useState(false);
  const [p, setP] = useState('');
  
  const changeHeaderColor = () => {
    if ( window.scrollY >=  5) {
       setColor(true)  
       setP('pt-[calc(1.5rem+1px)]')
    }
    else{
      setP('pt-[calc(0rem+0px)]')
    }
    
  };

  window.addEventListener("scroll", changeHeaderColor);

  

  return (
    <section onMouseOut={()=> setMenuOpen(false)} className={`section kf-started-slider   `}>
     
     <Swiper
  className={` swiper-container transition-all h-[795px]  duration-200 ease-in-out ${color ? `${p}  transition-all duration-1000 ease-in-out`  : ' transition-all duration-1000 ease-in-out'}`}
  modules={[Navigation, Autoplay]}
  loop={true}
  autoplay={{ delay: 5000 }}
  navigation={{
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  }}
>
  <SwiperSlide className="swiper-slide ">
    <div className="kf-started-item relative h-screen flex items-center justify-start">
      <div
        className="absolute inset-0 bg-cover bg-center  "
        style={{ backgroundImage: `url(${bg1})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white mb-32  max-w-[1300px]">
        <div className="description text-left px-5">
          <div className="subtitles text-sm md:text-lg font-semibold text-gray-300 mb-4 tracking-wider  uppercase">
           ---- Welcome to the Kaffen
          </div>
          <h2 className="name md:text-7xl lg:text-9xl text-5xl font-semibold texi mb-6  leading-tight">
            The Paris <br />
            Coffe House
          </h2>
          <div className="kf-bts space-x-4 px-3">
            <Link
              to="/menu-restaurant"
              className="kf-btn bg-yellow-500 text-black text-sm px-4 py-3 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
            >
              <span>Explore More</span>
              <i className="fas fa-chevron-right ml-2" />
            </Link>
            <Link
              to="/reservation"
              className="kf-btn bg-gray-900 text-white text-sm px-4 py-3 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
            >
              <span>Get Delivery</span>
              <i className="fas fa-chevron-right ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide className="swiper-slide ">
    <div className="kf-started-item relative h-screen flex items-center justify-start">
      <div
        className="absolute inset-0 bg-cover bg-center  "
        style={{ backgroundImage: `url(${bg2})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white  mb-32  max-w-[1300px]">
        <div className="description text-left px-5">
          <div className="subtitles text-sm md:text-lg font-semibold text-gray-300 mb-4 tracking-wider  uppercase">
           ---- Welcome to the Kaffen
          </div>
          <h2 className="name md:text-7xl lg:text-9xl text-5xl font-semibold texi mb-6  leading-tight">
            The Paris <br />
            Coffe House
          </h2>
          <div className="kf-bts space-x-4 px-3">
            <Link
              to="/menu-restaurant"
              className="kf-btn bg-yellow-500 text-black text-sm px-4 py-3 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
            >
              <span>Explore More</span>
              <i className="fas fa-chevron-right ml-2" />
            </Link>
            <Link
              to="/reservation"
              className="kf-btn bg-gray-900 text-white text-sm px-4 py-3 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
            >
              <span>Get Delivery</span>
              <i className="fas fa-chevron-right ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

  <SwiperSlide className="swiper-slide ">
    <div className="kf-started-item relative h-screen flex items-center justify-start">
      <div
        className="absolute inset-0 bg-cover bg-center  "
        style={{ backgroundImage: `url(${bg3})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-white  mb-32  max-w-[1300px]">
        <div className="description text-left px-5">
          <div className="subtitles text-sm md:text-lg font-semibold text-gray-300 mb-4 tracking-wider  uppercase">
           ---- Welcome to the Kaffen
          </div>
          <h2 className="name md:text-7xl lg:text-9xl text-5xl font-semibold texi mb-6  leading-tight">
            The Paris <br />
            Coffe House
          </h2>
          <div className="kf-bts space-x-4 px-3">
            <Link
              to="/menu-restaurant"
              className="kf-btn bg-yellow-500 text-black text-sm px-4 py-3 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
            >
              <span>Explore More</span>
              <i className="fas fa-chevron-right ml-2" />
            </Link>
            <Link
              to="/reservation"
              className="kf-btn bg-gray-900 text-white text-sm px-4 py-3 md:px-7 md:py-3 rounded inline-flex items-center md:text-lg font-semibold"
            >
              <span>Get Delivery</span>
              <i className="fas fa-chevron-right ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

  {/* Custom Navigation Buttons */}
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
