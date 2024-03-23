"use client";

import api from "@/app/services/api";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [menus, setMenus] = useState([]);

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
    <div className="p-6">
      <div className="flex justify-between">
        <span className="text-3xl font-semibold">Menus ({menus.length})</span>
        <button className="bg-green-800 text-white p-2 rounded-lg">
          Add Menu
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {menus.map((menu) => (
          <div className="border border-gray-400 rounded-lg flex justify-between">
            <div className="flex gap-3">
              <img
                className="h-28 w-28 rounded-l-lg"
                src={menu.imgPath}
                alt=""
              />
              <div className="flex flex-col w-96 my-auto">
                <span className="font-semibold text-xl">{menu.name}</span>
                <span className="text-sm">{menu.description}</span>
                <span className="text-xl text-gray-600 font-semibold">
                  £{menu.price}
                </span>
              </div>
            </div>
            <div className="flex flex-col my-auto gap-3 mr-7">
              <button className="bg-blue-600 text-white p-2 rounded-lg">
                Edit
              </button>
              <button className="bg-red-600 text-white p-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
