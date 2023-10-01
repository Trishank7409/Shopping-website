import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItems from "../components/CartItems";
const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className="flex mx-auto pl-[20%] pt-5 ">
      {cart.length > 0 ? (
        <div className="flex w-full gap-10">
          <div className="flex flex-col  ">
            {cart.map((item, index) => {
              return <CartItems key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div className="h-[100vh] flex flex-col w-[100%] pt-[10%] justify-between sticky top-0 ">
            <div className=""  >
            <div className="text-green-600 font-bold text-2xl">
              
              <p>Your Cart</p>
            </div>
            <div>
              <div className="text-green-600 font-bold text-4xl pb-6">
                SUMMARY
              </div>
              <p className="pt-2">
                <span className="font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>
            </div>
           
            <div className="pb-8">
              <p className="font-semibold">Total Amount:<span className="font-bold">${totalAmount}</span> </p>
              <button className="bg-green-600 p-1.5 mt-2 rounded-lg w-[80%] font-bold text-white">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center place-items-center h-[85vh] w-[125vh] gap-4">
          <h1 className="text-3xl font-semibold">Cart Empty</h1>
          <NavLink to={"/home"}>
            <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in">Shop Now</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
