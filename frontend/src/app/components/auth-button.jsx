"use client";

import { useContext } from "react";
import { AuthContext } from "../providers/auth";
import Link from "next/link";

export default function AuthButton() {
  const { isLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    return (
      <div>
        <Link href="/customer/logout">
          <button className="bg-green-800 text-white px-3 py-2 rounded-md">
            Logout
          </button>
        </Link>
      </div>
    );
  }
  return (
    <Link href="/customer/login">
      <button className="bg-green-800 text-white px-3 py-2 rounded-md">
        Login
      </button>
    </Link>
  );
}
