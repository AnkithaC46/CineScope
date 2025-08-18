import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex  space-x-8 items-center pl-3 py-4 bg-gray-900 '>
        <img src={logo} className='w-[50px]'  alt=' ' />
        <Link to="" className='text-white text-xl '>Home</Link>
        <Link to="/watchlist" className='text-white text-xl '>WatchList</Link>
      
    </div>
  )
}

export default Navbar
