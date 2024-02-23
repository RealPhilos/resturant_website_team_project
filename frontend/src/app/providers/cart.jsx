"use client";

import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {},
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

  function addItem(i) {
    if (items.find((item) => item.id == i.id)) {
      setItems(
        items.map((item) => {
          if (item.id == id) {
            item.quantity++;
          }
          return item;
        })
      );
    }
    setItems([...items, i]);
  }
  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
}
