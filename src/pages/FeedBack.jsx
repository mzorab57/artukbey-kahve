import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


import bg from "../assets/images/testimonials_bg2.jpeg";
import rev1 from "../assets/images/rev1.jpg";
import rev2 from "../assets/images/rev2.jpg";
import rev3 from "../assets/images/rev3.jpg";

const FeedBack = () => {
  return (
    <section
      className="relative lg:py-40 py-10 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container m-auto text-center  h-full px-5  ">
        {/* Titles */}
        <div className="mb-12">
          <h3 className="text-2xl text-yellow-500 mb-4">Customer Feedback</h3>
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
          {[ rev2, rev3, rev2, rev3,rev2, rev3, rev2, rev3].map((image, index) => (
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
                      className="fas fa-star text-yellow-500 mx-1"
                    />
                  ))}
                </div>
                <p className="text-lg italic mb-4">
                  Sed ut perspiciatis unde omnis natus error luptatem
                  accusantium doloremque  quae
                  abillo.
                </p>
                <h5 className="text-xl font-bold">
                  {index === 0 && "Frederick S. France"}
                  {index === 1 && "James M. London"}
                  {index === 2 && "Olivia D. New York"}{" "}
                  <em className="text-yellow-500">
                    {index === 0 && "Web Designer"}
                    {index === 1 && "Lawyer"}
                    {index === 2 && "Dentist"}
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
