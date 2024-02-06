import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="bg-gray-300 px-16 py-7 flex items-center justify-between">
      <span className="text-xl text-green-800">Restaurant</span>

      <div className="flex gap-9 text-gray-700 items-center">
        <Link href="">
          <span>Menu</span>
        </Link>
        <Link href="">
          <span>Order</span>
        </Link>
        <Link href="">
          <span>Track</span>
        </Link>
        <Link href="">
          <span>Allergen</span>
        </Link>
        <button className="bg-green-800 text-white px-3 py-2 rounded-md">
          Basket (3)
        </button>
      </div>
    </div>
  );
}

export default NavBar;
