import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const active = "transition border-b-2 border-primary text-black";
const others = "transition border-b-2 border-transparent hover:border-primary";

export default function Header() {
  const currentUrl = useLocation().pathname;
  return (
    <header className="px-20 py-10">
      <div className="container flex justify-between mx-auto">
        <Link to="/" className="font-bold text-primary">
          Logo
        </Link>
        <div className="space-x-5">
          <Link to="/" className={currentUrl === "/" ? active : others}>
            Home
          </Link>
          <Link
            to="/store"
            className={currentUrl === "/store" ? active : others}
          >
            Store
          </Link>
          <Link to="/cart">
            <FiShoppingCart className="inline-block ml-4" size="1.25rem" />
          </Link>
        </div>
      </div>
    </header>
  );
}
