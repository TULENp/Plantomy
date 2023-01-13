
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser } from "../../types";

interface userState {
    user: TUser,
    isAuthorized: boolean,
    isLoading: boolean,
    error: string,
}

//TODO change separate fio, use TAddress in address
const initialState: userState = {
    user: {
        id: 0,
        // name: '',
        // surname: '',
        // patronymic: '',
        fio:'',
        email: '',
        phone: '',
        address: ''
        // {
        //     city: '',
        //     street: '',
        //     house: 0,
        //     apartment: 0,
        //     postIndex: '',
        // }
    },
    isAuthorized: false,
    isLoading: false,
    error: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        UserFetching(state) {
            state.isLoading = true;
        },
        UserLogIn(state) {
            if (localStorage.getItem('token')) {
                state.isAuthorized = true;
            }
            else {
                state.isAuthorized = false;
            }
        },
        UserFetchingSuccess(state, action: PayloadAction<TUser>) {
            state.isLoading = false;
            state.user = action.payload;
        },
        UserFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const UserReducer = userSlice.reducer;