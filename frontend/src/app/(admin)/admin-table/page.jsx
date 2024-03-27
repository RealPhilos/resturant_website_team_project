"use client";

import TableStatus from "./components/TableStatus";
import AuthProvider from "../../providers/auth";

// @author Luque van der Merwe - ZLAC180

const TablePage = () => {
  return (
    <AuthProvider>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            Change the status of the tables
          </h1>
          <div className="flex flex-col items-center text-center gap-9">
            <p className="text-sm text-gray-500">
              <span className="text-green-500">Green</span> indicates a ready
              table, <span className="text-red-500">Red</span> means the table
              is unavailable and <span className="text-yellow-500">Yellow</span>{" "}
              signifies the table is almost ready.
            </p>
            <p className="text-sm text-gray-500 mb-10">
              Tables for two are for 1-4, a 4-person table is for tables 5-8,
              and a 6-person table is for tables 9-12.
            </p>
          </div>
          <TableStatus />
        </div>
      </div>
    </AuthProvider>
  );
};

export default TablePage;
