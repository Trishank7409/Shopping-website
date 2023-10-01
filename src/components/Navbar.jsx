import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import Logo from "../assets/pngegg.png";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const { cart } = useSelector((state) => state);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="flex justify-between items-center max-w-6xl mx-auto h-20 ">
        {isLoggedIn ? (
          <NavLink to="/home">
            <div className="ml-5">
              <img src={Logo} className="h-14" alt="Logo" />
            </div>
          </NavLink>
        ) : (
          <NavLink to="/">
            <div className="ml-5">
              <img src={Logo} className="h-14" alt="Logo" />
            </div>
          </NavLink>
        )}

        {/* Mobile menu button */}
        <div className="sm:hidden">
          <button className="text-slate-100" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        <div className="hidden sm:flex items-center font-medium text-slate-100 mr-5 space-x-6">
          {!isLoggedIn && (
            <NavLink to="/login">
              <button className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold border-black">
                Login
              </button>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink to="/signup">
              <button className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold">
                SignUp
              </button>
            </NavLink>
          )}

        {/* <div className="flex flex-col"> */}
        {isLoggedIn && (
          <div className="flex gap-7">
             <NavLink to="/home">
              <p>Home</p>
              </NavLink>
              <NavLink to="/cart">
                <div className="relative">
                  <BsCart4 className="text-2xl" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                      {cart.length}
                    </span>
                  )}
                </div>
              </NavLink>

              </div>
           
          )}
         
           
        {/* </div> */}
        

{isLoggedIn && (
            <NavLink to="/">
              <button
                className="bg-red-400 rounded-md text-white py-[8px] px-[12px] font-bold border-black"
                on
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
              >
                Logout
              </button>
            </NavLink>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-900 text-white p-4">
          <NavLink to="/" className="block py-2">
            Home
          </NavLink>
          <NavLink to="/cart" className="block py-2">
            <div className="relative">
              <BsCart4 className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
