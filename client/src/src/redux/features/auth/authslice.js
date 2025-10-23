import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserProfileApi, loginApi, registerApi } from "./authApi.js";


export const loginUser = createAsyncThunk("auth/loginUser", async (userData, thunkAPI) => {
    try {
        const userLogin = await loginApi(userData);

        return userLogin;

    } catch (error) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const userRegister = createAsyncThunk("auth/userRegister", async (userData, thunkAPI) => {
    try {
        const userRegister = await registerApi(userData);
        console.log(userRegister);
        return userRegister;
    } catch (error) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const fetchUserProfile = createAsyncThunk("auth/fetchUserProfile", async (token, thunAPI) => {
    try {
        const userdata = await fetchUserProfileApi(token)
        return userdata;

    } catch (error) {
        return thunAPI.rejectWithValue(err.message)
    }
})
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
            localStorage.removeItem("userToken");
            localStorage.removeItem("user");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload.user;
                state.token = action.payload.token;
                state.success = true;
                localStorage.setItem("userToken", action.payload.token)
                localStorage.setItem("user", JSON.stringify(action.payload.user));

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
                state.userInfo = action.payload.user;
                state.token = action.payload.token
                state.success = true
                localStorage.setItem("userToken", action.payload.token)
                localStorage.setItem("user", JSON.stringify(action.payload.user));
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload.user;
                state.success = true;
                localStorage.setItem("user", JSON.stringify(action.payload.user));

            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer