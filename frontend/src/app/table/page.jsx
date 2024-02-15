'use client'

import TableColour from "../components/table-colour";
import { useState } from 'react';

const TablePage = () => {
  // Define the initial state of the tables
  const initialTableStates = [
    { id: 1, status: 'free' },
    { id: 2, status: 'unavailable' },
    { id: 3, status: 'pending' }
    // Add more table states as needed
  ];

  // State to manage table states
  const [tableStates, setTableStates] = useState(initialTableStates);

  // Function to update the status of a table
  const updateTableStatus = (tableId, status) => {
    // Create a new array of table states with the updated status for the specific table
    const updatedTableStates = tableStates.map(table => {
      if (table.id === tableId) {
        return { ...table, status: status };
      }
      return table;
    });

    // Update the state with the new array of table states
    setTableStates(updatedTableStates);
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      {/* Map through the table states and render a TableColour component for each table */}
      {tableStates.map(table => (
        <TableColour
          key={table.id}
          status={table.status}
          onClick={() => updateTableStatus(table.id, 'free')} // Pass a function to handle table status updates
        />
      ))}
    </div>
  );
};

export default TablePage;