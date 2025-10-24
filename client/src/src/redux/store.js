import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authslice";
import foodReducer from "./features/food/foodSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        food: foodReducer,
        cart: cartReducer,
    },
});