import { createSlice } from "@reduxjs/toolkit"


const initialState = []

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.find((item) => item.id === action.payload.id);
            if (product) {
              product.quantity += 1;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
        // addToCart: (state, action) => {
        //     state.push(action.payload)
        // },

        incrementQuant: (state, action) => {
            const product = state.find((product) => product.id === action.payload);
            if (product) {
              product.quantity += 1
            }
          },
          decrementQuant: (state, action) => {
            const product = state.find((product) => product.id === action.payload);
            if (product && product.quantity > 1) {
              product.quantity -= 1;
            } else{
              return state = state.filter((item) => item.id  !== action.payload);
            }
      
          },
    }
})

// console.log(cartSlice);


export const { addToCart, incrementQuant, decrementQuant } = cartSlice.actions
export default cartSlice.reducer