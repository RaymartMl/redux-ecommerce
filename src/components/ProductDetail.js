import React, { useState } from "react";

export default function ProductDetail() {
  return (
    <>
      <div className="container mx-auto">
        <div className="max-w-5xl p-7 mx-auto bg-white rounded">
          <a href="#link" className=" mb-2 ml-10">
            🔙 Back
          </a>
          <div className="flex justify-center p-5 ">
            <img src="/placeholder.jpg" alt="product" className="h-96" />
            <div className="flex flex-col p-10 max-w-prose">
              <div className="flex-1">
                <h2 className="mb-6 text-2xl font-bold tracking-wide text-black">
                  Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                </h2>
                <p>
                  Your perfect pack for everyday use and walks in the forest.
                  Stash your laptop (up to 15 inches) in the padded sleeve, your
                  everyday
                </p>
              </div>
              <div className="flex items-center justify-around">
                <p className="text-xl font-bold">₱ 109.95</p>
                <div className="space-x-4 flex items-center">
                  <InputCounter />
                  <button className="p-4 tracking-wider text-offWhite border-2 border-black hover:border-primary bg-black rounded hover:bg-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function InputCounter({ className }) {
  const [count, setCount] = useState(1);

  return (
    <div
      className={`inline-block max-w-xs overflow-hidden bg-offWhite select-none ${className}`}
    >
      <button
        className="p-2 px-4 text-lg font-bold focus:outline-none"
        onClick={() => count > 1 && setCount(count - 1)}
      >
        -
      </button>
      {/* <input
        className="flex-1  p4 font-bold text-center outline-none text-primary bg-offWhite"
        type="number"
        value={count}
      /> */}

      <div className="flex-1 inline-block  p-2 font-bold text-center outline-none text-primary bg-offWhite">
        {count}
      </div>
      <button
        className="p-2 px-4 text-lg font-bold outline-none focus:outline-none"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
}
