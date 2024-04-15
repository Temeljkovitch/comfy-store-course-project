import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
  };
  const { user } = useSelector((state) => state.userState);
  return (
    <header className="bg-neutral text-neutral-content py-2 ">
      <div className="align-element flex justify-center sm:justify-end ">
        {/* User */}
        {user ? (
          <div className="flex items-center gap-x-2 sm:gap-x-8">
            <p className="text-xs sm:text-sm capitalize">Hello, {user.username}.</p>
            <button
              onClick={handleLogout}
              className="btn btn-primary btn-xs btn-outline uppercase"
            >
              logout
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-x-4">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create an Account
            </Link>
          </div>
        )}
        {/* Links */}
      </div>
    </header>
  );
};

export default Header;
