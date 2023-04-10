'use client'

import React from 'react';
import { categories } from './constants';
import { usePathname } from 'next/navigation'
import Navlink from './Navlink';

function Navbar() {
  const pathname = usePathname();
  const isActive = (path:string) => {
    return pathname?.split('/').pop() === path;
  } 
  return (
    <nav className="flex justify-center p-1 border-b-2 border-slate-200 border-opacity-50">
      {categories && categories.map((category) => (
        <Navlink key={category} category={category} isActive={isActive(category)}/> 
      ))}
    </nav>
  )
}

export default Navbar;
