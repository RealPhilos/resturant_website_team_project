"use client";
import TableColour from "../components/table-colour";
import { useState } from 'react';
import Footer from '../components/footer';
import Link from "next/link";

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
</div>


  
      <hr />
      
      <div className="grid grid-cols-3 gap-4 bg-gray-300 py-4 mt-8">
        {/* Left Column - 4 tables */}
        <div className="flex flex-col gap-4 items-center">
          {tableStates.slice(0, 4).map((table, index) => (
            <TableColour
              key={table.id}
              index={index} // Pass index as a prop
              status={table.status}
              size = "medium"
              onClick={() => updateTableStatus(table.id, 'free')}
            />
          ))}
        </div>
        
        {/* Middle Column - 4 */}
        <div className="flex flex-col gap-4 items-center">
          {tableStates.slice(4, 8).map((table, index) => (
            <TableColour
              key={table.id}
              index={index + 4} // Index + 4 so it counts tables properly and starts at 5.
              size = "medium"
              status={table.status}
              onClick={() => updateTableStatus(table.id, 'free')}
            />
          ))}
          <span>Reserve a "Green" Table.</span>
        </div>

        {/* Right Column - 4 */}
        <div className="flex flex-col gap-4 items-center">
          {tableStates.slice(8, 12).map((table, index) => (
            <TableColour
              key={table.id}
              index={index + 8}
              status={table.status}
              size = "medium"
              onClick={() => updateTableStatus(table.id, 'free')}
            />
          ))}
        </div>
        
        </div>
        
        <button className="flex flex-col bottom-8 gap-4 w-full bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-md w-25 h-25 mt-8  items-center"
        >Reserve</button>

        <div className="min-h-screen">
        
        <header>
          
        </header>
        <main>
          
        </main>

        <br></br>
      <hr />
      <br></br>
      <br></br>




        <footer>
        <div
          className="footer"
          style={{ display: "flex", justifyContent: "left" }}
        >
          <div style={{ marginRight: "5em", textAlign: "center" }}>
            <h1 className="text-l font-serif mb-1">Other Information</h1>
            <ul>
              <li className="text-xs">
                <Link href="/">About Us</Link>
              </li>
              <li className="text-xs">
                <Link href="/">Careers</Link>
              </li>
              <li className="text-xs">
                <Link href="/">More Oaxaca</Link>
              </li>
              <li className="text-xs">
                <Link href="/">Help</Link>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: "5em", textAlign: "center" }}>
            <h1 className="text-l font-serif mb-1">Follow Us!</h1>
            <ul>
              <li className="text-xs">
                <Link href="/">Instagram</Link>
              </li>
              <li className="text-xs">
                <Link href="/">Twitter</Link>
              </li>
              <li className="text-xs">
                <Link href="/">Facebook</Link>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: "20em", textAlign: "center" }}>
            <h1 className="text-l font-serif mb-1">Download Our App!</h1>
            <ul>
              <li className="text-xs">
                <Link href="/">App Store</Link>
              </li>
              <li className="text-xs">
                <Link href="/">Google Play Store</Link>
              </li>
            </ul>
          </div>
          <div style={{ textAlign: "center" }}>
            <span className="text-xl text-green-800">Oaxaca Restaurant</span>
          </div>
        </div>

        <br></br>
        <hr />

        <div className="text-xs" style={{ textAlign: "right" }}>
          <Link href="/">Privacy Statement |</Link>
          <Link href="/"> Terms & Conditions |</Link>
          <Link href="/"> Cookie Policy </Link>
          {/* Add other links here */}
        </div>

        <p className="text-xs" style={{ textAlign: "right" }}>
          © 2023 – 2024 Oaxaca’s. All Rights Reserved
        </p>
      </footer>
      </div>
    </div>
  );  
};

export default TablePage;