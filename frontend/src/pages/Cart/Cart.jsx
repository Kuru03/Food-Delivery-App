import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <div className="cart mt-[100px] ">
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
                  className="py-[10px] cart-items-title cart-items-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] text-[grey] text-[max(1)]"
                >
                  <img className="w-[50px]" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cursor-pointer" onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                <hr className="border-none bg-[#e2e2e2] h-[1px] " />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>
            Cart Totals
          </h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p> {0} </p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Charges</p>
            <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
            <button>Proceed with Checkout</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code ,Enter it here </p>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
