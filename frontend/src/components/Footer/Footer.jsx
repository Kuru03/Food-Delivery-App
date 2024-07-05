import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer flex mt-[100px] flex-col gap-[20px] pt-[80px] py-[20px] px-[8vw] items-center bg-[#323232] text-[#d9d9d9]"  id="Footer">
      <div className="footer-content [@media(max-width:750px)]:flex [@media(max-width:750px)]:flex-col [@media(max-width:750px)]:gap-[35px] w-[100%] gap-[80px] grid grid-cols-[2fr,1fr,1fr]">
        <div className="footer-content-left flex flex-col  item-start gap-[20px] ">
            <img src={assets.logo} className="w-[14vw] mt-4 mb-2 h-auto " alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quisquam veniam, qui commodi pariatur dolor eveniet sequi eos laboriosam corporis vitae culpa doloremque ipsa! Natus est ullam magni qui delectus.</p>
            <div className="footer-social-icons flex ">
                <img src={assets.facebook_icon} className="w-[40px] mr-[15px]" alt="" />
                <img src={assets.linkedin_icon} className="w-[40px] mr-[15px]" alt="" /><img src={assets.twitter_icon} className="w-[40px] mr-[15px]" alt="" />
            </div>
        </div>
        <div className="footer-content-center flex flex-col item-start gap-[20px] ">
            <h2 className="text-3xl font-bold  mt-4 mb-2 ">Company</h2>
            <ul>
                <li className="list-none cursor-pointer mb-[10px]">Home</li>
                <li className="list-none cursor-pointer mb-[10px]">About Us</li>
                <li className="list-none cursor-pointer mb-[10px]">Delivery</li>
                <li className="list-none cursor-pointer mb-[10px]">Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right flex flex-col item-start gap-[20px] ">
            <h2 className="text-3xl font-bold  mt-4 mb-2 ">Get In Touch</h2>
            <ul>
                <li className="list-none cursor-pointer mb-[10px]">+1-121-121-234</li>
                <li className="list-none cursor-pointer mb-[10px]">contact@kurush.com</li>
            </ul>
            
        </div>
      </div>
      <hr className="[@media(max-width:750px)]:text-center w-[100%] h-[2px] my-[20px] mx-0 bg-[#808080]"/>
      <p className="footer-copyright">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aliquam blanditiis nemo</p>    
    </div>
  );
};

export default Footer;
