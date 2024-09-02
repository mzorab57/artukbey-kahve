import React from "react";
import coffee from "../assets/images/cup-coffee-with-word-coffee-it.jpg";

const Services = () => {
  return (
    <section className="section bg-black py-12">
      <div className="container mx-auto px-4 max-w-[1300px]">
        <div className="flex flex-wrap  -mx-4">
          {/* Service Item 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg">
                <a href="menu-restaurant">
                  <img
                    src={coffee}
                    alt="Restaurant Menu"
                    className="w-full h-64 object-cover transition-transform transform group-hover:scale-105 duration-700"
                  />
                </a>
              </div>
              <div className="absolute p-7 inset-0  bg-black bg-opacity-50 group-hover:bg-opacity-40   opacity-100 transition-opacity duration-500">
                <div className="border duration-500 border-orange-100 border-opacity-30 group-hover:border-opacity-100 group-hover:border-orange-200 w-full h-full flex flex-col justify-center items-center rounded ">
                  <div className="text-white text-4xl mb-2 ">
                    <span>icon</span>
                  </div>
                  <h5 className="text-white text-xl">Restaurant Menu</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg">
                <a href="menu-restaurant">
                  <img
                    src={coffee}
                    alt="Restaurant Menu"
                    className="w-full h-64 object-cover transition-transform transform group-hover:scale-105 duration-700"
                  />
                </a>
              </div>
              <div className="absolute p-7 inset-0  bg-black bg-opacity-50 group-hover:bg-opacity-40   opacity-100 transition-opacity duration-500">
                <div className="border duration-500 border-orange-100 border-opacity-30 group-hover:border-opacity-100 group-hover:border-orange-200 w-full h-full flex flex-col justify-center items-center rounded ">
                  <div className="text-white text-4xl mb-2 ">
                    <span>icon</span>
                  </div>
                  <h5 className="text-white text-xl">Restaurant Menu</h5>
                </div>
              </div>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg">
                <a href="menu-restaurant">
                  <img
                    src={coffee}
                    alt="Restaurant Menu"
                    className="w-full h-64 object-cover transition-transform transform group-hover:scale-105 duration-700"
                  />
                </a>
              </div>
              <div className="absolute p-7 inset-0  bg-black bg-opacity-50 group-hover:bg-opacity-40   opacity-100 transition-opacity duration-500">
                <div className="border duration-500 border-orange-100 border-opacity-30 group-hover:border-opacity-100 group-hover:border-orange-200 w-full h-full flex flex-col justify-center items-center rounded ">
                  <div className="text-white text-4xl mb-2 ">
                    <span>icon</span>
                  </div>
                  <h5 className="text-white text-xl">Restaurant Menu</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
