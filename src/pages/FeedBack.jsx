import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import bg from "../assets/images/testimonials_bg2.jpeg";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";


const FeedBack = () => {
  return (
    <section
      className="relative lg:py-40 py-10 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container m-auto text-center  h-full px-5  ">
        {/* Titles */}
        <div className="mb-12">
          <h3 className="text-2xl text-primary mb-4">Customer Feedback</h3>
          <h2 className="text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }} // Enable pagination
          
          breakpoints={{
            // when window width is >= 0px
            // 0: {
            //   slidesPerView: 1,
            // },
           
            500: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 2,
            },
            // when window width is >= 768px (md)
            1000: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          className="swiper-container max-w-[1200px]"
        >
          {[ p1,p2,p3,p4,p1,p2,p3,p4].map((image, index) => (
            <SwiperSlide key={index} className="text-center ">
              <div className="relative p-8 bg-black  bg-opacity-80     text-white">
                <img
                  src={image}
                  alt={`Client ${index + 1}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-primary mx-1"
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-4">
                But from where all this arises, every born error of pleasure, accusing pain and suffering, which from him.
                </p>
                <h5 className="text-xl font-bold">
                 Harun Ahmed <br/>
                  <em className="text-primary">
                  Web Designer
                  </em>
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeedBack;
