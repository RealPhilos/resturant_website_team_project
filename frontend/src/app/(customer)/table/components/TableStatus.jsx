import React, { useState, useEffect, useContext } from "react";
import api from "../../../services/api";
import { AuthContext } from "@/app/providers/auth";

function TableStatus({ openModal }) {
  const [tableStatuses, setTableStatuses] = useState([]);
  const { isLoggedIn, username } = useContext(AuthContext); // Accessing context

  useEffect(() => {
    const fetchTableStatuses = async () => {
      try {
        const response = await api.get("/table");
        if (response && response.data && Array.isArray(response.data)) {
          const sortedData = response.data.sort(
            (a, b) => a.tableNumber - b.tableNumber
          );
          setTableStatuses(sortedData);
        } else {
          console.error("Invalid response format:", response);
        }
      } catch (error) {
        console.error("Error fetching table statuses:", error);
      }
    };
    fetchTableStatuses();
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "FREE":
        return "bg-green-500";
      case "CLEANING":
        return "bg-yellow-500";
      case "OCCUPIED":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  // Function to reserve table
  const reserveTable = async (tableNumber, tableSize) => {
    try {
      const response = await api.post(
        `table/bookTable/${tableNumber}/${username}/${tableSize}`
      );
      if (response.status === 200) {
        // Update table status locally
        const updatedTableStatuses = tableStatuses.map((table) => {
          if (table.tableNumber === tableNumber) {
            return { ...table, tableStatus: "OCCUPIED" };
          }
          return table;
        });
        setTableStatuses(updatedTableStatuses);
      } else {
        console.error("Failed to reserve table:", response);
      }
    } catch (error) {
      console.error("Error reserving table:", error);
    }
  };

  // Function to reserve table
  const cleanTable = async (tableNumber) => {
    try {
      const response = await api.post(`/table/tableFinish/${tableNumber}`);
      if (response.status === 200) {
        // Update table status locally
        const updatedTableStatuses = tableStatuses.map((table) => {
          if (table.tableNumber === tableNumber) {
            return { ...table, tableStatus: "CLEANING" };
          }
          return table;
        });
        setTableStatuses(updatedTableStatuses);
      } else {
        console.error("Failed to reserve table:", response);
      }
    } catch (error) {
      console.error("Error reserving table:", error);
    }
  };

  const freeTable = async (tableNumber) => {
    try {
      const response = await api.post(`/table/tableCleaned/${tableNumber}`);
      if (response.status === 200) {
        // Update table status locally
        const updatedTableStatuses = tableStatuses.map((table) => {
          if (table.tableNumber === tableNumber) {
            return { ...table, tableStatus: "FREE" };
          }
          return table;
        });
        setTableStatuses(updatedTableStatuses);
      } else {
        console.error("Failed to reserve table:", response);
      }
    } catch (error) {
      console.error("Error reserving table:", error);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-10">
      {tableStatuses.map((table, index) => (
        <button
          key={index}
          className={`p-4 rounded-lg ${getStatusColor(table.tableStatus)}`}
        >
          <p className="text-white font-bold">Table {table.tableNumber}</p>
          <p className="text-white">{table.tableStatus}</p>
        </button>
      ))}
    </div>
  );
}

export default TableStatus;
