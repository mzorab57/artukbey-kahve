import React from "react";
import CategoryButton from "./CategoryButton ";

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-start lg:justify-center items-center w-full text-center space-x-4 my-20 overflow-x-auto whitespace-nowrap scrollbar-hide">
    <div className="flex space-x-4">
      {categories &&
        categories.map((category) => (
          <CategoryButton
            key={category}
            label={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
    </div>
  </div>
  );
};

export default CategoryFilter;
