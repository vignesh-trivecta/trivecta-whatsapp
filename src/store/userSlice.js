import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: '',
    showPassword: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.user = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setShowPassword: (state, action) => {
            state.showPassword = action.payload;
        }
    }
});

export const { setEmail, setPassword, setShowPassword } = userSlice.actions;

export default userSlice.reducer;