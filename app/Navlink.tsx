import Link from 'next/link';
import React from 'react'
type Props =  {
    category:string,
    isActive:boolean
};
function Navlink({category,isActive}: Props) {
  return (
    <>
        <Link className='navlink' href={`/news/${category}`}>{category}</Link>
    </>
  )
}

export default Navlink