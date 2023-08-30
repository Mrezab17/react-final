import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isFetched: false,
  },
  reducers: {
    setFetched(state) {
      state.isFetched = true;
    },
    setNotFetched(state) {
      state.isFetched = false;
    },
    replaceProducts(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const { setFetched, replaceProducts, setNotFetched } =
  productsSlice.actions;

export const getIsFetched = (state) => state.products.isFetched;
export default productsSlice.reducer;
