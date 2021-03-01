import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../store/products";
import { addOrUpdate } from "../store/cart";
import InputCounter from "../components/InputCounter";
import Loading from "../components/Loading";

export default function ProductDetail() {
  const history = useHistory();
  const { productId } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(productSelector(parseInt(productId, 10)));

  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addOrUpdate({ productId: product.id, quantity }));
  }

  return (
    <>
      <div className="container p-5 mx-auto">
        <div className="max-w-5xl p-7 mx-auto bg-white rounded">
          <button
            onClick={() => history.goBack()}
            className="flex items-center mb-2 ml-10"
          >
            <BiArrowBack className="inline-block mr-2" /> Back
          </button>
          {product ? (
            <div className="flex flex-col lg:flex-row items-center justify-center p-5 ">
              <img
                src={product.image}
                alt="product"
                className="h-72 md:h-96 max-w-xs mx-auto"
              />
              <div className="flex flex-col py-10 px-0 md:px-10 justify-center text-center max-w-prose">
                <div className="mb-12 flex-1">
                  <h2 className="mb-6 text-2xl text-center lg:text-left font-bold tracking-wide text-black">
                    {product.title}
                  </h2>
                  <p className="lg:text-left">{product.description}</p>
                </div>
                <div className="flex flex-col md:flex-row items-center  justify-around">
                  <p className="text-xl mb-4 md:mb-0  font-bold self-center">
                    ₱{product.price}
                  </p>
                  <form
                    className="space-x-4 flex items-center"
                    onSubmit={handleSubmit}
                  >
                    <InputCounter
                      className="self-stretch items-center "
                      value={quantity}
                      onIncrement={() => setQuantity(quantity + 1)}
                      onDecrement={() =>
                        quantity > 1 && setQuantity(quantity - 1)
                      }
                      noSubmit
                    />
                    <button
                      type="submit"
                      className="p-4 tracking-wider text-offWhite border-2 border-black hover:border-primary bg-black rounded hover:bg-primary"
                    >
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
