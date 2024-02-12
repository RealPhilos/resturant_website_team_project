"use client";

import React, { useEffect, useState } from "react";
import MenuCard from "./menuCard";
import { BASE_URL } from "../../constants";

function MenuList() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    async function fetchMenus() {
      const response = await fetch(`${BASE_URL}/foods`);
      const data = await response.json();

      if (response.ok) {
        setMenus(data);
      }
    }

    fetchMenus();
  }, []);
  // const menus = [
  //   {
  //     name: "Pizza",
  //     description: "Ingredients - Cheese, Tomato, Chicken, Onion",
  //     price: 12.99,
  //   },
  //   {
  //     name: "Burger",
  //     description: "Ingredients - Cheese, Tomato, Chicken, Onion",
  //     price: 11.99,
  //   },
  //   {
  //     name: "Sandwich",
  //     description: "Ingredients - Cheese, Tomato, Chicken, Onion",
  //     price: 10.99,
  //   },
  //   {
  //     name: "Pasta",
  //     description: "Ingredients - Cheese, Tomato, Chicken, Onion",
  //     price: 11.49,
  //     image: "/pasta.jpeg",
  //   },
  //   {
  //     name: "Burger",
  //     description: "Ingredients - Cheese, Tomato, Chicken, Onion",
  //     price: 12.99,
  //   },
  //   {
  //     name: "Sandwich",
  //     description: "Ingredients - Cheese, Tomato, Chicken, Onion",
  //     price: 12.99,
  //   },
  // ];

  return (
    <div className="grid grid-cols-3 gap-4 gap-x-12 mt-8">
      {menus.map((menu) => (
        <MenuCard key={menu.foodId} menu={menu} />
      ))}
    </div>
  );
}

export default MenuList;
