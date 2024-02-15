"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
});

export default function CartContextProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Mozzarella Pizza",
      price: 15,
      quantity: 1,
    },
    {
      id: 2,
      name: "Sushi",
      price: 10,
      quantity: 3,
    },
    {
      id: 3,
      name: "Ginger Beer",
      price: 1.5,
      quantity: 2,
    },
  ]);
  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  );
}
