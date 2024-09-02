import React, { useState } from "react";
import CategoryButton from "./CategoryButton ";

const CategoryFilter = ({categories}) => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className="flex justify-center w-full text-center space-x-4 my-20">
      {categories.map((category) => (
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
