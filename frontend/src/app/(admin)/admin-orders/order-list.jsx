import api from "@/app/services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrderList({ orders, setOrders }) {
  const formattedOrderTime = (date) =>
    new Date(
      date[0],
      date[1] - 1,
      date[2],
      date[3],
      date[4],
      date[5]
    ).toLocaleTimeString();

  const handleEditStatus = async (id, status) => {
    try {
      const response = await api.put(`/order/${id}`, status, {
        headers: {
          "Content-Type": "text/plain",
        },
      });

      console.log(response);
      // Sort the menu items alphabetically by name by default
      setOrders(
        orders.map((order) => {
          if (order.id == id) {
            order.status = status?.toUpperCase();
          }

          return order;
        })
      );
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  return (
    <Table className="min-w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-1/12">Id</TableHead>
          <TableHead className="w-3/12">Item</TableHead>
          <TableHead className="w-2/12">Customer</TableHead>
          <TableHead className="w-2/12">Order Time</TableHead>
          <TableHead className="w-1/12 text-right">Status</TableHead>
          <TableHead className="w-1/12">Table</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              {order.quantity} x {order.name}
            </TableCell>
            <TableCell>{order.username}</TableCell>
            <TableCell>{formattedOrderTime(order.orderTime)}</TableCell>
            <TableCell className="text-right text-green-600">
              {order.status}
            </TableCell>
            <TableCell>{order.tableNumber}</TableCell>
            <TableCell>
              {order.status == "COOKING" && (
                <>
                  <button
                    onClick={() => handleEditStatus(order.id, "done")}
                    className="text-white bg-green-600 p-2 rounded-md"
                  >
                    Mark as Done
                  </button>
                  <span className="ml-2">Chef</span>
                </>
              )}
              {order.status == "DONE" && (
                <>
                  <button
                    onClick={() => handleEditStatus(order.id, "delivered")}
                    className="text-white bg-black p-2 rounded-md"
                  >
                    Mark as Delivered
                  </button>
                  <span className="ml-2">Waiter</span>
                </>
              )}
              {order.status == "ORDERED" && (
                <>
                  <button
                    className="text-white bg-red-600 p-2 rounded-md"
                    onClick={() => handleEditStatus(order.id, "cooking")}
                  >
                    Mark as Cooking
                  </button>
                  <span className="ml-2">Chef</span>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
