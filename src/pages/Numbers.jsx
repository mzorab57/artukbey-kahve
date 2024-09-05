import React from "react";
import NumberItem from "../component/NumberItem";



const Statistics = () => {
  return (
    <section className="py-12 text-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-10 lg:justify-around items-center">
        <NumberItem
          number="256+"
          title="Premium Clients"
          description="But so that it may be seen"
        />
        <NumberItem
          number="362+"
          title="Expert Members"
          description="But so that it may be seen"
        />
        <NumberItem
          number="753+"
          title="Winning Awards"
          description="But so that it may be seen"
        />
      </div>
    </div>
  </section>
  );
};

export default Statistics;
