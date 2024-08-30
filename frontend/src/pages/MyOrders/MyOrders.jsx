import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token, currency } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders mx-0 my-[50px]">
      <h2>My Orders</h2>
      <div className="container flex flex-col gap-[20px] mt-[30px]">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="my-orders-order grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] items-center gap-[30px] text-[14px] px-[20px] py-[10px] text-[#454545] border-[1px] border-[solid] border-[tomato] [@media(max-width:900px)]:grid-cols-[1fr_2fr_1fr] [@media(max-width:900px)]:gap-y-[5px] [@media(max-width:900px)]:text-[12px]"
            >
              <img className="w-[50px]" src={assets.parcel_icon} alt="" />
              <p className="font-medium text-[#454545]">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="font-medium text-[#454545]">
                {currency}
                {order.amount}.00
              </p>
              <p className="font-medium text-[#454545]">
                Items: {order.items.length}
              </p>
              <p className="font-medium text-[#454545]">
                <span className="text-[tomato]">&#x25cf;</span>{" "}
                <b className="font-medium text-[#454545]">{order.status}</b>
              </p>
              <button
                className="[@media(max-width:900px)]:text-[10px] border-[none] px-0 py-[12px] rounded-[4px] bg-[#FFE1E1] cursor-pointer text-[#454545]"
                onClick={fetchOrders}
              >
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
