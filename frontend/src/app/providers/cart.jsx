"use client";
import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
});

export default function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  );
}
