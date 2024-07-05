import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display mt-[30px]">
      <h2 className="text-[max(2vw,24px)] font-[600]">Top Dishes near you</h2>
      <div className="food-display-list grid  grid-cols-auto-fill-240 mt-[30px] gap-[30px] gap-x-[50px] ">
        {food_list.map((item, index) => {
            // console.log("helo",category,item.category)
          if (category === "All" || category === item.category) {
            // console.log(category)
            return <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
          }
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
