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
    <div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
}
