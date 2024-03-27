"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderList from "./order-list";
import api from "../../services/api";

import React, { useEffect, useState } from "react";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get("/order");
        // Sort the menu items alphabetically by name by default
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching order data:", error);
      }
    };
    fetchOrders();
  });

  const cookingAndOrderedCount = orders.filter(
    (order) => order.status === "COOKING" || order.status === "ORDERED"
  ).length;

  return (
    <div className="py-10 px-6">
      <span className="text-4xl font-semibold">
        Orders in progress{" "}
        <span className="text-green-800">({cookingAndOrderedCount})</span>
      </span>
      <Tabs className="mt-5" defaultValue="kitchenstaff">
        <TabsList className="mb-3 flex w-[30%] justify-between">
          <TabsTrigger className="cursor-pointer" value="kitchenstaff">
            <span>Kitchen Staff</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="kitchenstaff">
          <OrderList
            setOrders={setOrders}
            orders={orders.filter(
              (order) => order.status == "COOKING" || order.status === "ORDERED"
            )}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
