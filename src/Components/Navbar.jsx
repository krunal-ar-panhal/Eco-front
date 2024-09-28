import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiSearch, CiUser, CiShoppingCart, CiMenuFries } from "react-icons/ci";
import { IoChevronBackOutline } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
    <div className="flex items-center justify-between py-5 font-medium">
      <div>
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" className="w-36" />
        </Link>
      </div>
      <div>
        <ul className="hidden sm:flex text-sm items-center gap-7 ">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-6 text-xl items-center">
        <div>
          <CiSearch className="w-5 cursor-pointer font-bold" />
        </div>

        <div className="group relative">
          <CiUser className="w-5 cursor-pointer font-bold" />
          <div className="group-hover:block hidden absolute dropdown-menu left-1/2 transform -translate-x-1/2 pt-4">
            <div className="flex flex-col gap-2 md:w-36 w-28  py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black text-sm">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black text-sm">Orders</p>
              <p className="cursor-pointer hover:text-black text-sm">Logout</p>
            </div>
          </div>
        </div>

        <div>
          <Link to="/cart" className="relative">
            <CiShoppingCart className="w-5 cursor-pointer font-bold" />
            <p className="absolute right-[-5px] w-4 bottom-[-5px] text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              5
            </p>
          </Link>
        </div>

        <div>
          <CiMenuFries
            onClick={() => setMobileMenu(true)}
            className="w-5 cursor-pointer font-bold sm:hidden"
          />
        </div>

        <div
          className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all duration-500 ease-in-out transform ${
            mobileMenu
              ? "w-full opacity-100 translate-x-0"
              : "w-0 opacity-0 translate-x-full"
          }`}
        >
          <div className="flex flex-col text-gray-600 font-normal mt-3 ">
            <div
              onClick={() => setMobileMenu(false)}
              className="cursor-pointer flex items-center"
            >
              <IoChevronBackOutline />
              <p>BACK</p>
            </div>

            <div
              onClick={() => setMobileMenu(false)}
              className="flex flex-col mt-3  "
            >
              <NavLink to="/" className="border-b-2  py-2 pl-6">
                Home
              </NavLink>
              <NavLink to="/collection" className="border-b-2 py-2 pl-6">
                Collection
              </NavLink>
              <NavLink to="/contact" className="border-b-2 borderb py-2 pl-6">
                Contact
              </NavLink>
              <NavLink to="/about" className="border-b-2 borderb py-2 pl-6">
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
   </>
  );
};

export default Navbar;
