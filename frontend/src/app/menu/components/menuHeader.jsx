"use client";

import clsx from "clsx";

function MenuHeader({ isListView, setIsListView }) {
  return (
    <div className="py-6 flex justify-between items-end">
      <div className="flex items-end gap-10">
        <span className="text-5xl font-serif">Menu</span>
        <span>All items served fresh with fresh ingredients</span>
      </div>
      <div>
        <button
          onClick={() => setIsListView(false)}
          className={clsx(
            "py-2 border-gray-500 border text-black mr-2 px-4 text-sm rounded-3xl",
            !isListView && " bg-green-700 text-white"
          )}
        >
          Default
        </button>
        {/* <button className="py-2 border-gray-500 border text-black mr-2 px-4 text-sm rounded-3xl">
          A-Z
        </button> */}
        <button
          onClick={() => setIsListView(true)}
          className={clsx(
            "py-2 border-gray-500 border text-black mr-2 px-4 text-sm rounded-3xl",
            isListView && " bg-green-700 text-white"
          )}
        >
          List view
        </button>
      </div>
    </div>
  );
}

export default MenuHeader;
