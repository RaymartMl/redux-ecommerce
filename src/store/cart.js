// cart -> products + quantity

import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    { productId: 1, quantity: 3 },
    { productId: 3, quantity: 1 },
    { productId: 11, quantity: 1 },
    { productId: 14, quantity: 1 },
  ],
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
    },

    removeProduct(cart, action) {
      const { productId } = action.payload;
      return cart.filter((product) => product.productId !== productId);
    },
  },
});

export const getCartProducts = createSelector(
  (state) => state.cart,
  (state) => state.products,
  (cart, products) => {
    if (products.loading !== "fulfilled") return [];

    return cart.map((listing) => ({
      product: products.data?.find(
        (product) => product.id === listing.productId
      ),
      quantity: listing.quantity,
    }));
  }
);

export const getCartQuantities = createSelector(
  (state) => state.cart,
  (cart) => cart.length
);

export const getTotalPrice = (productId) =>
  createSelector(
    (state) => state.cart,
    (state) => state.products,
    (cart, products) => {
      const unitPrice = products.data?.find(
        (product) => product.id === productId
      ).price;

      const quantity = cart.find((product) => product.productId === productId)
        .quantity;

      return unitPrice * quantity;
    }
  );

export const getGrossPrice = createSelector(
  (state) => state.cart,
  (state) => state.products,
  (cart, products) => {
    if (products.loading !== "fulfilled") return 0;

    const listing = cart.map((listing) => ({
      product: products.data?.find(
        (product) => product.id === listing.productId
      ),
      quantity: listing.quantity,
    }));

    const grossPrice = listing
      .map(({ product, quantity }) => product.price * quantity)
      .reduce((a, b) => a + b, 0);

    return grossPrice;
  }
);

export const { addOrUpdate, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
