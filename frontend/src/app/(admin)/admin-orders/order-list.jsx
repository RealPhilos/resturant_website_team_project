import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrderList({ orders }) {
  const formattedOrderTime = (date) =>
    new Date(
      date[0],
      date[1] - 1,
      date[2],
      date[3],
      date[4],
      date[5]
    ).toLocaleTimeString();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead style={{ width: "150px" }}>Item</TableHead>
          <TableHead style={{ width: "150px" }}>Customer</TableHead>
          <TableHead style={{ width: "150px" }}>Order Time</TableHead>
          <TableHead style={{ width: "150px" }} className="text-right">
            Status
          </TableHead>
          <TableHead style={{ width: "150px" }}>Table</TableHead>
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
                <button className="text-white bg-blue-600 p-2 rounded-md">
                  Mark as ready
                </button>
              )}
              {order.status == "READY" && (
                <button className="text-white bg-green-600 p-2 rounded-md">
                  Mark as done
                </button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
