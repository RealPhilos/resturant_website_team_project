
"use client";

import React, { useState } from "react";

const FilterButtons = ["Default", "Price low to high", "Price high to low"];

/**
 * Functional component that represents the header of the menu.
 *
 * @returns The rendered header component.
 */
function MenuHeader() {
  const [activeButton, setActiveButton] = useState("Default");

  /**
   * Handles the button click event and updates the active button state.
   *
   * @param string buttonName - The name of the clicked button.
   */
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="py-6 flex justify-between items-end">
      <div className="flex items-end gap-10">
        <span className="text-5xl font-serif">Menu</span>
        <span>All items served fresh with fresh ingredients</span>
      </div>
      <div>
        {FilterButtons.map((buttonName) => (
          <button
            key={buttonName}
            className={
              buttonName === activeButton
                ? "py-2 bg-green-700 text-white mr-2 px-3 text-sm rounded-3xl"
                : "py-2 border-gray-500 border text-black mr-2 px-4 text-sm rounded-3xl"
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
