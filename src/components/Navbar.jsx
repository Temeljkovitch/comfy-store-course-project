import React from "react";
import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Logo */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiBars3BottomLeft className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-m dropdown-content mt-3 z-[1] p-2 shadow bg-base-200"
            ></ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLink className="btn btn-ghost text-m capitalize">home</NavLink>
            <NavLink className="btn btn-ghost text-m capitalize">about</NavLink>
            <NavLink className="btn btn-ghost text-m capitalize">
              products
            </NavLink>
            <NavLink className="btn btn-ghost text-m capitalize">cart</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <FaMoon />
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <FaShoppingCart className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                0
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
