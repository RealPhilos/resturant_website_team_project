"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
});

export default function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(i) {
    if (items.find((item) => item.foodId == i.foodId)) {
      setItems(
        items.map((item) => {
          if (item.foodId == i.foodId) {
            item.quantity++;
          }
          return item;
        })
      );
    }
    setItems([
      ...items,
      {
        ...i,
        quantity: 1,
      },
    ]);
  }
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
