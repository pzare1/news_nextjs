import Link from 'next/link';
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import Navbar from './Navbar';
import Searchbox from './Searchbox';
function Header() {
  return (
    <header>
    <div className='grid grid-cols-3 p-5 items-center justify-end space-x-2'>    
        <RxHamburgerMenu className='h-8 w-8 cursor-pointer scale-75'/>
        <Link href="/" prefetch={false}>
            <h1 className='text-center sm:text-xl text-sm'>The News Times</h1>
        </Link>
        <div className=' flex items-center justify-end space-x-2'>
            <button className=' hidden md:inline bg-slate-900 text-white px-4 lg:px-4 py-2 lg:py-3 rounded-full dark:bg-slate-700
             hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 hover:shadow-sm
            '>
                Register Now!
            </button>
        </div>
    </div>
    <Navbar/>
    <Searchbox/>
    </header>
  )
}

export default Header