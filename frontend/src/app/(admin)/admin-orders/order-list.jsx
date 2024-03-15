import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


export default function OrderList({ order }) {
  console.log(order);
  if (!order) {
    return null; 
  }

  const orderDate = new Date(order.orderTime[0], order.orderTime[1] - 1, order.orderTime[2], order.orderTime[3], order.orderTime[4], order.orderTime[5]);
  const formattedOrderTime = orderDate.toLocaleTimeString();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead style={{ width: '150px' }}>Item</TableHead>
          <TableHead style={{ width: '150px' }}>Customer</TableHead>
          <TableHead style={{ width: '150px' }}>Order Time</TableHead>
          <TableHead style={{ width: '150px' }} className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>{order.quantity} x {order.name}</TableCell>
          <TableCell>{order.username}</TableCell>
          <TableCell>{formattedOrderTime}</TableCell>
          <TableCell className="text-right text-green-600">
            {order.status}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

