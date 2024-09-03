import React from 'react';

const Booking = () => {
  return (
    <section
      className="relative bg-black py-16 bg-cover bg-center flex items-center"
      
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Titles Section */}
          <div className="text-white max-w-lg">
            <div
              className="text-lg font-medium mb-4 opacity-90 animate-fadeInUp"
            >
              Need a Table On Coffee House
            </div>
            <h3
              className="text-4xl font-bold mb-4 animate-fadeInUp delay-200"
            >
              Booking Table For You &amp; Family Members
            </h3>
          </div>
          {/* Button Section */}
          <div className="mt-6 lg:mt-0 animate-fadeInUp delay-400">
            <a
              href="reservation"
              className="inline-block bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-600 transition duration-300"
            >
              <span>Booking Table</span>
              <i className="fas fa-chevron-right ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
