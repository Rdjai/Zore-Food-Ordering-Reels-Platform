import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authslice";
import foodReducer from "./features/food/foodSlice.js";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        food: foodReducer,
    },
});