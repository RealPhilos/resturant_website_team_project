"use client";

import { CartContext } from "@/app/providers/cart";
import { useContext } from "react";

function CheckoutHeader() {
  const { items } = useContext(CartContext);
  return (
    <div className="flex py-5 items-end gap-10">
      <span className="text-5xl font-serif">Order</span>
      <span className="text-md text-gray-600">{items.length} items</span>
    </div>
  );
}

export default CheckoutHeader;
