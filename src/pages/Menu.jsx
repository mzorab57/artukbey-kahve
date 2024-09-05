import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "../component/MenuItem";
import CategoryFilter from "../component/CategoryFilter ";

import category_bg from "../assets/images/category_bg.jpg";
import menu_logo from "../assets/images/menu_logo.png";

// data
import {allMenuItems} from "../data/data";



const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeSubcategory, setActiveSubcategory] = useState("ALL COFFEE");
  const location = useLocation();
  const path = location.pathname;

 


  const allCategories = ["ALL", "HOT DRINK", "COLD DRINK", "SWEET", "NUT", "CAKE", "FRUIT"];
  const hotDrinkCategories = ["ALL COFFEE", "PAWDER COFFEE", "PICES COFFEE", "TAKEAWAY COFFEE"];
  const coldDrinkCategories = ["ALL DRINK", "ICE CREAM", "FRUIT JUICE", "MOCKTAIL", "SMOOTHIE"];

  const filteredMenuItems = allMenuItems.filter(item => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "HOT DRINK" && activeSubcategory !== "ALL COFFEE") {
      return item.category === activeCategory && item.type === activeSubcategory;
    }
    if (activeCategory === "COLD DRINK" && activeSubcategory !== "ALL DRINK") {
      return item.category === activeCategory && item.type === activeSubcategory;
    }
    return item.category === activeCategory;
  });

  useEffect(() => {
    // Reset subcategory when the main category changes
    if (activeCategory === "HOT DRINK") {
      setActiveSubcategory("ALL COFFEE");
    } else if (activeCategory === "COLD DRINK") {
      setActiveSubcategory("ALL DRINK");
    }
  }, [activeCategory]);

  return (
    <section
    
      className="section bg-cover bg-center min-h-screen py-5"
      style={{ backgroundImage: `url(${category_bg})` }}
    >
      <div className="container mx-auto p-5 max-w-[1300px]">
        {/* Text Section */}
        <div className="text-center my-12">
          <div className="text-primary uppercase">Choose Best Coffee</div>
          <h3 className="text-4xl font-bold text-white my-4">
            Artukbey Cafe Menu
          </h3>
        </div>

        {/* Category Filter */}
        {path !== "/" && (
          <>
            <CategoryFilter
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              categories={allCategories}
            />
            {activeCategory === "HOT DRINK" && (
              <CategoryFilter
                activeCategory={activeSubcategory}
                setActiveCategory={setActiveSubcategory}
                categories={hotDrinkCategories}
              />
            )}
            {activeCategory === "COLD DRINK" && (
              <CategoryFilter
                activeCategory={activeSubcategory}
                setActiveCategory={setActiveSubcategory}
                categories={coldDrinkCategories}
              />
            )}
          </>
        )}

        {/* Menu Items */}
        <div
          className="bg-black/40 flex justify-center items-center rounded-lg relative px-5 py-10"
          style={{ backgroundImage: `url(${menu_logo})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-20">
            {path === "/" ? filteredMenuItems.slice(0, 6).map((item, index) => (
              <MenuItem
                key={index}
                imgSrc={item.imgSrc}
                altText={item.altText}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            )) : filteredMenuItems.map((item, index) => (
              <MenuItem
                key={index}
                imgSrc={item.imgSrc}
                altText={item.altText}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
