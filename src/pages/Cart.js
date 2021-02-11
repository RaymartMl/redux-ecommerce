import React from "react";

import { InputCounter } from "./ProductDetail";

export default function Cart() {
  return (
    <div className="container p-10 mx-auto">
      <div className="">
        <div className="overflow-auto sm:rounded mb-10">
          <table className="min-w-full divide-y divide-primary ">
            <thead className="text-xs font-medium text-left uppercase bg-white tracking wider">
              <tr className="p-6">
                <th scope="col" class="p-6">
                  Product
                </th>
                <th scope="col" class="p-6">
                  Unit Price
                </th>
                <th scope="col" class="p-6">
                  Quantity
                </th>
                <th scope="col" class="p-6">
                  Total Price
                </th>
                <th scope="col" class="p-6">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-black divide-opacity-25">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-40 w-40">
                      <img
                        class="h-40 mx-auto"
                        src="./placeholder.jpg"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-black">
                        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm "> ₱ 109.95</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <InputCounter className="" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                  ₱ 109.95
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-40 w-40">
                      <img
                        class="h-40 mx-auto"
                        src="./placeholder.jpg"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-black">
                        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                      </p>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm "> ₱ 109.95</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <InputCounter className="" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                  ₱ 109.95
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">
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
            <button className="p-4 px-8 tracking-wider   text-black border-2 border-black rounded  hover:border-primary">
              Shop More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
