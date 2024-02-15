// ExampleComponent.jsx

// ExampleComponent.jsx

import React, { useEffect, useState } from 'react';
import api from './services/api'; // Import the Axios instance for making API requests

function backendApi() {
  const [data, setData] = useState(null); // State to hold fetched data

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await api.getData(); // Use the getData function from the Axios instance to fetch data from the backend
        setData(result); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromApi(); // Update the state with the fetched data
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div>
      <h1>Data from Backend:</h1>
      {/* Render the fetched data in a preformatted JSON block */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default backendApi;
