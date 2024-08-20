import React from 'react'
// import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar w-[18%] min-h-screen border-[1.5px] border-[solid] border-[#A9A9A9] border-t-[0] text-[max(1vw,10px )]'>
      <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]">
        <NavLink to='/add' className="sidebar-option active:bg-[#fff0ed] active:border-[tomato] flex items-center gap-[12px] border-[1px] border-[solid] border-[#A9A9A9] border-r-[0] px-[10px] py-[8px] rounded-tl-[3px] rounded-br-none rounded-tr-none rounded-bl-[3px] cursor-pointer">
            <img src={assets.add_icon} alt=""  className='w-[20px]' />
            <p className='[@media(max-width:900px)]:hidden'>Add Items</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option active:bg-[#fff0ed] active:border-[tomato] flex items-center gap-[12px] border-[1px] border-[solid] border-[#A9A9A9] border-r-[0] px-[10px] py-[8px] rounded-tl-[3px] rounded-br-none rounded-tr-none rounded-bl-[3px] cursor-pointer">
            <img src={assets.order_icon} alt="" className='w-[20px]' />
            <p className='[@media(max-width:900px)]:hidden'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option  flex items-center gap-[12px] border-[1px] border-[solid] border-[#A9A9A9] border-r-[0] px-[10px] py-[8px] rounded-tl-[3px] rounded-br-none rounded-tr-none rounded-bl-[3px] cursor-pointer">
            <img src={assets.order_icon} alt="" className='w-[20px]' />
            <p className='[@media(max-width:900px)]:hidden'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
