import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderList from "./order-list";

export default function OrderPage() {
  return (
    <div className="py-10 px-6">
      <span className="text-4xl font-semibold">
        Orders <span className="text-green-800">(20)</span>
      </span>
      <Tabs className="mt-5" defaultValue="all">
        <TabsList className="mb-3 flex w-[30%] justify-between">
          <TabsTrigger className="cursor-pointer" value="all">
            <span>All</span>
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="processing">
            <span>Processing</span>
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="ready">
            <span>Ready</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <OrderList />
        </TabsContent>
        <TabsContent value="processing">
          <p>Processing</p>
        </TabsContent>
        <TabsContent value="ready">
          <p>Ready</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
