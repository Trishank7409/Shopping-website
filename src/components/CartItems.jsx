import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";
import "./CartItems.css";
const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  };
  return (
    <div 
    
    className="cart-item flex w-auto items-center justify-between border-b-2 border-slate-300
    hover:scale-105 transition duration-300 ease-in gap-4 p-4 mt-10 ml-5 rounded-xl  
    // hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
    "
    >
      <div className="
      h-[180px] 
        ">
      <div className=" h-full w-[180px]">
        <img src={item.image} className='h-full w-full object-scale-down' alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="font-bold text-slate-700 text-lg">{item.title
        // .split(" ").slice(0, 10).join(" ") + "..."
        }</h1>
        <div>{item.description}</div>
      <div className="text-green-700 font-bold flex justify-between place-items-baseline">${item.price} 
      
      <button className="rounded-full m-4 h-8 w-8 bg-red-200 flex justify-center place-items-center" onClick={removeFromCart}>
        <AiFillDelete className="text-red-600" />
      </button>

      </div>
     
      </div>
     
     
    </div>
  );
};

export default CartItems;
