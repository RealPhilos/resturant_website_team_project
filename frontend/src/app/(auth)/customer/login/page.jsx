"use client";

import { AuthContext } from "@/app/providers/auth";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

function CustomerLoginPage() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  const { toast } = useToast();

  useEffect(() => {
    if (isLoggedIn) {
      return router.replace("/");
    }
  }, [isLoggedIn]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/login/check", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setIsLoggedIn(true);
      toast({
        title: "Login success",
        description: "Your account login is successful!",
      });
      router.push("/");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-2/5 border border-green-800 rounded p-8 mt-12 flex flex-col gap-7 items-center"
      >
        <span className="text-xl font-bold">Customer Login</span>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Username</label>
          <input
            value={username}
            onChange={handleUsernameChange}
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Password</label>
          <input
            value={password}
            type="password"
            onChange={handlePasswordChange}
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
