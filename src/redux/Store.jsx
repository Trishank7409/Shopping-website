import { configureStore } from "@reduxjs/toolkit";
// import CounterSlice from "./slices/CounterSlice";
// import {cartSlice} from "./slices/cartSlice";
import { cartSlice } from "./slices/CartSlice";
// import cartReducer from "./slices/cartSlice";
export const store= configureStore({
    reducer:({
        // cart:cartReducer,
        cart: cartSlice.reducer,
    })
})