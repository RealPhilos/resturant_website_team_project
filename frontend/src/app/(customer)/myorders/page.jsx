"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderList from "./order-list";
import api from "../../services/api";
import { AuthContext } from "@/app/providers/auth";
import { useContext } from "react";
import { useEffect, useState } from "react";

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

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

  const ordersCount = orders.filter(
    (order) => order.username === user?.username
  ).length;

  return (
    <>
      <div className="py-6 flex justify-between items-end">
        <div className="flex items-end gap-10">
          <span className="text-5xl font-serif">Orders Progress</span>
          <br></br>
          <span>View your orders status</span>
        </div>
      </div>

      <hr />

      <div className="py-10 px-6">
        <span className="text-4xl font-semibold">
          Orders <span className="text-green-800">({ordersCount})</span>
        </span>
        <Tabs className="mt-5">
          <TabsContent>
            <OrderList
              setOrders={setOrders}
              orders={orders.filter(
                (order) => order.username == user?.username
              )}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
