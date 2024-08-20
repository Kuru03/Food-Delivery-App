import React, { useState,useContext } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");
  const { setToken, url } = useContext(StoreContext);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLoginHandler = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Sign Up") {
      newUrl += "/api/user/register";
    } else {
      newUrl += "/api/user/login";
    }
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      // loadCartData({ token: response.data.token });
      setShowLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login-popup absolute w-full h-full grid  z-10 ">
      <form
        className="login-popup-container place-self-center w-[max(23vw,330px)] flex-col gap-[25px] px-[30px] py-[25px] rounded-[8px] text-[14px] animate-[fadeIn_0.5s] bg-[white]"
        action=""
        onSubmit={onLoginHandler}
      >
        <div className="flex justify-between items-center text-[black] mb-2">
          <h2 className="font-700 text-xl">{currState}</h2>
          <img
            className="w-[16px] cursor-pointer"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs flex flex-col gap-[15px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              className="outline-[none] border-[1px] border-[solid] border-[#c9c9c9] p-[10px] rounded-[4px]"
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            className="outline-[none] border-[1px] border-[solid] border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="Email"
            placeholder="Your Email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            required
          />
          <input
            className="outline-[none] border-[1px] border-[solid] border-[#c9c9c9] p-[10px] rounded-[4px]"
            type="Password"
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            required
          />
        </div>

        <button
          type="submit"
          className="border-[none] p-[10px] rounded-[4px] mt-2 text-[white] w-full bg-[tomato] text-[15px] cursor-pointer"
        >
          {currState === "Sign Up" ? "Create Account" : "Login here"}
        </button>
        <div className="login-popup-conditions flex gap-[8px] mt-[10px]">
          <input type="checkbox" className="mt-[5px]" required />
          <p>Remember me </p>
        </div>
        {/* <div className='m-2'> */}
        {currState === "Login" ? (
          <p>
            Create New Account{" "}
            <span
              className="text-[tomato] font-medium cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account?{" "}
            <span
              className="text-[tomato] font-medium cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              Login Here
            </span>
          </p>
        )}
        {/* </div> */}
      </form>
    </div>
  );
};

export default LoginPopup;
