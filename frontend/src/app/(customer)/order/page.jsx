"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Order() {
  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const foodItems = [
    { name: "Burger", price: "$5", calories: "250", img: "/pizza.jpeg" },
    { name: "Pizza", price: "$10", calories: "300", img: "/pizza.jpeg" },
    { name: "Sandwich", price: "$10", calories: "300", img: "/pizza.jpeg" },
    { name: "Pasta", price: "$10", calories: "300", img: "/pizza.jpeg" },
    { name: "Rice", price: "$10", calories: "300", img: "/pizza.jpeg" },
    { name: "Stew", price: "$10", calories: "300", img: "/pizza.jpeg" },
    // Add more food items here
  ];

  const openModal = (item) => {
    setCurrentItem(item);
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
      const price = Number(currentItem.price.replace("$", ""));
      // Calculate the total cost
      const cost = price * quantity;
      // Update the total cost state
      setTotalCost(cost);
    }
  }, [quantity, currentItem]);

  const [cart, setCart] = useState([]);

  function Cart({ cart }) {
    const cartTotal = cart.reduce((total, item) => {
      return total + Number(item.price.replace("$", "")) * item.quantity;
    }, 0);

    return (
      <div>
        <h2 className="text-1xl font-semibold underline mb-1">Your Cart</h2>
        {cart.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
              padding: "10px",
              margin: "10px 0",
            }}
          >
            <div>
              <h3 className="text-md text-gray-600 font-semibold mb-2">
                {item.name} x{item.quantity}
              </h3>
              <p>
                Total: $
                {(Number(item.price.replace("$", "")) * item.quantity).toFixed(
                  2
                )}
              </p>
            </div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))}
        {isCartOpen && (
          <p className="text-1xl font-semibold">
            Cart Total: ${cartTotal.toFixed(2)}
          </p>
        )}
      </div>
    );
  }

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOverlayCartOpen, setIsOverlayCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleOverlayCart = () => {
    setIsOverlayCartOpen(!isOverlayCartOpen);
  };

  const removeFromCart = (itemToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item !== itemToRemove));
    console.log(`Removed ${itemToRemove.name} from cart.`);
  };

  return (
    <div>
      <Head>
        <title>Oaxaca Restaurant</title>
        <meta name="description" content="Welcome to Oaxaca Restaurant" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div>
          <nav
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <style jsx global>{`
              .food-item {
                transition: transform 0.2s; /* Animation */
              }

              .food-item:hover {
                transform: scale(
                  1.1
                ); /* (110% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
              }

              body {
                background-color: #ffffff; /* Replace with your preferred color */
              }
            `}</style>
          </nav>

          <div className="py-6 flex justify-between items-end">
            <div className="flex items-end gap-10">
              <span className="text-5xl font-serif">Order</span>
              <span>All items served fresh with fresh ingredients</span>
              <span>
                <div>
                  {/* Other components */}
                  <button onClick={toggleCart}>
                    <img
                      src="/cart-icon.png"
                      width={50}
                      height={50}
                      alt="Cart"
                    />
                  </button>
                  {isCartOpen && <Cart cart={cart} />}
                </div>
              </span>
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

          <hr />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="food-item"
                style={{
                  border: "2px solid black",
                  borderRadius: "10px",
                  padding: "10px",
                  margin: "10px",
                }}
                onClick={() => openModal(item)}
              >
                <div
                  style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
                >
                  <div>
                    <Image
                      src={item.img}
                      width={150}
                      height={150}
                      alt={item.name}
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <h3 className="text-md text-gray-600 mb-2">
                      Price: {item.price}
                    </h3>
                    <p className="text-gray-700 text-sm  mb-2">
                      Calories: {item.calories}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                  <h1 className="text-2xl font-semibold underline mb-4">
                    {currentItem.name}
                  </h1>
                  <Image
                    src={currentItem.img}
                    width={250}
                    height={250}
                    alt={currentItem.name}
                  />
                  <h3 className="text-md text-gray-600 mb-2">
                    Price: {currentItem.price}
                  </h3>
                  <p className="text-gray-700 text-sm  mb-2">
                    Calories: {currentItem.calories}
                  </p>
                  <label className="text-lg font-semibold mb-2">
                    Quantity:
                    <input
                      type="number"
                      value={quantity}
                      min="1"
                      onChange={(e) => setQuantity(e.target.value)}
                      style={{
                        width: "200px",
                        height: "25px",
                        textAlign: "center",
                      }}
                    />
                  </label>
                  <p className="text-lg font-semibold">
                    Total Cost: ${totalCost.toFixed(2)}
                  </p>
                </div>

                <button onClick={addToCart}>Add to Cart</button>
                <button onClick={closeModal}>Close</button>
                {/* Add to cart button and quantity selector */}

                <div>
                  {/* Overlay Cart Button */}
                  <button onClick={toggleOverlayCart}>
                    <img
                      src="/cart-icon.png"
                      width={50}
                      height={50}
                      alt="Cart"
                    />
                  </button>
                  {isOverlayCartOpen && <Cart cart={cart} />}
                </div>

                <style jsx>{`
                  button {
                    padding: 10px 20px;
                    font-size: 20px;
                    font-family: "Montserrat", sans-serif;
                    font-weight: 1000;
                    color: black;
                    background-color: #d3d3d3;
                    margin: 5px;
                    transition: background-color 0.3s ease;
                  }

                  button:hover {
                    background-color: #ffffff;
                  }
                `}</style>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
