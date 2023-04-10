'use client'

import React, { useState } from 'react'

function Searchbox() {
    const [value, setvalue] = useState('')
  return (
    <form className='flex justify-between items-center mx-auto max-w-6xl'>
        <input type='text' className='w-full flex-1 h-10 border-none outline-none'/>
        <button className='bg-orange-500 text-white p-2 mt-2'>Search</button>
    </form>
  )
}

export default Searchbox