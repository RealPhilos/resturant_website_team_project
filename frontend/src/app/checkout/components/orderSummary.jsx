import React from "react";

export default function OrderSummary() {
  return (
    <div className="w-1/3 self-start border p-5 border-gray-300 rounded-lg bg-[#FAFAF5]">
      <span className="font-semibold">Order Summary</span>
      <div className="flex text-sm text-gray-700 mt-6 w-full justify-between">
        <span>Subtotal</span>
        <span>£26.50</span>
      </div>
      <div className="flex text-sm my-2 text-gray-700 w-full justify-between">
        <span>Delivery</span>
        <span>£3.99</span>
      </div>
      <div className="flex text-sm my-2 text-gray-700 w-full justify-between">
        <span>Tax</span>
        <span>£2.50</span>
      </div>
      <div className="flex text-sm my-2 font-semibold w-full justify-between">
        <span>Total</span>
        <span>£32.49</span>
      </div>
      <button className="p-3 bg-green-800 rounded-lg w-full text-white my-3 flex justify-between">
        <span>Continue to Payment</span>
        <span>&rarr;</span>
      </button>
    </div>
  );
}
