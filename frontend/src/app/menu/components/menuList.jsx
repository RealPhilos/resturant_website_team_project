"use client";

// Edited by Luque van der Merwe - ZLAC180

import React, { useEffect, useState } from "react";
import MenuCard from "./menuCard";
import { BASE_URL } from "../../constants";

function MenuList() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    async function fetchMenus() {
      const response = await fetch(`${BASE_URL}/foods`);
      const data = await response.json();


      //Changed to catch and display errors
      if (!response.ok) {
        throw new Error('HTTP error! Status: ${response.status}');
      }
      setMenus(data);
    }

    fetchMenus();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 gap-x-12 mt-8">
      {menus.map((menu) => (
        <MenuCard key={menu.foodId} menu={menu} />
      ))}
    </div>
  );
}

export default MenuList;
