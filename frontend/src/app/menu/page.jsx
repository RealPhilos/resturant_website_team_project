import React from "react";
import MenuList from "./components/menuList";
import MenuHeader from "./components/menuHeader";

function MenuPage() {
  return (
    <div className="w-full">
      <MenuHeader />
      <hr />
      <MenuList />
    </div>
  );
}

export default MenuPage;
