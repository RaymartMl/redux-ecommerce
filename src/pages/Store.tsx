import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { productsSelector } from "../store/products";

export default function Store() {
  const { data: products } = useSelector(productsSelector);

  return (
    <>
      <section className="container p-10 mx-auto">
        <div className="text-center mb-14">
          <h2 className="mb-4 text-4xl font-light tracking-wider text-black">
            Shop Now
          </h2>
          <p className="sm:tracking-wide">
            We ensure quality products and superb customer experience
          </p>
        </div>

        <div className="grid gap-6 mb-12 sm:grid-cols-2 md:grid-cols-3">
          {products.length
            ? products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : Array(12)
                .fill(0)
                .map((_, i) => <ProductCard key={i} product={{}} loading />)}
        </div>
      </section>
    </>
  );
}
