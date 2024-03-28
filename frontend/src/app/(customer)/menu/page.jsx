"use client";
import React, { useState, useEffect } from "react";
import MenuList from "./components/menuList";
import MenuHeader from "./components/menuHeader";
import { AuthContext } from "@/app/providers/auth";
import { useContext } from "react";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";

/**
 * MenuPage component is use for rendering the menu items and handling modal actions.
 *
 * @author Zlac456 - Krish Macwan
 * @author WLIS205 - Parvesh Kumar
 */
function MenuPage() {
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [currentItemImage, setCurrentItemImage] = useState(null);

  const openModal = (item) => {
    setCurrentItem(item);
    setCurrentItemImage(item.imgPath); // Set the current item's image
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setQuantity(1); // reset quantity when closing modal
  };

  const addToCart = () => {
    // Check if the item is already in the cart
    const existingCartItem = cart.find(
      (item) => item.name === currentItem.name
    );

    if (existingCartItem) {
      // If the item is already in the cart, increase the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.name === currentItem.name
            ? { ...item, quantity: Number(item.quantity) + Number(quantity) }
            : item
        )
      );
    } else {
      // If the item is not in the cart, add it
      const cartItem = { ...currentItem, quantity: Number(quantity) };
      setCart((prevCart) => [...prevCart, cartItem]);
    }

    console.log(`Added ${quantity} of ${currentItem.name} to cart.`);
    closeModal();
  };

  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (currentItem) {
      // Remove the dollar sign and convert the price to a number
      const price = Number(currentItem.price.toString().replace("$", ""));
      // Calculate the total cost
      const cost = price * quantity;
      // Update the total cost state
      setTotalCost(cost);
    }
  }, [quantity, currentItem]);

  const [cart, setCart] = useState(() => {
    // Try to load the cart from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    // If the cart was not in localStorage, default to an empty array
    return [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="w-full">
      <hr />
      <MenuList openModal={openModal} />
      {showModal && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent
              zIndex: 1000,
            }}
            onClick={closeModal}
          />{" "}
          {/* This div is the overlay */}
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#FAFAF5",
              padding: "1em",
              borderRadius: "1.5rem", // Make the edges rounded
              border: "1px solid #E5E7EB", // Apply a border
              zIndex: 1001,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="flex items-center text-green-800">
          <img src="/Icon.png" alt="Oaxaca Icon" className="w-12 h-12" />
          <span className="text-xl text-green-800">axaca</span>
        </div>
              <h1 className="text-5xl font-serif underline mb-4">
                {currentItem.name}
              </h1>
              <Image
                src={currentItem.imgPath} //Image
                width={250}
                height={250}
                alt={currentItem.name}
                style={{
                  borderRadius: "1.5rem", // Make the edges rounded
                  border: "1px solid #E5E7EB", // Apply a border
                }}
              />
              <h3 className="text-md text-gray-600 mb-2">
                Price: £{currentItem.price}
              </h3>
              <p className="text-gray-700 text-sm  mb-2">
                {currentItem.description}
              </p>
              <label className="text-lg font-semibold mb-2">
                Quantity:{' '}
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(e.target.value)}
                  style={{
                    width: "200px",
                    height: "25px",
                    textAlign: "center",
                    borderRadius: "1.5rem", // Make the edges rounded
                    border: "1px solid #E5E7EB", // Apply a border
                  }}
                />
              </label>
              <p className="text-lg font-semibold">
                Total Cost: £{(quantity * currentItem.price).toFixed(2)}
              </p>
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
                onClick={addToCart}
              >
                Add to Cart
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
                onClick={closeModal}
              >
                Close
              </button>

              <Link href="/basket">
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
                    (e.target.style.backgroundColor = "#FAFAF5")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#FFFFFF")
                  }
                >
                  <img src="/cart-icon.png" width={40} height={40} alt="Cart" />
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
      { (user && (user.role == "Chef"  || user.role == "Waiter")) && 
      <>
        
        <Link href="/admin-menu">
          <button className="py-1.5 bg-green-700 text-white mr-2 px-2.5 text-sm rounded-2xl">
            Change Menu
          </button>
        </Link>
        <br></br>
        <hr />
        <br></br>
      </>
      }
     
     <br></br>
     <br></br>

    </div>
  );
}

export default MenuPage;