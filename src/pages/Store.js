import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProducts, productsSelector } from "../store/products";

export default function Store() {
  const dispatch = useDispatch();
  const { loading, data: products, error } = useSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
          {/* {Array(12)
            .fill(null)
            .map((_, index) => (
              <ProductCard key={index} />
            ))} */}
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>
    </>
  );
}
