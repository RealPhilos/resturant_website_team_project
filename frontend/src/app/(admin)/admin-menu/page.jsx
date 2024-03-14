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
      <span className="text-3xl font-semibold">Menus ({menus.length})</span>
      <div className="flex flex-col gap-3 mt-5">
        {menus.map((menu) => (
          <div className="border border-gray-400 rounded-lg">
            <img className="h-28 w-28 rounded-lg" src={menu.imgPath} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
