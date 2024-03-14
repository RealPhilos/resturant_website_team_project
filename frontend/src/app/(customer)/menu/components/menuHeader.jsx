"use client";

import React, { useState } from "react";

const FilterButtons = ["A-Z", "Price low to high", "Price high to low"];

/**
 * Functional component that represents the header of the menu.
 *
 * @author - ?
 * @author Luque van der Merwe - ZLAC180 
 * 
 * @returns The rendered header component.
 */
function MenuHeader({ onSortOrderChange }) {
  const [activeButton, setActiveButton] = useState("A-Z");

  /**
   * Handles the button click event and updates the active button state.
   *
   * @param string buttonName - The name of the clicked button.
   */
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    onSortOrderChange(buttonName);
  };

  return (
    <div className="py-4 flex justify-between items-center assign-baseline">
      <div className="flex items-end gap-4">
        <span className="text-l font-serif">All items served fresh with fresh ingredients</span>
      </div>
      <div>
        {FilterButtons.map((buttonName) => (
          <button
            key={buttonName}
            className={
              buttonName === activeButton
                ? "py-1.5 bg-green-700 text-white mr-2 px-2.5 text-sm rounded-2xl"
                : "py-1.5 border-gray-500 border text-black mr-2 px-3 text-sm rounded-2xl"
            }
            onClick={() => handleButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MenuHeader;

