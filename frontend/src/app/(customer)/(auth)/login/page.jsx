"use client";

import { AuthContext } from "@/app/providers/auth";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import VideoPlayer from "@/app/components/video-player";

function LoginPage() {
  const { isLoggedIn, setIsLoggedIn, setUser } = useContext(AuthContext);
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

    const res = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

 
  
    if (res.headers.get("Content-Type")?.includes("application/json")) {
      const user = await res.json();
      console.log(user.role);
      setIsLoggedIn(true);
      setUser({
      username,
      role: user.role,
      });
      toast({
      title: "Login success",
      description: "Your account login is successful!",
      });
      router.push("/");
    } else {
      toast({
      title: "Login failed",
      description: "Invalid credentials!",
      });
    }
  };

  const videos = ["/pizzaVid.mp4",
  "/entranceVid.mp4", 
  "/saladVid.mp4",
  "/steakVid.mp4",
  "/wingsVid.mp4",
  "/chefVid.mp4",
  "/interiorVid.mp4",
  "/burgerVid.mp4",
  "/tacosVid.mp4",
]; // Video Cycle

  return (
    <div style={{ position: 'relative' }}>
    <VideoPlayer videos={videos} />
      <form
        onSubmit={handleSubmit(handleLoginSubmit)}
        className="mx-auto w-2/5 border border-green-800 rounded p-8 mt-12 flex flex-col gap-7 items-center"
        style={{ position: 'relative', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
      >
        <span className="text-xl font-bold">Login</span>
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
          <span className="text-sm text-gray-600">
            Not a member? Sign Up{" "}
            <Link
              className="text-green-900 font-semibold"
              href="/signup"
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

export default LoginPage;