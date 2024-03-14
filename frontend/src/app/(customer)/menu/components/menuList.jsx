"use client";

import React, { useEffect, useState } from "react";
import MenuCard from "./menuCard";
import MenuHeader from "./menuHeader";
import api from "../../../services/api";

/**
 * `MenuList` is a React component that fetches and displays a list of menu items using `MenuCard` components and handles ordering through a callback.
 * @author Zlac157 - Malcolm Berset
 * @author Zkac229 - Philip Anaafi Asumadu
 * @author ZLAC180 - Luque van der Merwe
 * @author WLIS205 - Parvesh Kumar
 */

function MenuList({ openModal }) {
  const [menus, setMenus] = useState([]);
  const [sortOrder, setSortOrder] = useState("A-Z");

  const handleSortOrder = (sortOrder) => {
    setSortOrder(sortOrder);
    if (sortOrder === "A-Z") {
      setMenus(menus.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortOrder === "Price low to high") {
      setMenus(menus.sort((a, b) => a.price - b.price));
    } else if (sortOrder === "Price high to low") {
      setMenus(menus.sort((a, b) => b.price - a.price));
    }
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get("/foods");
        // Sort the menu items alphabetically by name by default
        setMenus(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenu();
  }, []);
  return (
    <div className="w-full">
      <MenuHeader onSortOrderChange={handleSortOrder} />
      <hr />
      <div className="grid grid-cols-3 gap-4 gap-x-12 mt-8">
        {menus.map((menu) => (
          <MenuCard key={menu.foodId} menu={menu} openModal={openModal} />
        ))}
      </div>
    </div>
  );
}

export default MenuList;
