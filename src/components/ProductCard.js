import React from "react";
import { FiShoppingCart } from "react-icons/fi";
export default function ProductCard() {
  return (
    <a href="product/:id" className="text-black bg-white rounded group">
      <div className="relative">
        <img
          src="/placeholder.jpg"
          alt="product"
          className="relative m-2 mx-auto transform rounded-t h-60 group-hover:scale-105"
        />
        <a
          href="#react"
          className="absolute left-0 right-0 justify-between hidden px-10 py-5 text-black transition bg-white  top-52 group-hover:flex"
        >
          <p className="text-primary">Add to Cart</p>
          <FiShoppingCart
            className="inline-block text-primary"
            size="1.25rem"
          />
        </a>
      </div>
      <div className="px-6 py-10">
        <p className="mb-2 font-bold tracking-wide text-center">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>
        <p className="inline-block mx-auto border-b-2 border-primary">
          ₱ 109.95
        </p>
      </div>
    </a>
  );
}
