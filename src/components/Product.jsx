import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";
const Product = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item Added to cart");
  };

  const removeCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed !!");
  };

  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
    "
    >
      <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
        {item.title}
      </div>
      <div className="w-40 text-gray-500 font-normal text-[10px] texct-left">
        <p>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} className="h-full w-full" />
      </div>

      <div className="flex justify-between gap-11 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${item.price}</p>
        <div onClick={toggleSelected}>
          {selected ? (
            <button
              onClick={removeCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              <p>Remove Item</p>
            </button>
          ) : (
            <button
              onClick={addToCart}
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
            >
              {" "}
              <p>Add to cart</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
