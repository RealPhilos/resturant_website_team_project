"use client";

import { CartContext } from "@/app/providers/cart";
import React, { useContext } from "react";

export default function OrderSummary() {
  const { getSubtotal } = useContext(CartContext);
  const tax = 2.5;
  const delivery = 3.99;
  return (
    <div className="w-1/3 self-start border p-5 border-gray-300 rounded-lg bg-[#FAFAF5]">
      <span className="font-semibold">Order Summary</span>
      <div className="flex text-sm text-gray-700 mt-6 w-full justify-between">
        <span>Subtotal</span>
        <span>£{Number(getSubtotal()).toFixed(2)}</span>
      </div>
      <div className="flex text-sm my-2 text-gray-700 w-full justify-between">
        <span>Delivery</span>
        <span>£{delivery}</span>
      </div>
      <div className="flex text-sm my-2 text-gray-700 w-full justify-between">
        <span>Tax</span>
        <span>£{tax}</span>
      </div>
      <div className="flex text-sm my-2 font-semibold w-full justify-between">
        <span>Total</span>
        <span>£{Number(getSubtotal() + tax + delivery).toFixed(2)}</span>
      </div>
      <button className="p-3 bg-green-800 rounded-lg w-full text-white my-3 flex justify-between">
        <span>Continue to Payment</span>
        <span>&rarr;</span>
      </button>
    </div>
  );
}
