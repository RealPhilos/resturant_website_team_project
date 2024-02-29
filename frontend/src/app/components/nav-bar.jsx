"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

var buttonText = "Login";

function NavBar() {
  return (
    <div className="bg-gray-300 px-[13vw] py-7 flex items-center justify-between">
      <Link href="/">
        <span className="text-xl text-green-800">Restaurant</span>
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
        <Link href="/customer/login">
          <button
            className="bg-green-800 text-white px-3 py-2 rounded-md"
            id="LoginButton"
          >
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
