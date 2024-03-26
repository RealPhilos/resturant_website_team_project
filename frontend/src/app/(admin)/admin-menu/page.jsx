"use client";

import api from "@/app/services/api";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";

export default function MenuPage() {
  const [menus, setMenus] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await api.get("/foods");
        // Sort the menu items alphabetically by name by default
        setMenus(response.data.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenu();
  }, []);

  const handleMenuAdd = async (data) => {
    try {
      const newMenu = {
        ...data,
        imgPaht: "",
      };
      const response = await api.post("/foods", newMenu);
      setMenus([...menus, newMenu]);
      reset();
    } catch (error) {
      console.error("Error creating new menu");
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <span className="text-3xl font-semibold">Menus ({menus.length})</span>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-green-800 text-white px-2 rounded-lg">
              Add Menu
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Menu</DialogTitle>
            </DialogHeader>
            <form
              className="flex flex-col gap-2"
              onSubmit={handleSubmit(handleMenuAdd)}
            >
              <div className="flex flex-col items-start w-full gap-1">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  className="pl-2 h-8 border border-gray-300 rounded-md w-full"
                />
                {errors.name && (
                  <span className="text-red-700">Menu name is required</span>
                )}
              </div>
              <div className="flex flex-col items-start w-full gap-1">
                <label htmlFor="imgPath" className="text-right">
                  ImgPath
                </label>
                <input
                  {...register("imgPath", { required: true })}
                  className="pl-2 h-8 border border-gray-300 rounded-md w-full"
                />
                {errors.price && (
                  <span className="text-red-700">Menu price is required</span>
                )}
              </div>
              <div className="flex flex-col items-start w-full gap-1">
                <label htmlFor="price" className="text-right">
                  Price
                </label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  className="pl-2 h-8 border border-gray-300 rounded-md w-full"
                />
                {errors.price && (
                  <span className="text-red-700">Menu price is required</span>
                )}
              </div>
              <div className="flex flex-col items-start w-full gap-1">
                <label htmlFor="category" className="text-right">
                  Category
                </label>
                <select
                  {...register("category", { required: true })}
                  className="pl-2 h-8 border border-gray-300 rounded-md w-full"
                >
                  <option>Main</option>
                  <option>Sides</option>
                </select>
                {errors.category && (
                  <span className="text-red-700">
                    Menu category is required
                  </span>
                )}
              </div>
              <div className="flex flex-col items-start w-full gap-1">
                <label htmlFor="description" className="text-right">
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  className="pl-2 h-20 border border-gray-300 rounded-md w-full"
                />
                {errors.description && (
                  <span className="text-red-700 w-full">
                    Menu description is required
                  </span>
                )}
              </div>
              <DialogClose className="">
                <button className="w-full bg-green-800 text-white rounded-lg mt-4 py-3">
                  Submit
                </button>
              </DialogClose>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {menus.map((menu) => (

          <div className="border border-gray-400 rounded-lg flex justify-between">
            <div className="flex gap-3">
              <img
                className="h-28 w-28 rounded-l-lg"
                src={menu.imgPath}
                alt=""
              />
              <div className="flex flex-col w-96 my-auto">
                <span className="font-semibold text-xl">{menu.name}</span>
                <span className="text-sm">{menu.description}</span>
                <span className="text-xl text-gray-600 font-semibold">
                  £{menu.price}
                </span>
              </div>
            </div>
            <div className="flex flex-col my-auto gap-3 mr-7">
              <button className="bg-blue-600 text-white p-2 rounded-lg">
                Edit
              </button>
              <button className="bg-red-600 text-white p-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
