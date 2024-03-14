
"use client";

import React, { useEffect, useState } from "react";
import api from "../../services/api";
export default function MenuPage() {

  const [menus, setMenus] = useState([]);

  const handleRemove = async (id) => {
    try {
      // Send a DELETE request to delete the food item with the specified id
      console.log(id);
      await api.delete(`/foods/${id}`);

      // If the deletion is successful, update the menu list by filtering out the deleted item
      setMenus(menus => menus.filter(menu => menu.id !== id));
    } catch (error) {
      console.error("Error removing menu item:", error);
    }
  };

  const handleAddToMenu = async () => {
    try {
      const response = await api.post("/foods", { name: "New Menu Item" });
      setMenus([...menus, response.data]);
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get("/foods");
        // Sort the menu items alphabetically by name by default
        console.log(response.data);
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenu();
  }, [menus]); // Add 'menus' as a dependency to the useEffect hook


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get("/foods");
        // Sort the menu items alphabetically by name by default
        console.log(response.data);
        setMenus(response.data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div>
      MenuPage
      <div className="w-full">
        <hr />
        <div className="grid grid-cols-3 gap-4 gap-x-12 mt-8">
          {menus.map((menu) => (
            <div key={menu.foodId}>
              {menu.name}
              <button className="py-1.5 bg-green-700 text-white mr-2 px-2.5 text-sm rounded-2xl" onClick={() => handleRemove(menu.foodId)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="py-1.5 bg-blue-500 text-white mr-2 px-2.5 text-sm rounded-2xl" onClick={handleAddToMenu}>
        Add to Menu
      </button>
    </div>
  );
}
