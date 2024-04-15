import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  {
    id: 1,
    url: "/",
    value: "home",
  },
  {
    id: 2,
    url: "about",
    value: "about",
  },
  {
    id: 3,
    url: "products",
    value: "products",
  },
  {
    id: 4,
    url: "cart",
    value: "cart",
  },
  {
    id: 5,
    url: "checkout",
    value: "checkout",
  },
  {
    id: 6,
    url: "orders",
    value: "orders",
  },
];

const NavLinks = () => {
  const { user } = useSelector((state) => state.userState);
  return (
    <>
      {links.map((link) => {
        if ((link.url === "checkout" || link.url === "orders") && !user)
          return null;
        return (
          <li key={link.id}>
            <NavLink to={link.url} className="capitalize">
              {link.value}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
