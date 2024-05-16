import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authentication: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.authentication = true,
            state.userData = action.payload.userData
        },
        logout: (state) => {
            state.authentication = false,
            state.userData = null
        }
    }
})


export const {login, logout} = authSlice.actions;
export const authStatus = (state : any) => state.auth;
export default authSlice.reducer;