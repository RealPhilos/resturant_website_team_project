import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OrderPage() {
  return (
    <>
      <Tabs defaultValue="all">
        <TabsList className="mb-3 flex w-[30%] justify-between">
          <TabsTrigger className="cursor-pointer" value="all">
            <p>All</p>
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="processing">
            <p>Processing</p>
          </TabsTrigger>
          <TabsTrigger className="cursor-pointer" value="ready">
            <p>Ready</p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <p>All</p>
        </TabsContent>
        <TabsContent value="processing">
          <p>Processing</p>
        </TabsContent>
        <TabsContent value="ready">
          <p>Ready</p>
        </TabsContent>
      </Tabs>
    </>
  );
}
