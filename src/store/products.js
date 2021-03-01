import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
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
        state.loading = "idle";
        state.data = action.payload;
      }
    },
    [fetchProducts.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
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

export const featuredProductsSelector = createSelector(
  (state) => state.products,
  // hard coded 6 products
  (products) => products.data?.slice(0, 6)
);

export const productSelector = (productId) =>
  createSelector(
    (state) => state.products,
    (products) => products.data?.find((product) => product.id === productId)
  );

// export const { getProductById } = productSlice.actions;

export default productSlice.reducer;