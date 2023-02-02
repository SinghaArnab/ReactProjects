import React from 'react'
import {NavLink} from 'react-router-dom'
import Subnavbar from './SubNavbar/Subnavbar';

const Navbar = () => {

  function myFunction() {
    document.body.classList.toggle("dark-mode");
    var x = document.getElementById("mode");
    x.classList.toggle("mode");
   
  }
  return (
    <div>

    <div className="flex-container">

    <div className='Mode' onClick={myFunction}><i id='mode' className="fa-solid fa-toggle-on"></i></div>
    <div className='logo' ><h1 className='Main_nav_name'>Arnab Singha</h1></div>
      <div className='flex-container gap-2'>
        <div className='Weather_div'><NavLink to="/">Home</NavLink></div>
      </div>

    </div>
    <Subnavbar/>
</div>
  )
}

export default Navbar