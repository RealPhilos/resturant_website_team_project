import React, { useState, useContext } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AuthContext } from "@/app/providers/auth";

function TableModal({ isOpen, onClose, onSubmit }) {
  const [localTableNumber, setLocalTableNumber] = useState("");
  const { toast } = useToast();
  const { user } = useContext(AuthContext); // Get the user from the AuthContext
  const username = user ? user.username : null; // Get the username

  const handleSubmit = () => {
    if (!localTableNumber.trim()) {
      // Check if the input is empty or just whitespace
      toast({
        title: "Invalid Credentials:",
        description: "Please fill out all required fields.",
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
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      style={{ transition: "opacity .2s ease-in-out" }}
    >
      <div
        className="w-full max-w-md bg-[#FAFAF5] rounded-3xl p-4 border shadow-lg transform transition-all"
        style={{ transition: "transform .2s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
         }}
      >
        <div className="flex items-center text-green-800">
          <img src="/Icon.png" alt="Oaxaca Icon" className="w-12 h-12" />
          <span className="text-xl text-green-800">axaca</span>
        </div>

        <h3 
        className="text-4xl font-serif underline"
        style={{marginTop: '0', paddingBottom: "10px", paddingTop: "10px" }}
        >Payment</h3>
        {username && <h3 className="text-2xl font-semibold mt-2">{username}</h3>}

        <div 
        className="flex flex-col w-3/4 items-center"
        style={{ alignItems: "flex-start" }}
        >
        <label 
        className="text-md text-gray-600"
        style={{marginTop: '0', paddingLeft: "105px", paddingTop: "10px" }}>Card Number</label>
        <div className="flex items-center rounded-md p-2">
        <div>
        <img src="/card.png" alt="Card Icon" className="w-12 h-12" />
        </div>
        <input
        type="text"
        inputMode="numeric"
        pattern="[0-9\s]{13,19}"
        maxLength="19"
        className="ml-2 w-full py-2 pl-2 rounded-md"
        placeholder="xxxx xxxx xxxx xxxx"
        onInput={(e) => {
        e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
        }}
        style={{ border: "2px solid black", fontWeight: "600" }}
      />
      </div>
      </div>
        <div className="flex flex-col w-3/4 items-center">
        <label 
        className="text-md text-gray-600"
        style={{marginTop: '0'}}>Expiration Date</label>
        <div className="flex items-center rounded-md p-2">
        <input
        type="text"
        inputMode="numeric"
        pattern="[0-9]{2}/[0-9]{2}"
        maxLength="5"
        className="ml-2 w-full py-2 pl-2 rounded-md"
        placeholder="MM/YY"
        onInput={(e) => {
          let val = e.target.value;
          if (val.length === 2 && !val.includes('/')) {
            e.target.value = val + '/';
          } else if (val[val.length - 1] === '/' && e.nativeEvent.inputType === 'deleteContentBackward') {
            e.target.value = val.slice(0, -1);
          }
        }}        
      style={{ border: "2px solid black", fontWeight: "600" }}
    />
      </div>
      </div>
      <div className="flex flex-col w-3/4 items-center">
      <label 
      className="text-md text-gray-600"
      style={{marginTop: '0'}}>CVC</label>
      <div className="flex items-center rounded-md p-2">
      <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]{3}"
      maxLength="3"
      className="ml-2 w-full py-2 pl-2 rounded-md"
      placeholder="xxx"
      style={{ border: "2px solid black", fontWeight: "600" }}
      />
      </div>
      </div>

      <div className="flex flex-col w-3/4 items-center">
      <label 
      className="text-md text-gray-600"
      style={{marginTop: '0'}}> Table Number:{' '}</label>
      <div className="flex items-center rounded-md p-2">
      <input
            type="number"
            placeholder="?"
            value={localTableNumber}
            onChange={handleChange}
            min="1"
            max="12"
            className="ml-2 w-full py-2 pl-2 rounded-md"
            style={{
              width: "200px",
              height: "25px",
              textAlign: "center",
              border: "2px solid black",
              fontWeight: "600",
            }}
          />
      </div>
      </div>

        <div
        style={{
          display: "flex",
          justifyContent: "center", // Spread buttons evenly
          marginTop: "20px", // Space above the buttons
          width: "100%",
        }}
        >
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "1.5rem",
              padding: "0.5em 1em",
              margin: "1em 1em",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#90EE90")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#FAFAF5")
            }
          >
            Pay
          </button>
          <button
            onClick={onClose}
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "1.5rem",
              padding: "0.5em 1em",
              margin: "1em 1em",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "#FFCCCB")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "#FAFAF5")
            }
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TableModal;