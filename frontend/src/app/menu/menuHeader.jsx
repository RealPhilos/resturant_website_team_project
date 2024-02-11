import React from "react";

function MenuHeader() {
  return (
    <div className="py-6 flex justify-between items-end">
      <div className="flex items-end gap-10">
        <span className="text-5xl font-serif">Menu</span>
        <span>All items served fresh with fresh ingredients</span>
      </div>
      <div>
        <button className="py-2 bg-green-700 text-white mr-2 px-3 text-sm rounded-3xl">
          Default
        </button>
        <button className="py-2 border-gray-500 border text-black mr-2 px-4 text-sm rounded-3xl">
          A-Z
        </button>
        <button className="py-2 border-gray-500 border text-black text-sm px-3 rounded-3xl">
          List view
        </button>
      </div>
    </div>
  );
}

export default MenuHeader;
