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
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push(newItem);
      } else {
        state.items.map((item) =>
          item.id === newItem.id
            ? { count: item.count + 1, price: item.price }
            : item
        );
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;

      state.items.map((item) =>
        item.id === id ? { count: item.count - 1, price: item.price } : item
      );

      state.items.map((item) => (item.count === 0 ? null : item));
    },
    emptyCart(state) {
      state.items = [];
    },
    updateTotal(state) {
      let sum = 0;
      state.items.map((item) => {
        sum += item.count * item.price;
      });
      state.totalPrice = sum;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, updateTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
