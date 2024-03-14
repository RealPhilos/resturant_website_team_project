import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrderList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Id</TableHead>
          <TableHead>Menus</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>1 x Pizza, 2 x Burger</TableCell>
          <TableCell>Ahmed Alyami</TableCell>
          <TableCell>£25.00</TableCell>
          <TableCell className="text-right text-green-600">
            Processing
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
