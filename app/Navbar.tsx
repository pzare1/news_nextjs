import React from 'react';
import { categories } from './constants';
import Navlink from './Navlink';

function Navbar() {
  return (
    <nav className="flex justify-center">
      {categories && categories.map((category) => (
        <Navlink key={category} category={category} isActive={true}/> 
      ))}
    </nav>
  )
}

export default Navbar;
