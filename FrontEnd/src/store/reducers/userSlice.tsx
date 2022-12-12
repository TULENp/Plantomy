
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUserAccount } from "../../types";

const initialState: TUserAccount = {
    userLogin: '',
    userPassword: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        Register(state, action: PayloadAction<TUserAccount>) {
            state.userLogin = action.payload.userLogin;
            state.userPassword = action.payload.userPassword;
        },
    }
})

export const UserReducer = userSlice.reducer;