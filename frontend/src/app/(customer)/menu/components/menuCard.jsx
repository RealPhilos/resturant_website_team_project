import { CartContext } from "@/app/providers/cart";
import React, { useContext } from "react";

/**
 * `MenuCard` is a React component that displays a menu item and triggers an `onOrder` callback when clicked.
 * @author Zlac157 - Malcolm Berset
 * @author WLIS205 - Parvesh Kumar
 */
function MenuCard({ menu, openModal }) {
  const { addItem } = useContext(CartContext);
  // This function will be called when the MenuCard is clicked
  const handleClick = () => {
    openModal(menu);
  };

  console.log(menu);

  return (
    <div
      className="w-full bg-white rounded-3xl border food-item"
      onClick={handleClick}
      style={{ cursor: "pointer", transition: "transform .2s" }}
    >
      <img
        src={menu.imgPath}
        alt={menu.name}
        className="w-full rounded-t-3xl h-56 object-cover"
      />
      <div
        className="p-4 rounded-3xl bg-[#FAFAF5]"
        style={{ minHeight: "150px" }}
      >
        <h3 className="text-lg font-semibold">{menu.name}</h3>
        <p className="text-md text-gray-600 mb-2">£{menu.price}</p>
        <p className="text-gray-700 text-sm mb-2">{menu.description}</p>
      </div>
      <style jsx>{`
        .food-item:hover {
          transform: scale(1.05); /* Slightly larger zoom on hover */
        }
      `}</style>
    </div>
  );
}

export default MenuCard;
