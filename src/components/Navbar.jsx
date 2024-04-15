import { NavLink } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const { numItemsInCart } = useSelector((state) => state.cartState);
  const { theme } = useSelector((state) => state.userState);

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
              className="menu menu-m dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              defaultChecked={theme === "dark" ? true : false}
              onChange={handleTheme}
            />

            <FaSun className="swap-on h-5 w-5" />

            <FaMoon className="swap-off h-5 w-5" />
          </label>
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <FaShoppingCart className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
