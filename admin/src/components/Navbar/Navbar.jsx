import React from 'react'
// import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center px-[4%] py-[8px]'>
      <img className='logo w-[max(10%,80px)]' src={assets.logo} alt="" />
      <img className='profile w-[40px]' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
