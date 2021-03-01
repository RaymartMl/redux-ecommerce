import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { getCartQuantities } from "../store/cart";

const active = "transition border-b-2 border-primary text-black";
const others = "transition border-b-2 border-transparent hover:border-primary";

export default function Header() {
  const currentUrl = useLocation().pathname;
  const productQuantity = useSelector(getCartQuantities);
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

          <Link to="/cart" className="relative">
            <FiShoppingCart
              className=" inline-block ml-4 text-primary"
              size="1.40rem"
            />

            <div className="-bottom-3 left-10 absolute px-2 py-1 text-xs text-offWhite bg-primary inline-block rounded-full">
              {productQuantity}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
