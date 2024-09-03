import React, { useState } from "react";
import CategoryButton from "./CategoryButton ";

const CategoryFilter = ({categories, activeCategory, setActiveCategory}) => {
 

  return (
    <div className="flex justify-center w-full text-center space-x-4 my-20">
      {categories && categories.map((category) => (
        <CategoryButton
          key={category}
          label={category}
          isActive={activeCategory === category}
          onClick={() => setActiveCategory(category)}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
