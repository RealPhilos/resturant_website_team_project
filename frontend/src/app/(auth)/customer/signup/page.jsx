"use client";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function CustomerSignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { toast } = useToast();

  const handleSignUpSubmit = async (data) => {
    const { username, password, confirmPassword } = data;
    const res = await fetch("http://localhost:8080/customer/register", {
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
        onSubmit={handleSubmit(handleSignUpSubmit)}
        className="mx-auto w-2/5 border border-green-800 rounded p-8 mt-12 flex flex-col gap-7 items-center"
      >
        <span className="text-xl font-bold">Customer Sign Up</span>
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
            type="password"
            {...register("password", { required: true })}
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className="text-red-700">Password is required</span>
          )}
        </div>
        <div className="flex flex-col w-3/4 gap-1">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: true,
              validate: (cp) => {
                if (watch("password") != cp) {
                  return "Please enter the same password from above!";
                }
              },
            })}
            className="p-2 bg-gray-200 rounded-md"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && (
            <span className="text-red-700">
              {errors.confirmPassword.message ||
                "Confirm password field is required"}
            </span>
          )}
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
