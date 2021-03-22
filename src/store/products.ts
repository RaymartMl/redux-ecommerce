import {
  createAsyncThunk,
  createSelector,
  createSlice,
  SerializedError,
} from "@reduxjs/toolkit";
import db from "../api/firestore";
import { Product } from "../interfaces/product";
import { RootState } from "./store";

interface ProductsSliceState {
  loading: "idle" | "pending" | "fulfilled" | "error";
  data: Product[];
  error: SerializedError | null;
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await db.collection("products").get();
    const products: Product[] = [];

    response.forEach((doc) => {
      const product = doc.data() as Product;
      const title = product.title.trim().split(" ").join("-");
      product.id = `${title}.${doc.id}`;
      products.push(product);
    });

    return products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: "idle",
    data: [],
    error: null,
  } as ProductsSliceState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "fulfilled";
        state.data = action.payload;
      }
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      if (state.loading === "pending") {
        state.loading = "error";
        state.data = [];
        state.error = action.error;
      }
    });
  },
});

export const productsSelector = createSelector(
  (state: RootState) => state.products,
  (products) => products
);

export const featuredProductsSelector = (num: number) =>
  createSelector(
    (state: RootState) => state.products,
    (products) => products.data?.slice(0, num)
  );

export const productSelector = (productId: string) =>
  createSelector(
    (state: RootState) => state.products,
    (products) => {
      if (!products.data.length) return;
      return products.data?.find((product) => product.id === productId) || -1;
    }
  );

export default productSlice.reducer;
