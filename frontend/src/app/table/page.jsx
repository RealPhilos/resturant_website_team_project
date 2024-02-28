
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
    { id: 6, status: 'free' },
    { id: 7, status: 'free'},
    { id: 8, status: 'free'},
    { id: 9, status: 'free'},
    { id: 10, status: 'free'},
    { id: 11, status: 'free'}, 
    { id: 12, status: 'free'}
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
          <span>Green is Ready, Red is Unavailable, Yellow is Pending.</span>
        </div>
      </div>
  
      <hr />
      
      <div className="grid grid-cols-3 gap-4">
      {/* Left Column - 4 tables */}
      <div className="flex flex-col">
        {tableStates.slice(0, 4).map((table, index) => (
          <TableColour
            key={table.id}
            index={index} // Pass index as a prop
            status={table.status}
            onClick={() => updateTableStatus(table.id, 'free')}
          />
        ))}
      </div>

        {/* Middle Column - 4 */}
        <div className="flex flex-col">
          {tableStates.slice(4, 8).map((table, index) => (
            <TableColour
              key={table.id}
              index={index + 4} // Index + 4 so it counts tables properly and starts at 5.
              status={table.status}
              onClick={() => updateTableStatus(table.id, 'free')}
            />
          ))}
        </div>

        {/* Right Column - 4 */}
        <div className="flex flex-col">
          {tableStates.slice(8, 12).map((table, index) => (
            <TableColour
              key={table.id}
              index={index + 8}
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