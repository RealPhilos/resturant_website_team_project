import React from "react";
import MenuCard from "./menuCard";

function MenuList() {
  const menus = [
    {
      name: "Pizza",
      description: "Ingredients - Cheese, Tomato, Chicken, Onion",
      price: 12.99,
    },
    {
      name: "Burger",
      description: "Ingredients - Cheese, Tomato, Chicken, Onion",
      price: 11.99,
    },
    {
      name: "Sandwich",
      description: "Ingredients - Cheese, Tomato, Chicken, Onion",
      price: 10.99,
    },
    {
      name: "Pasta",
      description: "Ingredients - Cheese, Tomato, Chicken, Onion",
      price: 11.49,
      image: "/pasta.jpeg",
    },
    {
      name: "Burger",
      description: "Ingredients - Cheese, Tomato, Chicken, Onion",
      price: 12.99,
    },
    {
      name: "Sandwich",
      description: "Ingredients - Cheese, Tomato, Chicken, Onion",
      price: 12.99,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 gap-x-12 mt-8">
      {menus.map((menu, idx) => (
        <MenuCard menu={menu} idx={idx} />
      ))}
    </div>
  );
}

export default MenuList;
