"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/auth";
import OrderButton from "../components/order-now-button";

function NavBar() {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const userType = user ? user.role : null;
  const username = user ? user.username : null;

  // Load the logged-in state from localStorage when the component mounts
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setIsLoggedIn(true);
    }
  }, []);

  function logout() {
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = "/login"; // redirect to the login page
  }

  // Save the logged-in state to localStorage whenever it changes
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [isLoggedIn, user]);

  return (
    <div
      className="px-[13vw] py-7 flex items-center justify-between sticky top-0 z-20"
      style={{ backgroundColor: "#FAFAF5" }}
    >
      <Link href="/">
        <div className="flex items-center text-green-800">
          <img src="/Icon.png" alt="Oaxaca Icon" className="w-12 h-12" />
          <span className="text-xl text-green-800">axaca</span>
        </div>
      </Link>

      <div className="flex gap-9 text-gray-700 items-center">
        {isLoggedIn ? (
          userType === "Waiter" ? (
            <>
              <Link href="/menu">
                <span>Menu</span>
              </Link>
              <Link href="/dashboard">
                <span>Dashboard</span>
              </Link>
            </>
          ) : userType === "Chef" ? (
            <>
              <Link href="/menu">
                <span>Menu</span>
              </Link>
              <Link href="/dashboard">
                <span>Dashboard</span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/menu">
                <span>Menu</span>
              </Link>
              <Link href="/basket">
                <span>Basket</span>
              </Link>
              <Link href="/table">
                <span>Tables</span>
              </Link>
              <Link href="/myorders">
                <span>My Orders</span>
              </Link>
            </>
          )
        ) : null}
        {isLoggedIn ? (
          <div>
            <span className="capitalize mr-4 border border-l-black border-l-2 border-r-0 pl-2 border-t-0 border-b-0">
              Hello, {username}
            </span>
            <Link href="/login">
              <button
                className="bg-green-800 text-white px-3 py-2 rounded-md"
                onClick={logout}
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <>
            <OrderButton
              userType={userType}
              isLoggedIn={isLoggedIn}
              overrideClassName="flex gap-9 text-gray-700 items-center"
              buttonText="Order Now"
            />
            <Link href="/login">
              <button className="bg-green-800 text-white px-3 py-2 rounded-md">
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
