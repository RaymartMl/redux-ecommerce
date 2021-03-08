import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsImage } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addOrUpdate } from "../store/cart";
import { humanReadable } from "../utils/humanReadableNumber";

export default function ProductCard({ product, className, loading }) {
  const dispatch = useDispatch();
  return (
    <Link
      to={`/product/${product.id}`}
      className={`text-black bg-white rounded group ${className}`}
    >
      {loading ? (
        <ProductSkeleton />
      ) : (
        <>
          <div className="relative">
            <img
              src={product.image}
              alt="product"
              className="mx-auto m-4 transform rounded-t h-60 max-w-full group-hover:scale-105"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addOrUpdate({ productId: product.id, quantity: 1 }));
              }}
              className="absolute w-full focus:outline-none left-0 right-0 justify-between hidden px-10 py-5 text-black transition bg-white  top-52 group-hover:flex"
            >
              <p className="text-primary">Add to Cart</p>
              <FiShoppingCart
                className="inline-block text-primary"
                size="1.25rem"
              />
            </button>
          </div>
          <div className="  px-6 py-8 text-center">
            <p className="mb-4 font-bold text-sm tracking-wide text-center overflow-ellipsis line-clamp-2">
              {product.title}
            </p>
            <p className="inline-block mx-auto border-b-2 border-primary">
              ₱ {humanReadable(product.price)}
            </p>
          </div>
        </>
      )}
    </Link>
  );
}

function ProductSkeleton() {
  return (
    <div className="animate-pulse">
      <BsImage className="my-10 mx-auto text-primary" size="5rem" />

      <div className="px-6 py-14">
        <div className="h-4 bg-primary rounded mb-4"></div>
        <div className="h-4 bg-primary rounded"></div>
      </div>
    </div>
  );
}
