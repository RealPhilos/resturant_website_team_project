"use client";

import React, { useState } from "react";
import MenuList from "./components/menuList";
import MenuHeader from "./components/menuHeader";

function MenuPage() {
  const [isListView, setIsListView] = useState(false);
  return (
    <div className="w-full">
      <MenuHeader isListView={isListView} setIsListView={setIsListView} />
      <hr />
      <MenuList isListView={isListView} />
    </div>
  );
}

export default MenuPage;
