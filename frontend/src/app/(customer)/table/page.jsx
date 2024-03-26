"use client";
import TableStatus from "./components/TableStatus";
import Footer from '../../components/footer';
import AuthProvider from "../../providers/auth";

// @author Luque van der Merwe - ZLAC180

const TablePage = () => {
  return (
    <AuthProvider>
      <div>
        <div className="py-6 flex flex-col items-left">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">Book a Table</h1>
          <div className="flex items-end gap-10">
            <p className="text-sm text-gray-500">
              <span className="text-green-500">Green</span> indicates a ready table,{' '}
              <span className="text-red-500">Red</span> means the table is unavailable and{' '}
              <span className="text-yellow-500">Yellow</span> signifies the table is almost ready.
            </p>
            <p className="text-sm text-gray-500">
              Tables for two are for 1-4, a 4-person table is for tables 5-8, and a 6-person table is for tables 9-12.
            </p>
          </div>
          <br />
          <TableStatus />
        </div>
        <hr />
        <br />
      </div>
    </AuthProvider>
  );  
};

export default TablePage;
