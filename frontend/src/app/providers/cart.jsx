"use client";
import { useState } from "react";

export default function CartContextProvider() {
  const [items, setItems] = useState([]);
  return <div>CartContextProvider</div>;
}
