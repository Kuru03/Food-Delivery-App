import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";


const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart ,url} = useContext(StoreContext);
  return (
    <div className="food-item w-[100%] m-auto rounded-[15px] shadow-custom duration-100 animate-fadeInFast">
      <div className="food-item-img-container relative">
        <img
          className="food-item-img w-[100%]
         rounded-t-[15px]"
          src={url + "/images/" +image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          ></img>
        ) : (
          <div className="flex items-center gap-[10px] p-[6px] bg-white absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50px]">
            <img
              className="w-[30px]"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
            ></img>
            <p>{cartItems[id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
            ></img>
          </div>
        )}
      </div>
      <div className="food-item-info p-[20px]">
        <div className="food-item-name-rating flex items-center justify-between mb-[10px]">
          <p className="text-[20px]  font-[500]">{name}</p>
          <img className="w-[70px] " src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[12px] text-[#676767]">
          {description}
        </p>
        <p className="food-item-price text-[#ff6347] font-[500] my-[10px] mx-0">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
