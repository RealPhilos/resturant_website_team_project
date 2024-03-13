"use client";

import { useContext } from "react";
import { AuthContext } from "../providers/auth";
import Link from "next/link";

export default function AuthButton() {
  const { isLoggedIn, user } = useContext(AuthContext);
  if (isLoggedIn) {
    return (
      <div>
        <span className="capitalize mr-4 border border-l-black border-l-2 border-r-0 pl-2 border-t-0 border-b-0">
          Hello {user?.username},{" "}
        </span>
        {user && user.role !== "customer" && (
          <Link href="/dashboard">
            <button className="bg-green-800 text-white px-3 py-2 rounded-md">
              Go to dashboard
            </button>
          </Link>
        )}
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
