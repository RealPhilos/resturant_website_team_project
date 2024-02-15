import { useState, useEffect } from 'react';

const TableColour = ({ status, onClick }) => {
  const colours = {
    free: 'bg-green-500 hover:bg-green-700',
    unavailable: 'bg-red-500 hover:bg-red-700',
    pending: 'bg-yellow-500 hover:bg-yellow-700'
  };
  
  const [currentColour, setCurrentColour] = useState(colours[status] || 'bg-green-500 hover:bg-green-700');

  useEffect(() => {
    setCurrentColour(colours[status]);
  }, [status]);

  const handleButtonClick = () => {
    const statusColours = Object.values(colours);
    const currentIndex = statusColours.indexOf(currentColour);
    const nextIndex = (currentIndex + 1) % statusColours.length;
    setCurrentColour(statusColours[nextIndex]);
  };

  return (
    <button
    className={`${currentColour} text-white front-bold py-2 px-4 rounded`}
    onClick={handleButtonClick}
    >
      Change Colour
    </button>
  );
};

export default TableColour;
