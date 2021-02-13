import React from "react";
import { Link } from "react-router-dom";

import { InputCounter } from "./ProductDetail";

export default function Cart() {
  return (
    <div className="container  mx-auto">
      <div className="">
        <div className="overflow-auto sm:rounded mb-10">
          <table className="min-w-full divide-y divide-primary ">
            <thead className="text-xs font-medium text-left uppercase bg-white tracking wider">
              <tr className="p-6">
                <th scope="col" className="p-6">
                  Product
                </th>
                <th scope="col" className="p-6">
                  Unit Price
                </th>
                <th scope="col" className="p-6">
                  Quantity
                </th>
                <th scope="col" className="p-6">
                  Total Price
                </th>
                <th scope="col" className="p-6">
                  <span className="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-black divide-opacity-25">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-40 w-40">
                      <img
                        className="h-40 mx-auto"
                        src="./placeholder.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-black">
                        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm "> ₱ 109.95</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <InputCounter className="" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  ₱ 109.95
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <a
                    href="#delete"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-40 w-40">
                      <img
                        className="h-40 mx-auto"
                        src="./placeholder.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-black">
                        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm "> ₱ 109.95</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <InputCounter className="" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  ₱ 109.95
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <a
                    href="#delete"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="sm:rounded flex items-center justify-between p-10 bg-white">
          <p className="font-bold text-lg">Total: ₱ 109.95</p>
          <div className="space-x-4">
            <button className="p-4 px-8 tracking-wider text-offWhite border-2 border-black hover:border-primary bg-black rounded hover:bg-primary">
              Checkout
            </button>
            <Link
              to="/store"
              className="p-4 px-8 tracking-wider   text-black border-2 border-black rounded  hover:border-primary"
            >
              Shop More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
