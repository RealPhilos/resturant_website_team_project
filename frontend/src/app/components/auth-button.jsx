"use client";

import { useContext } from "react";
import { AuthContext } from "../providers/auth";
import Link from "next/link";

export default function AuthButton() {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <div>
        <span className="capitalize mr-4 border border-l-black border-l-2 border-r-0 pl-2 border-t-0 border-b-0">
          Hello {user?.username},{" "}
        </span>
        {user && (user.role == "Chef" || user.role == "Waiter") && (
          <Link href="/dashboard">
            <button className="bg-green-800 text-white px-3 py-2 rounded-md">
              Go to dashboard
            </button>
          </Link>
        )}
        <button
          onClick={() => {
            setUser(null);
            setIsLoggedIn(false);
          }}
          className="bg-green-800 text-white px-3 py-2 rounded-md ml-3"
        >
          Logout
        </button>
      </div>
    );
  }
  return (
    <Link href="/login">
      <button className="bg-green-800 text-white px-3 py-2 rounded-md">
        Login
      </button>
    </Link>
  );
}
