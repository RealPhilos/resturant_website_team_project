"use client";

import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../providers/cart";

function NavBar() {
  const { items } = useContext(CartContext);

  return (
    <div className="bg-gray-300 px-[13vw] py-7 flex items-center justify-between">
      <span className="text-xl text-green-800">Restaurant</span>

      <div className="flex gap-9 text-gray-700 items-center">
        <Link href="/menu">
          <span>Menu</span>
        </Link>
        <Link href="/order">
          <span>Order</span>
        </Link>
        <Link href="">
          <span>Table</span>
        </Link>
        <Link href="/login">
          <button className="bg-green-800 text-white px-3 py-2 rounded-md">
            Login
          </button>
        </Link>
        <Link href="/checkout">
          <span className="bg-green-800 text-white px-3 py-2 rounded-md">
            Basket ({items.length})
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
