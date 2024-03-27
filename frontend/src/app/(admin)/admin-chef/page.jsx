"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderList from "./order-list";
import api from "../../services/api";

import React, { useEffect, useState } from "react";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await api.get("/order");
      // Sort the menu items alphabetically by name by default
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="py-10 px-6">
      <span className="text-4xl font-semibold">
        Orders <span className="text-green-800">({orders.length})</span>
      </span>
      <Tabs className="mt-5" defaultValue="chef">
        <TabsList className="mb-3 flex w-[30%] justify-between">
          <TabsTrigger className="cursor-pointer" value="chef">
            <span>Chef</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chef">
          <OrderList
            setOrders={setOrders}
            orders={orders.filter(
              (order) => order.status == "COOKING" || order.status === "ORDERED"
            )}
            refreshOrders={fetchOrders}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
