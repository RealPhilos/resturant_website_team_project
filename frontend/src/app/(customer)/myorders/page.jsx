"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderList from "./order-list";
import api from "../../services/api";
import { AuthContext } from "@/app/providers/auth";
import { useContext } from "react";
import { useEffect, useState } from "react";
import ProgressBar from "./progress-bar";

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

  const cookingCount = orders.filter(
    (order) => order.status === "COOKING" && order.username === user?.username
  ).length;

  const doneCount = orders.filter(
    (order) => order.status === "DONE" && order.username === user?.username
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
        <ProgressBar
          doneCount={doneCount}
          cookingCount={cookingCount}
          totalOrders={ordersCount}
        />
        <div className="mt-4">
          <span className="text-4xl font-serif underline my-2 mt-4">
            <span className="text-black">({ordersCount}) </span>
            orders:
          </span>
        </div>
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
