import React from "react";
import chooseImage from "../assets/images/barista-making-cup-coffee.jpg";
import parallaxIcon1 from "../assets/images/parallax_icon1.png";
import parallaxIcon2 from "../assets/images/parallax_icon2.png";
import parallaxIcon3 from "../assets/images/parallax_icon3.png";
import chooseIcon1 from "../assets/images/choose_icon1.png";
import chooseIcon2 from "../assets/images/choose_icon2.png";

const Choose = () => {
  return (
    <section className="relative py-32 px-5 bg-black text-white overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-center items-center max-w-[1100px]">
        
        {/* Parallax Icons */}
        <div
          className="hidden xl:block absolute left-20 top-20 size-48 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${parallaxIcon1})` }}
        ></div>
        <div
          className="hidden xl:block absolute right-20 top-20 size-48 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${parallaxIcon2})` }}
        ></div>
        <div
          className="hidden xl:block absolute right-32 bottom-20 size-48 bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${parallaxIcon3})` }}
        ></div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={chooseImage}
            alt="Why Choose Us"
            className="shadow-lg w-full h-[500px] lg:h-[600px] object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 lg:pl-10">
          <div className="mb-6">
            <h4 className="text-primary uppercase">Why Choose Us</h4>
            <h2 className="text-4xl font-bold">
              New Artukbey Coffee Founded For Extraordinary Taste
            </h2>
          </div>
          <p className="mb-6">
            But from where all this arises, born from error, by the will of
            pleasure accusing pain and praising pain, I shall open the whole
            matter and explain the very things that the inventor of truth and
            almost an architect of blessed life says.
          </p>

          {/* Features List */}
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                src={chooseIcon1}
                alt="Natural Coffee Beans"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h5 className="text-xl font-bold">Natural Coffee Beans</h5>
                <p className="text-gray-400">
                  But from where all this arises, born from error, with accusatory pleasure and pain.
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <img
                src={chooseIcon2}
                alt="100% ISO Certification"
                className="w-12 h-12 mr-4"
              />
              <div>
                <h5 className="text-xl font-bold">100% ISO Certification</h5>
                <p className="text-gray-400">
                  But from where all this arises, born from error, with accusatory pleasure and pain.
                </p>
              </div>
            </li>
          </ul>

          {/* Explore More Button */}
          <a
            // href="about"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Explore More 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Choose;
