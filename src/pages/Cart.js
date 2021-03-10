import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addOrUpdate,
  getCartProducts,
  getGrossPrice,
  getTotalPrice,
  removeAllProducts,
} from "../store/cart";

import InputCounter from "../components/InputCounter";
import { removeProduct } from "../store/cart";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound";
import { humanReadable } from "../utils/humanReadableNumber";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(getCartProducts);
  const grossPrice = useSelector(getGrossPrice);

  const history = useHistory();

  function handleCheckout() {
    dispatch(removeAllProducts());
    history.push("/");
    toast("Checkout Flow is not yet Implemented!");
  }

  if (products === -1) return <Loading />;
  if (!products.length) return <NotFound title="No Product in Cart." />;

  return (
    <div className="container mx-auto">
      <div className="">
        <div className="mb-10 overflow-auto sm:rounded">
          <table className="min-w-full divide-y divide-primary">
            <thead className="text-xs font-medium text-left uppercase bg-white tracking wider">
              <tr className="text-center">
                <th scope="col" className="p-2">
                  Product
                </th>
                <th scope="col" className="p-2">
                  Product Name
                </th>
                <th scope="col" className="p-2">
                  Unit Price
                </th>
                <th scope="col" className="p-2">
                  Quantity
                </th>
                <th scope="col" className="p-2">
                  Total Price
                </th>
                <th scope="col" className="p-6">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-black divide-opacity-25">
              {products.map(({ product, quantity }) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  quantity={quantity}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="sticky bottom-0 left-0 flex flex-col sm:flex-row items-center justify-between w-full  bg-white p-5 sm:rounded md:p-10">
          <p className="text-lg font-bold mb-4 sm:mb-0">
            Total: ₱ {humanReadable(grossPrice)}
          </p>
          <div className="space-x-4">
            <button
              onClick={handleCheckout}
              className="p-4 px-8 tracking-wider bg-black border-2 border-black rounded text-offWhite hover:border-primary hover:bg-primary"
            >
              Checkout
            </button>
            <Link
              to="/store"
              className="p-4 px-8 tracking-wider text-black border-2 border-black rounded hover:border-primary"
            >
              Shop More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartProduct({ product, quantity }) {
  const dispatch = useDispatch();
  const totalPrice = useSelector(getTotalPrice(product.id));

  const [value, setValue] = useState(quantity);
  const quantityDifference = value - quantity;

  function handleSubmit(e) {
    e.preventDefault();
    if (quantityDifference) {
      dispatch(
        addOrUpdate({ productId: product.id, quantity: quantityDifference })
      );
      toast("Quantity Updated", { toastId: product.id });
    }
  }

  function handleDelete() {
    dispatch(removeProduct({ productId: product.id }));
    toast.error("Product Removed in Cart");
  }
  return (
    <tr className="px-6 py-4">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-40 h-40">
            <img className="h-40 mx-auto" src={product.image} alt="" />
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <Link
          to={`/product/${product.id}`}
          className="text-sm font-medium text-black"
        >
          {product.title}
        </Link>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p className="text-sm "> ₱ {humanReadable(product.price)}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <form onSubmit={handleSubmit}>
          <InputCounter
            value={value}
            onIncrement={() => setValue(value + 1)}
            onDecrement={() => value > 1 && setValue(value - 1)}
          />
        </form>
      </td>
      <td className="px-6 py-4 text-sm text-black whitespace-nowrap">
        ₱ {humanReadable(totalPrice)}
      </td>
      <td className="px-6 py-4 text-sm text-right whitespace-nowrap">
        <button
          className="focus:outline-none hover:text-primary"
          onClick={handleDelete}
        >
          <BiTrash className="inline-block" size="1.25rem" />
        </button>
      </td>
    </tr>
  );
}
