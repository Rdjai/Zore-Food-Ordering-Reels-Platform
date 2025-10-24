import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFoodItemByIdApi, getFoodItemsApi } from "./foodApi.js";

export const fetchFoodItems = createAsyncThunk("food/fetchFoodItems", async (_, thunkAPI) => {
    try {
        const response = await getFoodItemsApi();
        if (response.error) {
            return thunkAPI.rejectWithValue(response.error);
        }
        return response.data || response;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error?.response?.data?.message || error.message || "Failed to fetch food items"
        );
    }
})

export const fetchFoodItemById = createAsyncThunk("food/fetchFoodItemById", async (id, thunkAPI) => {
    try {
        const response = await getFoodItemByIdApi(id);

        if (!response.success) {
            return thunkAPI.rejectWithValue(response.message || "Failed to fetch food item by ID");
        }

        return response.data || response;
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error?.response?.data?.message || error.message || "Failed to fetch food item by ID"
        );
    }
})
const initialState = {
    foodItems: [],
    foodItem: null,
    loading: false,
    error: null,
};

const foodSlice = createSlice({
    name: "food",
    initialState,
    reducers: {
        clearFoodError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoodItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFoodItems.fulfilled, (state, action) => {
                state.loading = false;
                state.foodItems = action.payload;
            })
            .addCase(fetchFoodItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchFoodItemById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFoodItemById.fulfilled, (state, action) => {
                state.loading = false;
                state.foodItem = action.payload;
            })
            .addCase(fetchFoodItemById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }



})

export const { clearFoodError } = foodSlice.actions;
export default foodSlice.reducer;