import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                (item) => item._id === action.payload._id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }

            state.totalQuantity += 1;
            state.totalAmount += action.payload.price;
        },

        removeFromCart: (state, action) => {
            const itemToRemove = state.cartItems.find(
                (item) => item._id === action.payload
            );

            if (itemToRemove) {
                state.totalQuantity -= itemToRemove.quantity;
                state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
            }

            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload
            );
        },

        decreaseQuantity: (state, action) => {
            const existingItem = state.cartItems.find(
                (item) => item._id === action.payload
            );

            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                    state.totalQuantity -= 1;
                    state.totalAmount -= existingItem.price;
                } else {
                    state.cartItems = state.cartItems.filter(
                        (item) => item._id !== action.payload
                    );
                    state.totalQuantity -= 1;
                    state.totalAmount -= existingItem.price;
                }
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        },
    },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
