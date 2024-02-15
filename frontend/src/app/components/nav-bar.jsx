import Link from "next/link";
import React from "react";

function NavBar() {
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
        <Link href="/table">
          <span>Tables</span>
        </Link>
        <Link href="/login">
        <button className="bg-green-800 text-white px-3 py-2 rounded-md">
          Login
        </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
