import React from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className=" container mx-auto min-h-screen p-20 pb-10 text-center">
        <h1 className="mb-10 text-6xl font-light tracking-widest text-black">
          Shop with{" "}
          <span className="inline-block px-2 py-1 text-offWhite bg-primary">
            confidence
          </span>
        </h1>
        <p className="mb-20 text-xl tracking-wider">
          Makes your shopping easy, fast & enjoyable
        </p>

        <div className="space-x-5">
          <a
            href="#example"
            className="px-24 py-4 tracking-wider text-offWhite bg-black border-2 border-black rounded hover:bg-primary hover:border-primary"
          >
            Shop Now
          </a>
          <a
            href="#featured"
            className="py-4 tracking-wider text-black border-2 border-black rounded px-14 hover:border-primary"
          >
            See Featured Products
          </a>
        </div>
      </section>

      {/* Featured Section */}
      <section
        className="p-20 pb-10 mb-10 text-offWhite bg-black text"
        id="featured"
      >
        <div className="container mx-auto">
          <h2 className="mb-10 text-3xl tracking-wider text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-3 gap-6 mb-12">
            {Array(6)
              .fill(null)
              .map((_) => (
                <ProductCard />
              ))}
          </div>
          <a
            href="#more"
            className="block text-xl font-light tracking-widest text-center"
          >
            See More{" "}
          </a>
        </div>
      </section>

      {/* Email Section */}
      <section className="container mx-auto p-10 pb-20 text-center">
        <h2 className="mb-6 text-3xl tracking-wider text-primary">
          Make your shopping experience more awesome
        </h2>
        <p className="mb-12 tracking-wide">
          Know when the latest trends, coupons and discounts straight to your
          inbox
        </p>
        <form>
          <input
            type="email"
            className="inline-block p-4 w-full max-w-sm mr-4 border-2 border-black rounded "
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="p-4 px-8 tracking-wider text-offWhite border-2 border-black hover:border-primary bg-black rounded hover:bg-primary"
          >
            Subscribe Now
          </button>
        </form>
      </section>
    </div>
  );
}
