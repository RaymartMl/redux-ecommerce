import { createSelector, createSlice } from "@reduxjs/toolkit";
import { CartSliceState } from "../interfaces/cart";
import { ensure } from "../utils/ensure";
import { getLocalStorage, updateLocalStorage } from "../utils/localStorage";
import { RootState } from "./store";

const initialState = getLocalStorage("cart", []) as CartSliceState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrUpdate(cart, action) {
      const { productId, quantity } = action.payload;
      const isProduct = cart.findIndex(
        (product) => product.productId === productId
      );

      if (isProduct === -1) {
        cart.push(action.payload);
      } else {
        cart[isProduct].quantity += quantity;
      }

      updateLocalStorage("cart", cart);
    },

    removeProduct(cart, action) {
      const { productId } = action.payload;
      cart = cart.filter((product) => product.productId !== productId);
      updateLocalStorage("cart", cart);

      return cart;
    },

    removeAllProducts() {
      updateLocalStorage("cart", []);
      return [];
    },
  },
});

export const getCartProducts = createSelector(
  (state: RootState) => state.cart,
  (state: RootState) => state.products,
  (cart, products) => {
    if (products.loading !== "fulfilled") return -1;

    return cart.map((listing) => ({
      product: ensure(
        products.data?.find((product) => product.id === listing.productId)
      ),
      quantity: listing.quantity,
    }));
  }
);

export const getCartQuantities = createSelector(
  (state: RootState) => state.cart,
  (cart) => cart.length
);

export const getTotalPrice = (productId: string) =>
  createSelector(
    (state: RootState) => state.cart,
    (state: RootState) => state.products,
    (cart, products) => {
      const unitPrice = ensure(
        products.data?.find((product) => product.id === productId)
      ).price;

      const quantity = ensure(
        cart.find((product) => product.productId === productId)
      ).quantity;

      return Math.round(unitPrice * quantity);
    }
  );

export const getGrossPrice = createSelector(
  (state: RootState) => state.cart,
  (state: RootState) => state.products,
  (cart, products) => {
    if (products.loading !== "fulfilled") return 0;

    const listing = cart.map((listing) => ({
      product: ensure(
        products.data?.find((product) => product.id === listing.productId)
      ),
      quantity: listing.quantity,
    }));

    const grossPrice = listing
      .map(({ product, quantity }) => product.price * quantity)
      .reduce((a, b) => a + b, 0);

    return grossPrice;
  }
);

export const {
  addOrUpdate,
  removeProduct,
  removeAllProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
