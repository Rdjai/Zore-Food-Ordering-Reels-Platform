import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfileApi, loginApi, registerApi } from "./authApi.js";



export const loginUser = createAsyncThunk("auth/loginUser", async (userData, thunkAPI) => {
    try {
        const response = await loginApi(userData);
        // console.log("response from login api", response);
        if (response?.error) {
            return thunkAPI.rejectWithValue(response.error);
        }

        if (response?.token) {
            localStorage.setItem("userToken", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
        }

        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message || "Login failed");
    }
});

export const userRegister = createAsyncThunk("auth/userRegister", async (userData, thunkAPI) => {
    try {
        const response = await registerApi(userData);

        if (response?.token) {
            localStorage.setItem("userToken", response.token);
            localStorage.setItem("user", JSON.stringify(response.user));
        }

        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message || "Registration failed");
    }
});

export const fetchUserProfile = createAsyncThunk("auth/fetchUserProfile", async (token, thunkAPI) => {
    try {
        const response = await fetchUserProfileApi(token);

        if (response?.user) {
            localStorage.setItem("user", JSON.stringify(response.user));
        }

        return response;
    } catch (err) {
        return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message || "Failed to fetch profile");
    }
});


const token = localStorage.getItem("userToken");

const initialState = {
    user: token ? JSON.parse(localStorage.getItem("user")) : null,
    token: token || null,
    loading: false,
    error: null,
    success: false,
};



const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.success = false;
            state.error = null;
            localStorage.removeItem("userToken");
            localStorage.removeItem("user");
        },
        clearError: (state) => {
            state.error = null;
        },
        clearSuccess: (state) => {
            state.success = false;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.success = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(userRegister.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.success = true;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.success = true;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export const { logout, clearError, clearSuccess } = authSlice.actions;
export default authSlice.reducer;
