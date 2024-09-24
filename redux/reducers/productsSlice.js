import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle", // {idle, pending, success}
};
const PRODUCTS_ULR = "http://localhost:3000/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProduct",
  async () => {
    const response = await axios.get(PRODUCTS_ULR);
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (initialProduct) => {
    const response = await axios.post(PRODUCTS_ULR, initialProduct);
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
