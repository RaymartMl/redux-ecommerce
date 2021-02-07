import React from "react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="p-20 text-center min-h-screen">
        <h1 className="text-6xl font-light tracking-widest mb-10 text-black">
          Shop with{" "}
          <span className="text-white bg-primary inline-block py-1 px-2">
            confidence
          </span>
        </h1>
        <p className="text-xl tracking-wider mb-20">
          Makes your shopping easy, fast & enjoyable
        </p>

        <div className="space-x-5">
          <a
            href="#example"
            className="py-4 px-24 bg-black border-2 border-black text-white rounded tracking-wider hover:bg-primary hover:border-primary"
          >
            Shop Now
          </a>
          <a
            href="#featured"
            className="py-4 px-14 border-black hover:border-primary text-black border-2 rounded tracking-wider"
          >
            See Featured Products
          </a>
        </div>
      </section>

      <section
        className="p-20 pb-10 mb-10 text-white bg-black text"
        id="featured"
      >
        <h2 className="text-center text-3xl mb-10 tracking-wider">
          Featured Products
        </h2>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {Array(6)
            .fill(null)
            .map((_) => (
              <Card />
            ))}
        </div>

        <a
          href="#more"
          className="text-center tracking-widest text-xl font-light block"
        >
          See More{" "}
        </a>
      </section>
    </Layout>
  );
}

function Card() {
  return (
    <a href="#example" className="bg-white text-black  rounded group">
      <div className="relative">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
          className="rounded-t h-60 mx-auto m-2 transform group-hover:scale-105 relative"
        />
        <a
          href="#react"
          className=" justify-between bg-white text-black py-5 px-10 absolute left-0 right-0 top-52 hidden transition  group-hover:flex"
        >
          <p className="text-primary">Add to Cart</p>
          <p>logo</p>
        </a>
      </div>
      <div className="px-6 py-10">
        <p className="font-bold text-center mb-2 tracking-wide">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </p>
        <p className="border-b-2 border-primary inline-block mx-auto">
          ₱ 109.95
        </p>
      </div>
    </a>
  );
}
