"use client";

import Link from "next/link";
import React from "react";
import AuthButton from "./auth-button";

function NavBar() {
  return (
    <div
      className="bg-gray-300 px-[13vw] py-7 flex items-center justify-between"
      style={{ backgroundColor: "#FAFAF5" }}
    >
      <Link href="/">
        <div className="flex items-center text-green-800 cursor-pointer">
          <img src="/Icon.png" alt="Oaxaca Icon" className="w-12 h-12" />
          <span className="text-xl text-green-800">axaca</span>
        </div>
      </Link>

      <div className="flex gap-9 text-gray-700 items-center">
        <Link href="/menu">
          <span>Menu</span>
        </Link>
        <Link href="/basket">
          <span>Basket</span>
        </Link>
        <Link href="/table">
          <span>Tables</span>
        </Link>
        <AuthButton />
      </div>
    </div>
  );
}

export default NavBar;
