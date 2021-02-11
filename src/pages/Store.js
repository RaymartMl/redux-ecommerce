import React from "react";
import ProductCard from "../components/ProductCard";

export default function Store() {
  return (
    <>
      <section className="container mx-auto p-10">
        <div className="text-center mb-14">
          <h2 className="text-black text-4xl mb-4 tracking-wider font-light">
            Shop Now
          </h2>
          <p className="tracking-wide ">
            We ensure quality products and superb customer experience
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-12">
          {Array(12)
            .fill(null)
            .map((_) => (
              <ProductCard />
            ))}
        </div>
      </section>
    </>
  );
}
