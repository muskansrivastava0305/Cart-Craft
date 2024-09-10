// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((product) => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuant: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuant: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, incrementQuant, decrementQuant } = cartSlice.actions;
export default cartSlice.reducer;








