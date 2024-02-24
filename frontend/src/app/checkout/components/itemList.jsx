"use client";

import { useContext } from "react";
import ItemCard from "./itemCard";
import { CartContext } from "@/app/providers/cart";

export default function ItemList() {
  const { items } = useContext(CartContext);
  return (
    <div className="w-2/3">
      {items.map((data) => (
        <ItemCard key={data.foodId} item={data} />
      ))}
    </div>
  );
}
