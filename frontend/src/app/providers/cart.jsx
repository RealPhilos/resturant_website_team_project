"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (i) => {},
  incrementQty: (id) => {},
});

export default function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(i) {
    if (items.find((item) => item.foodId == i.foodId)) {
      incrementQty(i.foodId);
      return;
    }
    setItems([
      ...items,
      {
        ...i,
        quantity: 1,
      },
    ]);
  }

  function incrementQty(id) {
    setItems(
      items.map((item) => {
        if (item.foodId == id) {
          item.quantity++;
        }
        return item;
      })
    );
  }
  return (
    <CartContext.Provider value={{ items, addItem, incrementQty }}>
      {children}
    </CartContext.Provider>
  );
}
