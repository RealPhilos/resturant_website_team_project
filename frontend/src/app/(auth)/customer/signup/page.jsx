"use client";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CustomerSignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const { toast } = useToast();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/login/add", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        role: "customer",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      toast({
        title: "Signup success",
        description:
          "Account signup is successful! You can login using this credentials now.",
      });
      router.push("/customer/login");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-2/5 border border-green-800 rounded p-8 mt-12 flex flex-col gap-7 items-center"
      >
        <span className="text-xl font-bold">Customer Sign Up</span>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Username</label>
          <input
            value={username}
            onChange={handleUsernameChange}
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <input
          className="bg-green-800 p-3 w-40 rounded-lg text-white cursor-pointer"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
}

export default CustomerSignUpPage;
