import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart  my-24 mx-0; ">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-[grey] text-[max(1)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className="border-none bg-[#e2e2e2] h-[1px] " />
        {food_list.map((item, index) => {
          console.log(cartItems);
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  key={index}
                  className="py-[10px] cart-items-title cart-items-item my-2 mx-0 grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-[grey] text-[max(1)]"
                >
                  <img className="w-[50px]" src={url + "/images/" +item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr className="border-none bg-[#e2e2e2] h-[1px] " />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-[80px] flex justify-between gap-[max(12vw,20px)] [@media(max-width:750px)]:flex-col-reverse">
        <div className="cart-total flex-[1] flex flex-col gap-[20px]">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555555]">
              <p>Sub Total</p>
              <p> ${getTotalCartAmount()}</p>
            </div>
            <hr className="mx-0 my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555555]">
              <p>Delivery Charges</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className="mx-0 my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555555]">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <button onClick={()=>navigate('/order')} className="border-[none] text-[white] bg-[#FF4C24] w-[max(15vw,200px)] px-0 py-[12px] rounded-[4px] cursor-pointer">
              Proceed with Checkout
            </button>
          </div>
        </div>
        <div className="cart-promocode flex-[1] [@media(max-width:750px)]:justify-start">
            <div>
              <p className="text-[#555555]">
                If you have a promo code, Enter it here
              </p>
              <div className="cart-promocode-input mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
                <input className="bg-transparent border-none outline-none pl-[10px]" type="text" placeholder="promo code" />
                <button className="w-[max(10vw,150px)] px-[5px] py-[12px] bg-[black]  border-none text-[white] rounded-[4px]">
                  Submit
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
