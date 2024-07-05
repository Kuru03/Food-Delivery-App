import React from 'react';

const Header = () => {
  return (
    <div className="header [@media(max-width:1050px)]:h-[38vw] h-[34vw] my-[30px]  mx-auto bg-no-repeat bg-contain relative bg-[url('/header_img.png')]">
      <div className="header-contents [@media(max-width:1050px)]:max-w-[45%] [@media(max-width:750px)]:max-w-[55%] absolute flex flex-col gap-[1.5vw] max-w-[50%] items-start bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="text-[max(4.5vw,22px)] font-[500] text-white ">Order your favourite food here</h2>
        <p className="text-[1vw] text-white [@media(max-width:750px)]:hidden">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique impedit corporis eum cumque minima inventore ad, voluptatibus, voluptatum numquam non illum, natus temporibus sunt totam neque dolorem cum illo magni!</p>
        <button className="[@media(max-width:750px)]:px-[4vw] [@media(max-width:750px)]:py-[2vw] bg-white border-none text-[#747474] font-[500]   px-[2.3vw] py-[1vw] rounded-[50px] text-[max(1vw,13px)]">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
