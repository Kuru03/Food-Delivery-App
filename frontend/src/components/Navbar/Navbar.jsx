import React, { useState } from 'react'
import '../../index.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("Home");
  return (
    <div className='navbar p-5 flex justify-between items-center'>
        <img src={assets.logo} alt="" className='logo w-40 [@media(max-width:900px)]:w-[120px] [@media(max-width:1050px)]:w-[140px]' />
        <ul className='navbar-menu [@media(max-width:750px)]:hidden [@media(max-width:750px)]: [@media(max-width:900px)]:gap-[15px] [@media(max-width:900px)]:text-[16px] [@media(max-width:1050px)]:gap-[20px] [@media(max-width:1050px)]:text-[17px] flex gap-5  text-xl cursor-pointer '>
            <Link to='/'  onClick={()=>setMenu("Home")} className={menu==="Home"?"active border-b-2 border-[#49557e] ":""}>Home</Link>
            <a href='#ExploreMenu'  onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active border-b-2 border-[#49557e]":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-app")}  className={menu==="Mobile-app"?"active border-b-2 border-[#49557e]":""}>Mobile-app</a>
            <a href='#Footer'  onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active border-b-2 border-[#49557e]":""}>Contact-us</a>
        </ul>
        <div className='navbar-right [@media(max-width:900px)]:gap-[20px] [@media(max-width:1050px)]:gap-[30px] flex items-center gap-10'>
            <img className='[@media(max-width:900px)]:w-[20px] [@media(max-width:1050px)]:w-[22px]' src={assets.search_icon} alt="" />
            <div className='navbar-search-icon relative '>
                <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className="dot absolute min-h-[10px] min-w-[10px] bg-[#ff6347] rounded-[8px] top-[-4px] right-[-8px] ">
                </div>
            </div>
            <button className='[@media(max-width:900px)]:p-[7px.20px] [@media(max-width:900px)]:text-[15px] [@media(max-width:1050px)]:px-[25px] [@media(max-width:1050px)]:py-[8px] bg-transparent text-lg bg[#495578] border border-[#ff6347] py-3 px-8 rounded-[50px] cursor-pointer hover:bg-[#fff4f2] duration-300' onClick={()=>setShowLogin(true)}>Sign</button>
        </div>
      
    </div>
  )
}

export default Navbar
