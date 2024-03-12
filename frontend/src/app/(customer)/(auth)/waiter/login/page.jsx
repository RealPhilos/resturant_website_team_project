"use client";

import { AuthContext } from "@/app/providers/auth";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

function WaiterLoginPage() {
  const { isLoggedIn, setIsLoggedIn, setUsername } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { toast } = useToast();

  useEffect(() => {
    if (isLoggedIn) {
      return router.replace("/");
    }
  }, [isLoggedIn]);

  const handleLoginSubmit = async (data) => {
    const { username, password } = data;

    const res = await fetch("http://localhost:8080/user/waiter/login", {
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
      setUsername(username);
      toast({
        title: "Login success",
        description: "Your account login is successful!",
      });
      router.push("/");
    } else {
      toast({
        title: "Login falied",
        description: "Invalid credentials!",
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="mx-auto w-2/5 border border-green-800 rounded p-8 mt-12 flex flex-col gap-7 items-center"
      >
        <span className="text-xl font-bold">Waiter Login</span>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Username</label>
          <input
            {...register("username", { required: true })}
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your username"
          />
          {errors.username && (
            <span className="text-red-700">Username is required</span>
          )}
        </div>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Password</label>
          <input
            {...register("password", { required: true })}
            type="password"
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-700">Password is required</span>
          )}
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

export default WaiterLoginPage;
