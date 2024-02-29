"use client";

import Link from "next/link";
import React from "react";
import api from "../services/axiosConfig";

const handleClick = () => {
  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  api
    .post("/login/check", data)
    .then(function (response) {
      if (response.data == false) {
        alert("Login fail.");
      } else {
        window.location = "http://localhost:3000/menu";
      }
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

function CustomerLoginPage() {
  return (
    <div>
      <form
        action={handleClick}
        className="mx-auto w-2/5 border border-green-800 rounded p-8 mt-12 flex flex-col gap-7 items-center"
      >
        <span className="text-xl font-bold">Customer Login</span>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Username</label>
          <input
            id="username"
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Password</label>
          <input
            id="password"
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your password"
          />
          <span className="text-sm text-gray-600">
            Not a member? Sign Up{" "}
            <Link
              className="text-green-900 font-semibold"
              href="/customer/signup"
            >
              here!
            </Link>
          </span>
          <span id="login_failed"></span>
        </div>
        <input
          className="bg-green-800 p-3 w-40 rounded-lg text-white cursor-pointer"
          type="submit"
          value="Log In"
        />
      </form>
    </div>
  );
}

export default CustomerLoginPage;
