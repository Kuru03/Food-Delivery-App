import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu flex flex-col gap-5" id="ExploreMenu">
      <h1 className="text-[#262626] font-[500]">Explore Our Menu</h1>
      <p className="explore-menu-text [@media(max-width:1050px)]:max-w-full [@media(max-width:1050px)]:text-[14px] max-w-[60%] text-[#808080]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
        inventore, corrupti distinctio deleniti iusto modi quasi ipsam ipsa
        laboriosam assumenda? Exercitationem fuga accusantium ullam aut dolor
        eveniet excepturi assumenda aspernatur.
      </p>

      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-5 mx-0 overflow-x-scroll no-scrollbar">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={`${
                  category === item.menu_name
                    ? "bg-[#ff6347] border-[2px] p-[2px]"
                    : ""
                } w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] duration-200`}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className="text-[#747474] text-[max(1.4vw,16px)] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] mx-0 h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
};

export default ExploreMenu;
