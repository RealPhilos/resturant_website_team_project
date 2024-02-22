
"use client";
import TableColour from "../components/table-colour";
import { useState } from 'react';

const TablePage = () => {
  // Define the initial state of the tables
  const initialTableStates = [
    { id: 1, status: 'free' },
    { id: 2, status: 'free' },
    { id: 3, status: 'free' },
    { id: 4, status: 'free' },
    { id: 5, status: 'free' },
    { id: 6, status: 'free' }
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
    <div>
      <div className="py-6 flex justify-between items-end">
        <div className="flex items-end gap-10">
          <span className="text-5xl font-serif">Tables</span>
          <span>Red is Unavailable, Yellow is Pending, Green is Ready.</span>
        </div>
      </div>
  
      <hr />
      
      <div>
        {/* First Row */}
        <div className="flex justify-center items-center">
          {tableStates.slice(0, 3).map(table => (
            <TableColour
              key={table.id}
              status={table.status}
              onClick={() => updateTableStatus(table.id, 'free')}
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex justify-center items-center">
          {tableStates.slice(3, 6).map(table => (
            <TableColour
              key={table.id}
              status={table.status}
              onClick={() => updateTableStatus(table.id, 'free')}
            />
          ))}
        </div>
      </div>
    </div>
  );  
};

export default TablePage;