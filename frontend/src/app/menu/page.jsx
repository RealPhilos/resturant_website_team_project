import React from 'react';

function MenuPage() {
  const menus = [
    {
      name: 'Pizza',
      description: 'Ingredients - Cheese, Tomato, Chicken, Onion',
      price: 12.99,
    },
    {
      name: 'Burger',
      description: 'Ingredients - Cheese, Tomato, Chicken, Onion',
      price: 11.99,
    },
    {
      name: 'Sandwich',
      description: 'Ingredients - Cheese, Tomato, Chicken, Onion',
      price: 10.99,
    },
    {
      name: 'Pasta',
      description: 'Ingredients - Cheese, Tomato, Chicken, Onion',
      price: 11.49,
      image: '/pasta.jpeg',
    },
    {
      name: 'Burger',
      description: 'Ingredients - Cheese, Tomato, Chicken, Onion',
      price: 12.99,
    },
    {
      name: 'Sandwich',
      description: 'Ingredients - Cheese, Tomato, Chicken, Onion',
      price: 12.99,
    },
  ];
  return (
    <div className='w-full grid-cols-3'>
      <h2 className='text-4xl'>Delicious Menus</h2>
      {menus.map((menu, idx) => (
        <div key={idx} className='w-1/5 bg-white rounded shadow-lg'>
          <img
            src='/pizza.jpeg'
            alt='Food'
            className='w-full h-48 object-cover'
          />
          <div className='p-4'>
            <h3 className='text-xl font-bold mb-2'>{menu.name}</h3>
            <p className='text-gray-700'>{menu.description}</p>
            <div className='mt-4 flex justify-between items-center'>
              <span className='text-xl font-bold text-indigo-600'>
                ${menu.price}
              </span>
              <button className='bg-indigo-500 text-white px-4 py-2 rounded'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuPage;
