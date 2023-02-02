import React from 'react'
import { NavLink } from 'react-router-dom';


const Subnavbar = () => {
  return (

<div className='w-[100%]'>
    <nav className="h-[50px] bg-white border-gray-200  dark:bg-[#434242] flex  items-center mx-auto lg:flex-row sm:flex-col mainnav_contain">
        <div className="container flex justify-center items-start  lg:text-left sm:text-center w-[15%]">
            <span className="self-center font-semibold whitespace-nowrap dark:text-white">
            <span className='mr-[10px] subnavlogo'>PROJECTS <i className="fa-solid fa-angles-right"></i></span></span>
        </div>
            <div className='w-[85%] h-[100%] flex justify-start items-center subnavitems'>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center hover:bg-green-400  focus:bg-green-600 " ><NavLink to="/">WeatherApp</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Filterdata">Data Filter</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  "  ><NavLink to="/Product">Product</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Todo">Todo</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Fakeuser">Fake User</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Quiz">Quiz</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Curd">Curd</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/RandonQuote">Random Quote</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Firebasecart">Firebase Cart</NavLink></div>
            <div className="h-[100%]  w-[120px] text-white font-semibold flex justify-center items-center  hover:bg-green-400  focus:bg-green-600  " ><NavLink to="/Bmicalculator">BMI Calculator</NavLink></div>
           </div>
      </nav>
</div>
  )
}

export default Subnavbar