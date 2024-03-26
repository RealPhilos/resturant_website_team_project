"use client";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useContext } from "react";
import { AuthContext } from "@/app/providers/auth";
import TableModal from "./components/TableModal";

function Basket() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item !== itemToRemove));
    console.log(`Removed ${itemToRemove.name} from cart.`);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState("");

  const [quantityBarOpen, setQuantityBarOpen] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState(null);

  const openQuantityBar = (item) => {
    setQuantityBarOpen(item);
    setEditedQuantity(item.quantity);
  };

  const closeQuantityBar = () => {
    setQuantityBarOpen(null);
    setEditedQuantity(null);
  };

  const updateQuantity = (itemToUpdate) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item === itemToUpdate ? { ...item, quantity: editedQuantity } : item
      )
    );
    closeQuantityBar();
  };

  const cartTotal = cart.reduce((total, item) => {
    return (
      total + Number(item.price.toString().replace("$", "")) * item.quantity
    );
  }, 0);

  // Function to open modal for table number input
  const promptTableNumber = () => {
    setIsModalOpen(true);
  };

  const { toast } = useToast();
  const { user } = useContext(AuthContext); // To retrieve the username from the user logged in.

  const sendOrdersToServer = async (tableNum) => {
    // Check if the cart is empty
    if (cart.length === 0) {
      toast({
        title: "Empty Basket",
        description:
          "Your basket is empty. Please add items before sending the order.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }

    let successItems = []; // Keep track of successfully sent items
    let errorItems = []; // Keep track of items that failed to send
    const username = user?.username || "guest";

    for (const item of cart) {
      const orderData = {
        name: item.name,
        quantity: item.quantity,
        tableNumber: "Table " + tableNum,
        status: "", // Already set to ordered.
        username: username,
      };

      try {
        await api.post("/order/add", orderData);
        successItems.push(item.name); // Add item name to success list
      } catch (error) {
        console.error(`Error sending order for ${item.name}:`, error);
        errorItems.push(item.name); // Add item name to error list
      }
    }

    // After all orders have been attempted
    if (successItems.length > 0) {
      setCart([]);
      toast({
        title: `Orders Sent by ${username}`,
        description: `Orders for ${successItems.join(", ")} sent successfully.`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }

    if (errorItems.length > 0) {
      toast({
        title: `Some Orders Failed by ${username}`,
        description: `Error sending orders for ${errorItems.join(", ")}.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <div className="py-6 flex justify-between items-end">
        <div className="flex items-end gap-10">
          <span className="text-5xl font-serif">Basket</span>
          <br></br>
          <span>All items served fresh with fresh ingredients</span>
        </div>
      </div>

      <hr />

      <div>
        <h2 className="text-4xl font-serif underline my-2">Your Orders</h2>
        {cart.map((item, index) => (
          <div
            className="p-4 rounded-3xl bg-[#FAFAF5] flex justify-between border my-4"
            key={index}
          >
            <div className="flex items-center w-full">
              <img
                src={item.imgPath}
                alt={item.name}
                className="w-24 h-20 rounded-2xl mr-2"
              />

              <div className="mx-6">
                <h3 className="text-2xl font-serif mb-2">
                  {item.name} x{item.quantity}
                </h3>
                <p>
                  Total: £
                  {(
                    Number(item.price.toString().replace("$", "")) *
                    item.quantity
                  ).toFixed(2)}
                </p>
              </div>

              <div style={{ flex: 1 }}>
                <h3 className="text-xl font-serif mb-2">{item.description}</h3>
              </div>
            </div>

            {quantityBarOpen === item ? (
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  value={editedQuantity}
                  min="1"
                  onChange={(e) => setEditedQuantity(Number(e.target.value))}
                  className="border border-gray-500 rounded-2xl text-center w-16 h-7"
                />

                <button
                  className="border border-gray-500 rounded-2xl cursor-pointer px-2 py-1"
                  onClick={() => updateQuantity(item)}
                >
                  OK
                </button>
              </div>
            ) : (
              <div className="flex gap-2 self-center">
                <button
                  className="bg-white rounded-2xl px-2 py-1 cursor-pointer hover:bg-gray-300 border border-gray-500"
                  onClick={() => openQuantityBar(item)}
                >
                  Edit
                </button>

                <button
                  className="bg-red-800 text-white px-2 py-1 mx-1 my-0 cursor-pointer rounded-2xl hover:bg-red-700"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
        <p className="text-2xl font-semibold text-right pr-1">
          Cart Total: £{cartTotal.toFixed(2)}
        </p>
        <button
          onClick={promptTableNumber}
          className="float-right mr-1 text-lg font-semibold text-white bg-green-800 rounded-2xl px-3 py-2 mt-2"
        >
          Order
        </button>
        <TableModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={(tableNum) => {
            setTableNumber(tableNum);
            sendOrdersToServer(tableNum);
          }}
        />

        <button className="float-right mr-1 text-lg font-semibold text-white bg-green-800 rounded-2xl px-3 py-2 mt-2">
          Call waiter
        </button>
      </div>
    </div>
  );
}

export default Basket;
