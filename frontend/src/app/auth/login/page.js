import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div>
      <form className="mx-auto w-2/5 border border-blue-500 rounded p-8 mt-12 flex flex-col gap-7 items-center">
        <span className="text-xl font-bold">Waiter Login</span>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Email</label>
          <input
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Password</label>
          <input
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your password"
          />
          <span className="text-sm text-gray-600">
            Already a member? Sign Up{" "}
            <Link className="text-blue-900 font-semibold" href="/auth/signup">
              here!
            </Link>
          </span>
        </div>
        <input
          className="bg-blue-500 p-3 w-40 rounded-lg text-white cursor-pointer"
          type="submit"
        />
      </form>
    </div>
  );
}

export default LoginPage;
