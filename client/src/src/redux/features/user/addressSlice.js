import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addAddress, getAddress, updateAddress } from "./address.Api";

// 🧩 ADD USER ADDRESS
export const addUserAddress = createAsyncThunk(
    "address/addUserAddress",
    async (addressData, thunkAPI) => {
        try {
            const response = await addAddress(addressData);
            if (!response.success) {
                return thunkAPI.rejectWithValue(response.message || "Failed to add address");
            }
            return response.address;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error?.response?.data?.message || error.message || "Failed to add address"
            );
        }
    }
);

export const fetchUserAddress = createAsyncThunk(
    "address/fetchUserAddress",
    async (userId, thunkAPI) => {
        try {
            const response = await getAddress(userId);
            if (!response.success) {
                return thunkAPI.rejectWithValue(response.message || "Failed to fetch address");
            }
            return response.address;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error?.response?.data?.message || error.message || "Failed to fetch address"
            );
        }
    }
);

// 🧩 UPDATE USER ADDRESS
export const updateUserAddress = createAsyncThunk(
    "address/updateUserAddress",
    async ({ userId, updateData }, thunkAPI) => {
        try {
            const response = await updateAddress(userId, updateData);
            if (!response.success) {
                return thunkAPI.rejectWithValue(response.message || "Failed to update address");
            }
            return response.address;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error?.response?.data?.message || error.message || "Failed to update address"
            );
        }
    }
);

const uAdd = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
    address: uAdd?.address || null,
    loading: false,
    error: null,
};


const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        clearAddressError: (state) => {
            state.error = null;
        },
        clearAddress: (state) => {
            state.address = null;
            localStorage.removeItem("userAddress");
        },
    },
    extraReducers: (builder) => {
        builder
            // ADD ADDRESS
            .addCase(addUserAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUserAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.address = action.payload;
                localStorage.setItem("userAddress", JSON.stringify(action.payload));
            })
            .addCase(addUserAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // FETCH ADDRESS
            .addCase(fetchUserAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.address = action.payload;
                localStorage.setItem("userAddress", JSON.stringify(action.payload));
            })
            .addCase(fetchUserAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // UPDATE ADDRESS
            .addCase(updateUserAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateUserAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.address = action.payload;
                localStorage.setItem("userAddress", JSON.stringify(action.payload));
            })
            .addCase(updateUserAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { clearAddressError, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
