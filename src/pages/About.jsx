import React from "react";
import about from "../assets/images/about_img.webp";
import artukbey_logo from "../assets/images/artukbey-logo.png";

const About = () => {
  return (
    <section name="about" className="bg-black py-12  ">
      <div className="container max-w-[1280px]  mx-auto px-4 flex flex-wrap justify-between   items-center">
        {/* Text Section */}
        <div className="w-full  lg:w-1/3 text-white">
          <div className="kf-titles mb-6">
            <div className="text-primary uppercase mb-2">About Us</div>
            <h3 className="text-4xl font-bold mb-4">
              Organic &amp; Fresh Coffee <br />
              Provider Center
            </h3>
          </div>
          <p className="text-gray-400 mb-6">
            But from where all this comes, born of error, by the will of
            pleasure, it accuses the pleasure itself of condemning the pain. I
            shall open the whole matter, and explain the very things that the
            architect of life, blessed, says are almost true. For no one
            dislikes or avoids pleasure because it is pleasure, but because
            those who do not know how to pursue pleasure rationally encounter
            consequences that are painful
          </p>
          <div className="flex items-center bg-primary font-semibold rounded-lg p-4">
            <img
              src={artukbey_logo}
              alt="quote"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div className="text-white italic">
              But who has any right to find fault with someone who chooses to
              enjoy a pleasure that has no annoying consequences?
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
