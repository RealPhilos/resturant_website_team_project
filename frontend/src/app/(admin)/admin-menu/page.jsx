"use client";

import api from "@/app/services/api";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function MenuPage() {
  const [menus, setMenus] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

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

  console.log(menus);

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
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                  Name
                </label>
                <input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                  Username
                </label>
                <input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <button className="bg-green-800 text-white px-2 rounded-lg">
                Submit
              </button>
            </DialogFooter>
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
