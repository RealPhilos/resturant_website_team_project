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

  const doneCount = orders.filter((order) => order.status === "DONE").length;

  return (
    <div className="py-10 px-6">
      <span className="text-4xl font-semibold">
        Orders to deliver <span className="text-green-800">({doneCount})</span>
      </span>
      <Tabs className="mt-5" defaultValue="waiter">
        <TabsList className="mb-3 flex w-[30%] justify-between">
          <TabsTrigger className="cursor-pointer" value="waiter">
            <span>Waiter</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="waiter">
          <OrderList
            setOrders={setOrders}
            orders={orders.filter((order) => order.status == "DONE")}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
