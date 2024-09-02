import React from 'react';
import chooseImage from '../assets/images/barista-making-cup-coffee.jpg';
import parallaxIcon1 from '../assets/images/parallax_icon1.png';
import parallaxIcon2 from '../assets/images/parallax_icon2.png';
import parallaxIcon3 from '../assets/images/parallax_icon3.png';
import chooseIcon1 from '../assets/images/choose_icon1.png';
import chooseIcon2 from '../assets/images/choose_icon2.png';


const Choose = () => {
  return (
    <section className="relative py-32 px-5 bg-black  text-white overflow-hidden ">
      <div className="container mx-auto flex flex-wrap justify-center  items-center overflow-hidden max-w-[1100px]">
        {/* Parallax Icons */}
        <div className="hidden xl:block absolute left-20 top-20 size-48 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${parallaxIcon1})` }}></div>
        <div className="hidden xl:block absolute right-20 top-20 size-48 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${parallaxIcon2})` }}></div>
        <div className="hidden xl:block absolute right-32 bottom-20 size-48 bg-no-repeat bg-contain" style={{ backgroundImage: `url(${parallaxIcon3})` }}></div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img src={chooseImage} alt="Why Choose Us" className=" shadow-lg w-full h-[500px] lg:size-[600px] object-cover" />
          {/* <video
            autoPlay
            loop
            muted
             playsInline
            className="shadow-lg w-full h-[500px] lg:size-[600px] object-cover"
          >
            <source src={web} type="video/mp4" />
          </video> */}
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="mb-6">
            <h4 className="text-yellow-500 uppercase">Why Choose Us</h4>
            <h2 className="text-4xl font-bold">
              New London Coffee Founded For Extraordinary Test
            </h2>
          </div>
          <p className="mb-6">
            Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis.
          </p>

          {/* Features List */}
          <ul className="space-y-4">
            <li className="flex items-center">
              <img src={chooseIcon1} alt="Natural Coffee Beans" className="w-12 h-12 mr-4" />
              <div>
                <h5 className="text-xl font-bold">Natural Coffee Beans</h5>
                <p className="text-gray-400">
                  Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <img src={chooseIcon2} alt="100% ISO Certification" className="w-12 h-12 mr-4" />
              <div>
                <h5 className="text-xl font-bold">100% ISO Certification</h5>
                <p className="text-gray-400">
                  Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque.
                </p>
              </div>
            </li>
          </ul>

          {/* Explore More Button */}
          <a href="about" className="inline-block mt-8 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Explore More <i className="fas fa-chevron-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Choose;
