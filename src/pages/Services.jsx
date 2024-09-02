import React from "react";
import { useLocation } from "react-router-dom";

import ServiceItem from "../component/ServiceItem";

import { PiCoffee  } from "react-icons/pi";
import { BiDrink } from "react-icons/bi";
import { LuCakeSlice } from "react-icons/lu";
import { FaBowlFood } from "react-icons/fa6";
import { GiWrappedSweet, GiFruitBowl } from "react-icons/gi";


import coffee from "../assets/images/cup-coffee-with-word-coffee-it.jpg";
import coldDrinks from "../assets/images/drikCold.jpg";
import cake from "../assets/images/cake1.jpg";
import charas from "../assets/images/nut.jpg";
import sweet from "../assets/images/sweet.jpg";
import fruit from "../assets/images/fruit.jpg";


const Services = () => {

  const location = useLocation();
  const path = location.pathname;

  return (
    <section className="section py-12 bg-gray-950/70">
    <div className="container mx-auto px-4 max-w-[1300px]">
      {path === "/services" && (
        <div className="block text-center my-20">
          <span>WE PROVIDE</span>
          <h1 className="font-semibold text-4xl py-5">Kaffen Services One</h1>
        </div>
      )}
      <div className="flex flex-wrap -mx-4">
        <ServiceItem imgSrc={coffee} altText="Cofe Menu" icon={<PiCoffee  className='text-orange-100 text-opacity-60 group-hover:text-opacity-100 group-hover:text-orange-200' />} title="Hot Drinks" />
        <ServiceItem imgSrc={coldDrinks} altText="Cold Menu" icon={<BiDrink className='text-orange-100 text-opacity-60 group-hover:text-opacity-100 group-hover:text-orange-200' />} title="Cold Drinks" />
        <ServiceItem imgSrc={cake} altText="Cake Menu" icon={<LuCakeSlice  className='text-orange-100 text-opacity-80 group-hover:text-opacity-100 group-hover:text-orange-200' />} title="Cake Menu" />
        <ServiceItem imgSrc={charas} altText="Charas Menu" icon={<FaBowlFood  className='text-orange-100 text-opacity-80 group-hover:text-opacity-100 group-hover:text-orange-200' />} title="Nut Menu" />
        <ServiceItem imgSrc={sweet} altText="Sweet Menu" icon={<GiWrappedSweet  className='text-orange-100 text-opacity-80 group-hover:text-opacity-100 group-hover:text-orange-200' />} title="Sweet Menu" />
        <ServiceItem imgSrc={fruit} altText="Fruite Menu" icon={<GiFruitBowl  className='text-orange-100 text-opacity-80 group-hover:text-opacity-100 group-hover:text-orange-200' />} title="Fruit Menu" />
      </div>
    </div>
  </section>
  );
};

export default Services;
