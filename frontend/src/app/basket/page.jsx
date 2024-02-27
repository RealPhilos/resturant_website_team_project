"use client";
import React, { useState, useEffect } from "react";

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
    console.log(
      `Updated quantity of ${itemToUpdate.name} to ${editedQuantity}.`
    );
    closeQuantityBar();
  };

  const cartTotal = cart.reduce((total, item) => {
    return (
      total + Number(item.price.toString().replace("$", "")) * item.quantity
    );
  }, 0);

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
      <br></br>

      <div>
        <h2 className="text-4xl font-serif underline mb-1">Your Orders</h2>
        {cart.map((item, index) => (
          <div
            className="p-4 rounded-3xl bg-[#FAFAF5]"
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid #E5E7EB",
              borderRadius: "1.5rem",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <img
                src={item.imgPath}
                alt={item.name}
                width={100}
                height={100}
                style={{
                  borderRadius: "1.5rem",
                  border: "1px solid #E5E7EB",
                  marginRight: "10px",
                }}
              />

              <div
                style={{
                  marginRight: "50px",
                }}
              >
                <h3 className="text-2xl font-serif mb-2">
                  {item.name} x{item.quantity}
                </h3>
                <p>
                  Total: $
                  {(
                    Number(item.price.toString().replace("$", "")) *
                    item.quantity
                  ).toFixed(2)}
                </p>
              </div>

              <div style={{ flex: 1 }}>
                <h3 className="text-1xl font-serif mb-2">{item.description}</h3>
              </div>
            </div>

            {quantityBarOpen === item ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <input
                  type="number"
                  value={editedQuantity}
                  min="1"
                  onChange={(e) => setEditedQuantity(Number(e.target.value))}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "1.5rem",
                    padding: "0.5em 1em",
                    margin: "1em 0",
                    cursor: "pointer",
                    alignItems: "center",
                    width: "200px",
                    height: "25px",
                    textAlign: "center",
                  }}
                />

                <button
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "1.5rem",
                    padding: "0.5em 1em",
                    margin: "1em 0",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#90EE90")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#FAFAF5")
                  }
                  onClick={() => updateQuantity(item)}
                >
                  OK
                </button>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "1.5rem",
                    padding: "0.5em 1em",
                    margin: "1em 0",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#90EE90")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#FAFAF5")
                  }
                  onClick={() => openQuantityBar(item)}
                >
                  Edit
                </button>

                <button
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    borderRadius: "1.5rem",
                    padding: "0.5em 1em",
                    margin: "1em 0",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#FFCCCB")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#FAFAF5")
                  }
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
        <p className="text-2xl font-semibold">
          Cart Total: ${cartTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default Basket;
