import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const [payment, setPayment] = useState("cod");
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const {
    getTotalCartAmount,
    token,
    food_list,
    cartItems,
    url,
    setCartItems,
    currency,
    deliveryCharge,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];

    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });


    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + deliveryCharge,
    };

    if (payment === "stripe") {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        toast.error("Something Went Wrong");
      }
    } else {
      let response = await axios.post(url + "/api/order/placecod", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        navigate("/myorders");
        toast.success(response.data.message);
        setCartItems({});
      } else {
        toast.error("Something Went Wrong");
      }
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("to place an order sign in first");
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  }, [token]);

  return (
    <form onSubmit={placeOrder} className="place-order flex justify-between gap-[50px] mx-0 my-[100px]">
      <div className="place-order-left w-full max-w-[max(30%,500px)] [@media(max-width:700px)]:flex-col">
        <p className="title text-[30px] font-semibold mb-[50px]">Delivery Information</p>
        <div className="multi-field flex gap-[10px]">
          <input
            type="text"
            name="firstName" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
            onChange={onChangeHandler}
            value={data.firstName}
            placeholder="First name"
            required
          />
          <input
            type="text"
            name="lastName" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
            onChange={onChangeHandler}
            value={data.lastName}
            placeholder="Last name"
            required
          />
        </div>
        <input
          type="email"
          name="email" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
          onChange={onChangeHandler}
          value={data.email}
          placeholder="Email address"
          required
        />
        <input
          type="text"
          name="street" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
          onChange={onChangeHandler}
          value={data.street}
          placeholder="Street"
          required
        />
        <div className="multi-field flex gap-[10px]">
          <input
            type="text"
            name="city" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
            onChange={onChangeHandler}
            value={data.city}
            placeholder="City"
            required
          />
          <input
            type="text"
            name="state" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
            onChange={onChangeHandler}
            value={data.state}
            placeholder="State"
            required
          />
        </div>
        <div className="multi-field flex gap-[10px]">
          <input
            type="text"
            name="zipcode" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zip code"
            required
          />
          <input
            type="text"
            name="country" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
            required
          />
        </div>
        <input
          type="text"
          name="phone" className="mb-[15px] w-full p-[10px] border-[1px] border-[solid] border-[#C5C5C5] rounded-[4px] outline-[tomato]"
          onChange={onChangeHandler}
          value={data.phone}
          placeholder="Phone"
          required
        />
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
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
              <p>${getTotalCartAmount()===0?0:deliveryCharge}</p>
            </div>
            <hr className="mx-0 my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555555]">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+deliveryCharge}</b>
            </div>
          </div>
        </div>
        <div className="payment flex flex-col gap-[15px]">
          <h2 className="mt-[30px] mb-[20px]">Payment Method</h2>
          <div onClick={() => setPayment("cod")} className="payment-option flex items-center gap-[10px] border-[1px] border-[solid] border-[tomato] p-[15px] rounded-[4px] min-w-[300px] cursor-pointer hover:bg-[#ffe7de]">
            <img
              src={payment === "cod" ? assets.checked : assets.un_checked}
              alt=""
            />
            <p>COD ( Cash on delivery )</p>
          </div>
          <div onClick={() => setPayment("stripe")} className="payment-option flex items-center gap-[10px] border-[1px] border-[solid] border-[tomato] p-[15px] rounded-[4px] min-w-[300px] cursor-pointer hover:bg-[#ffe7de]">
            <img
              src={payment === "stripe" ? assets.checked : assets.un_checked}
              alt=""
            />
            <p>Stripe ( Credit / Debit )</p>
          </div>
        </div>
        <button className="place-order-submit mt-[50px] border-[none] bg-[tomato] text-[white] px-[30px] py-[12px] rounded-[4px] cursor-pointer" type="submit">
          {payment === "cod" ? "Place Order" : "Proceed To Payment"}
        </button>
      </div>
    </form>
  );
};

export default PlaceOrder;
