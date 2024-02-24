"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (i) => {},
  incrementQty: (id) => {},
  decrementQty: (id) => {},
  getSubtotal: () => {},
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

  function decrementQty(id) {
    setItems(
      items.reduce((prev, item) => {
        if (item.foodId == id) {
          if (item.quantity == 1) {
            return prev;
          }
          return [
            ...prev,
            {
              ...item,
              quantity: item.quantity - 1,
            },
          ];
        }
        return [...prev, item];
      }, [])
    );
  }

  function getSubtotal() {
    return items.reduce((prev, item) => prev + item.quantity * item.price, 0);
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, incrementQty, decrementQty, getSubtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
