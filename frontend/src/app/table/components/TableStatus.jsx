import React, { useState, useEffect } from 'react';
import api from "../../services/api";
import { AuthContext } from "@/app/providers/auth";
import { useContext } from "react";

function TableStatus({ openModal }) {
    const [tableStatuses, setTableStatuses] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchTableStatuses = async () => {
            try {
                const response = await api.get("/table");
                if (response && response.data && Array.isArray(response.data)) {
                    // Check if response.data is an array
                    const sortedData = response.data.sort((a, b) => (a.tableNumber - b.tableNumber));
                    setTableStatuses(sortedData);
                } else {
                    console.error('Invalid response format:', response);
                }
            } catch (error) {
                console.error('Error fetching table statuses:', error);
            }
        };
        fetchTableStatuses();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case 'FREE':
                return 'bg-green-500';
            case 'CLEANING':
                return 'bg-yellow-500';
            case 'OCCUPIED':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    const reserveTable = async (user, tableNumber, tableSize) => {
        console.log('User:', user); // Log user object
        try {
            const response = await api.post(`table/bookTable/${tableNumber}/${user.username}/${tableSize}`);
            if (response.status === 200) {
                // Update table status locally  
                const updatedTableStatuses = tableStatuses.map(table => {
                    if (table.tableNumber === tableNumber) {
                        return { ...table, tableStatus: 'OCCUPIED' }; 
                    }
                    return table;
                });
                setTableStatuses(updatedTableStatuses);
            } else {
                console.error('Failed to reserve table:', response);
            }
        } catch (error) {
            console.error('Error reserving table:', error);
        }
    };
    

    return (
        <div className="grid grid-cols-4 gap-4">
            {tableStatuses.map((table, index) => (
                <button key={index} className={`p-4 rounded-lg ${getStatusColor(table.tableStatus)}`} onClick={() => {
                    if (table.tableStatus === 'FREE') {
                        reserveTable(user, table.tableNumber, table.tableSize); // Pass tableNumber as argument
                    } else {
                        // Optionally handle click on other table statuses
                    }
                }}>
                    <p className="text-white font-bold">Table {table.tableNumber}</p>
                    <p className="text-white">{table.tableStatus}</p>
                </button>
            ))}
        </div>
    );
}

export default TableStatus;
