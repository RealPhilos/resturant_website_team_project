'use client'

import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'


export default function Order() {

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  const foodItems = [
    { name: 'Burger', price: '$5', calories: '250', img: '/pizza.jpeg' },
    { name: 'Pizza', price: '$10', calories: '300', img: '/pizza.jpeg' },
    // Add more food items here
  ]

  const openModal = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setQuantity(1); // reset quantity when closing modal
  };

  const addToCart = () => {
    // Add the item and quantity to your cart here
    console.log(`Added ${quantity} of ${currentItem.name} to cart.`);
    closeModal();
  };


  return (
    <div>
      <Head>
        <title>Oaxaca Restaurant</title>
        <meta name="description" content="Welcome to Oaxaca Restaurant" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div>
          <nav style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <style jsx>{`
              button {
              padding: 10px 20px;
              font-size: 20px;
              font-family: 'Montserrat', sans-serif;
              font-weight: 1000;
              color: black;
              background-color: #ADD8E6;
              margin: 5px;
              transition: background-color 0.3s ease;
            }

              button:hover {
                background-color: #FFFFFF;
            }

          `}</style>

           <style jsx global>{`

            .food-item {
              transition: transform .2s; /* Animation */
            }

            .food-item:hover {
              transform: scale(1.1); /* (110% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
            }

            body {
              background-color: #FFFFFF; /* Replace with your preferred color */
            }
          `}</style>
        </nav>
        
        <div className="py-6 flex justify-between items-end">
      <div className="flex items-end gap-10">
        <span className="text-5xl font-serif">Order</span>
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
        {foodItems.map((item, index) => (
           <div key={index} className="food-item" style={{ border: '2px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }} onClick={() => openModal(item)}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <div>
            <Image src={item.img} width={150} height={150} alt={item.name} />
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Calories: {item.calories}</p>
            </div>
          </div>
        </div>
        ))}
          </div>
          {showModal && (
            <>
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent
              zIndex: 1000,
            }} onClick={closeModal} /> {/* This div is the overlay */}

            <div style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#FAFAF5',
              padding: '1em',
              zIndex: 1001,
           }}>

          <h2>{currentItem.name}</h2>
          <Image src={currentItem.img} width={150} height={150} alt={currentItem.name} />
          <p>Price: {currentItem.price}</p>
          <p>Calories: {currentItem.calories}</p>
          <label>
            Quantity:
            <input type="number" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)} />
          </label>

          <button onClick={addToCart}>Add to Cart</button>
          <button onClick={closeModal}>Close</button>
          {/* Add to cart button and quantity selector */}

          <style jsx>{`
            button {
              padding: 10px 20px;
              font-size: 20px;
              font-family: 'Montserrat', sans-serif;
              font-weight: 1000;
              color: black;
              background-color: #d3d3d3;
              margin: 5px;
              transition: background-color 0.3s ease;
            }

            button:hover {
              background-color: #FFFFFF;
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
