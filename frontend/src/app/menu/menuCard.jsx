import React from "react";

function MenuCard({ menu, idx }) {
  return (
    <div
      key={idx}
      className="w-full bg-white rounded-3xl border hover:scale-105 transition-transform">
      <img
        src="/pizza.jpeg"
        alt={menu.name}
        className="w-full rounded-t-3xl h-56 object-cover"
      />
      <div className="p-4 rounded-3xl bg-[#FAFAF5]">
        <h3 className="text-lg font-semibold">{menu.name}</h3>
        <h3 className="text-md text-gray-600 mb-2">£{menu.price}</h3>
        <p className="text-gray-700 text-sm  mb-2">{menu.description}</p>
      </div>
    </div>
  );
}

export default MenuCard;
