import React from "react";
import MenuList from "./menuList";
import MenuHeader from "./menuHeader";

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
