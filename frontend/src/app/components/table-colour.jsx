import { useState } from 'react';

const TableColour = ({ status, onClick }) => {
  const colours = {
    free: 'green',
    unavailable: 'red',
    pending: 'yellow'
  };
  
  const [currentColour, setCurrentColour] = useState(colours[status] || 'green');

  const handleButtonClick = () => {
    const statusColours = Object.values(colours);
    const currentIndex = statusColours.indexOf(currentColour);
    const nextIndex = (currentIndex + 1) % statusColours.length;
    setCurrentColour(statusColours[nextIndex]);
  };

  return (
    <button
    className={`bg-${currentColour}-500 hover:bg-${currentColour}-700 text-white front-bold py-2 px-4 rounded`}
    onClick={handleButtonClick}
    >
      Change Colour
    </button>
  );
};

export default TableColour;