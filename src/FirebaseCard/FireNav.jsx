import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const FireNav = () => {
  return (
    <div>
     <nav className="h-[50px] bg-white border-gray-200  dark:bg-[#0E5E6F] flex  items-center mx-auto lg:flex-row sm:flex-col mainnav_contain text-black">
        <div className="container flex justify-center items-start  lg:text-left sm:text-center w-[15%]">
            <span className="self-center font-semibold whitespace-nowrap dark:text-black">
            <span className='mr-[10px] subnavlogo2'><span className='text-[#DC0000]  text-[20px] logoname'>Fire C</span>U<span className='text-[#DC0000]  text-[20px] logoname'>R</span>D </span></span>
        </div>
            <div className='w-[85%] h-[100%] flex justify-start items-center subnavitems'>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Firebasecart/">Home</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Firebasecart/Showuser">Add User</NavLink></div>
           </div>
      </nav>
      <Outlet/>
      
    </div>
  )
}

export default FireNav
