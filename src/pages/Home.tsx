import React, { useState } from "react";
import ProductCard, { ProductCardSkeleton } from "../components/ProductCard";
import { Link } from "react-router-dom";
import { BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import { featuredProductsSelector } from "../store/products";
import { toast } from "react-toastify";

export default function Home() {
  const [email, setEmail] = useState("");
  const products = useSelector(featuredProductsSelector(6));

  function handleEmailSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setEmail("");
    toast("This feature is not yet implemented");
  }

  return (
    <div className="">
      {/* Hero Section */}
      <section className="container min-h-screen p-10 md:p-20 pb-10 mx-auto text-center ">
        <h1 className="mb-10 text-6xl font-light leading-snug tracking-widest text-black">
          Shop with{" "}
          <span className="inline-block px-4 text-offWhite bg-primary">
            confidence
          </span>
        </h1>
        <p className="mb-20 text-xl tracking-wider">
          Makes your shopping easy, fast & enjoyable
        </p>

        <div className="flex flex-col justify-center space-y-2 sm:space-y-0 sm:space-x-5 sm:flex-row items-center">
          <Link
            to="/store"
            className="sm:px-16 md:px-24 py-5 self-stretch  tracking-wider bg-black border-2 border-black rounded text-offWhite hover:bg-primary hover:border-primary"
          >
            Shop Now
          </Link>
          <a
            href="#featured"
            className="sm:px-3 md:px-10 py-5 self-stretch inline-flex items-center  tracking-wider justify-center text-center text-black border-2 border-black rounded hover:border-primary"
          >
            <span>See Featured Products</span>
            <BiDownArrowAlt
              className="inline-block ml-2 animate-bounce text-primary"
              size="1.25rem"
            />
          </a>
        </div>
      </section>

      {/* Featured Section */}
      <section
        className="p-20 pb-10 mb-10 bg-black text-offWhite text"
        id="featured"
      >
        <div className="container mx-auto">
          <h2 className="mb-10 text-3xl tracking-wider text-center">
            Featured Products
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {products.length
              ? products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : Array(6)
                  .fill(0)
                  .map((_, index) => <ProductCardSkeleton key={index} />)}
          </div>
          <Link
            to="/store"
            className="items-center block text-xl font-light tracking-widest text-center "
          >
            <span>See More</span>
            <BiRightArrowAlt className="inline-block ml-2" />
          </Link>
        </div>
      </section>

      {/* Email Section */}
      <section className="container p-10 pb-20 mx-auto text-center">
        <h2 className="mb-6 text-3xl md:tracking-wider text-primary">
          Make your shopping experience more awesome
        </h2>
        <p className="mb-12 md:tracking-wide">
          Get the latest trends, coupons and discounts straight to your inbox
        </p>
        <form
          onSubmit={handleEmailSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="inline-block w-full sm:max-w-sm p-4 mb-4 sm:mb-0 sm:mr-4 border-2 border-black rounded "
            placeholder="Email Address"
          />
          <button className="p-4 sm:px-2  md:px-8 tracking-wider self-stretch bg-black border-2 border-black rounded text-offWhite hover:border-primary hover:bg-primary">
            Subscribe Now
          </button>
        </form>
      </section>
    </div>
  );
}
