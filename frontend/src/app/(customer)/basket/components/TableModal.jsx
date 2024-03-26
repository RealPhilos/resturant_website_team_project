import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

function TableModal({ isOpen, onClose, onSubmit }) {
  const [localTableNumber, setLocalTableNumber] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!localTableNumber.trim()) {
      // Check if the input is empty or just whitespace
      toast({
        title: "Please input a table number",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    onSubmit(localTableNumber);
    onClose(); // Close the modal
  };

  const handleChange = (e) => {
    setLocalTableNumber(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      style={{ transition: "opacity .2s ease-in-out" }}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl p-4 border shadow-lg transform transition-all"
        style={{ transition: "transform .2s" }}
      >
        <h3 className="text-xl font-semibold mb-4 text-center">Table Number</h3>
        <div className="flex justify-center w-full mb-4">
          <input
            type="number"
            placeholder=""
            value={localTableNumber}
            onChange={handleChange}
            min="1"
            max="12"
            className={
              "border border-gray-500 rounded-2xl text-center w-16 h-7"
            }
          />
        </div>
        <div className="flex justify-around">
          <button
            onClick={handleSubmit}
            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full transition duration-200"
          >
            Order
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableModal;
