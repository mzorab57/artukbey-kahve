import React from "react";
import category_bg from "../assets/images/category_bg.jpg";
import menu_logo from "../assets/images/menu_logo.png";
import coffee from "../assets/images/cup-coffee-with-word-coffee-it.jpg";
import MenuItem from "../component/MenuItem";
import CategoryFilter from "../component/CategoryFilter ";

const Menu = () => {
  const allMenuItems = [
    {
      imgSrc: coffee,
      altText: "Americano Coffee",
      title: "Americano Coffee",
      description: "2/3 espresso, 1/3 steamed milk",
      price: "$4.9",
    },
    {
      imgSrc: coffee,
      altText: "Americano Coffee",
      title: "Americano Coffee",
      description: "2/3 espresso, 1/3 steamed milk",
      price: "$4.9",
    },
    {
      imgSrc: coffee,
      altText: "Americano Coffee",
      title: "Americano Coffee",
      description: "2/3 espresso, 1/3 steamed milk",
      price: "$4.9",
    },
    {
      imgSrc: coffee,
      altText: "Americano Coffee",
      title: "Americano Coffee",
      description: "2/3 espresso, 1/3 steamed milk",
      price: "$4.9",
    },
    {
      imgSrc: coffee,
      altText: "Americano Coffee",
      title: "Americano Coffee",
      description: "2/3 espresso, 1/3 steamed milk",
      price: "$4.9",
    },
    {
      imgSrc: coffee,
      altText: "Americano Coffee",
      title: "Americano Coffee",
      description: "2/3 espresso, 1/3 steamed milk",
      price: "$4.9",
    },
  ];

  const categories = ["ALL", "FAST FOOD", "HOT COFFEE", "DESSERT"];

  return (
    <section
      className="section bg-cover bg-center min-h-screen py-5"
      style={{ backgroundImage: `url(${category_bg})` }}
    >
      <div className="container mx-auto p-5 max-w-[1300px]">
        {/*  text */}
        <div className="text-center my-12">
          <div className="text-yellow-500 uppercase">Choose Best Coffee</div>
          <h3 className="text-4xl font-bold text-white my-4">
            Artukbey Kahve Menu
          </h3>
        </div>

        {/* category filter */}
        <CategoryFilter categories={categories} />

        {/*  menu items */}
        <div
          className="bg-black/40 flex justify-center items-center rounded-lg relative px-5 py-10"
          style={{ backgroundImage: `url(${menu_logo})` }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-44 gap-y-20">
            {allMenuItems.map((item, index) => (
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
