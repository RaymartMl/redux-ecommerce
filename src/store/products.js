import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import db from "../api/firestore";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await db.collection("products").get();

    const products = [];
    response.forEach((doc) => {
      const product = doc.data();
      const title = product.title.trim().split(" ").join("-");
      product.id = `${title}.${doc.id}`;
      products.push(product);
    });

    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: { loading: "idle", data: [], error: null },
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    [fetchProducts.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "fulfilled";
        state.data = action.payload;
      }
    },
    [fetchProducts.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "error";
        state.data = [];
        state.error = action.error;
      }
    },
  },
});

export const productsSelector = createSelector(
  (state) => state.products,
  (products) => products
);

export const featuredProductsSelector = (num) =>
  createSelector(
    (state) => state.products,
    (products) => products.data?.slice(0, num)
  );

export const productSelector = (productId) =>
  createSelector(
    (state) => state.products,
    (products) => {
      if (!products.data.length) return;

      return products.data?.find((product) => product.id === productId) || -1;
    }
  );

export default productSlice.reducer;
