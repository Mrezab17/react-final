import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      //state.items = [];
      const existingItem = state.items.find((item) => item.id === newItem.id);

      console.log(existingItem);
      if (!existingItem) {
        state.items.push({ ...newItem, count: 1 });
      } else {
        state.items = state.items.map((item) => {
          const newCount = parseInt(item.count) + 1;
          return item.name == newItem.name
            ? { ...newItem, count: newCount }
            : item;
        });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      console.log("At Remove : ");

      state.items = state.items.map((item) =>
        item.id == id ? { ...item, count: item.count - 1 } : item
      );

      state.items = state.items.filter((item) => item.count !== 0);
    },
    emptyCart(state) {
      state.items = [];
    },
    updateTotal(state) {
      //
      let sum = 0;
      state.items.map((item) => {
        sum += item.count * item.price;
      });
      state.total = sum;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, updateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
