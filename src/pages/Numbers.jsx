import React from "react";

const Statistics = () => {
  return (
    <section className="py-12 bg-black/90 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-10 lg:justify-around items-center ">
          {/* First Item */}
          <div className="text-start leading-10 flex gap-5 ">
            <div className="text-6xl text-gray-300">256+</div>
            <div className="mt-2">
              <h5 className="text-2xl font-semibold text-gray-400">Premium Clients</h5>
              <div className="text-gray-500">Sed ut perspiciatis unde</div>
            </div>
          </div>

          {/* Second Item */}
          <div className="text-start leading-10 flex gap-5">
            <div className="text-6xl gap-5 text-gray-300">362+</div>
            <div className="mt-2">
              <h5 className="text-2xl font-semibold text-gray-400">Expert Members</h5>
              <div className="text-gray-500">Sed ut perspiciatis unde</div>
            </div>
          </div>

          {/* Third Item */}
          <div className="text-start leading-10 flex gap-5">
            <div className="text-6xl gap-5 text-gray-300">753+</div>
            <div className="mt-2">
              <h5 className="text-2xl font-semibold text-gray-400">Winning Awards</h5>
              <div className="text-gray-500">Sed ut perspiciatis unde</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
