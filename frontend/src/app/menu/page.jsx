import React from 'react';
import MenuList from './menuList';

function MenuPage() {
  return (
    <div className='w-full p-6'>
      <h2 className='text-4xl'>Delicious Menus</h2>
      <MenuList />
    </div>
  );
}

export default MenuPage;
