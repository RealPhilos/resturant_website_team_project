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

  const sortedOrders = orders.slice().sort((a, b) => {
    const dateA = new Date(
      a.orderTime[0],
      a.orderTime[1] - 1,
      a.orderTime[2],
      a.orderTime[3],
      a.orderTime[4],
      a.orderTime[5]
    );
    const dateB = new Date(
      b.orderTime[0],
      b.orderTime[1] - 1,
      b.orderTime[2],
      b.orderTime[3],
      b.orderTime[4],
      b.orderTime[5]
    );
    return dateA - dateB;
  });

  return (
    <div className="overflow-y-auto max-h-[500px]">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/12">Id</TableHead>
            <TableHead className="w-3/12">Item</TableHead>
            <TableHead className="w-2/12">Order Time</TableHead>
            <TableHead className="w-1/12 text-right">Status</TableHead>
            <TableHead className="w-1/12">Table</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>
                {order.quantity} x {order.name}
              </TableCell>

              <TableCell>{formattedOrderTime(order.orderTime)}</TableCell>
              <TableCell className="text-right text-green-600">
                {order.status}
              </TableCell>
              <TableCell>{order.tableNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
