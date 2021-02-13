// cart -> products + quantity

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [{ productId: 1, quantity: 1 }],
  reducers: {
    addProduct(cart, action) {
      // payload = {productId, quantity}
      cart.push(action.payload);
    },

    updateQuantity(cart, action) {
      const { productId, quantity } = action.payload;
      const product = cart.find((product) => product.id === productId);

      if (!product) {
        return cart.push(action.payload);
      }

      product.quantity = quantity;
    },

    removeProduct(products, action) {
      const { productId } = action.payload;
      products = products.filter((product) => product.id !== productId);
    },
  },
});

export const { addProduct, updateQuantity, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
